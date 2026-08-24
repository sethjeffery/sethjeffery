import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CssVariables } from "../types";
import styles from "./Minesweeper.module.css";

type Cell = {
  adjacent: number;
  flagged: boolean;
  id: number;
  mine: boolean;
  revealed: boolean;
};

type Dimensions = { columns: number; rows: number };
type GameStatus = "ready" | "playing" | "won" | "lost";

const DEFAULT_DIMENSIONS: Dimensions = { columns: 12, rows: 8 };

function dimensionsForWidth(width: number): Dimensions {
  const cellSize = width < 560 ? 34 : width < 900 ? 40 : 46;
  const columns = Math.max(9, Math.min(30, Math.floor(width / cellSize)));
  const rows = Math.max(8, Math.min(13, Math.round(columns * 0.42)));
  return { columns, rows };
}

function emptyBoard({ columns, rows }: Dimensions): Cell[] {
  return Array.from({ length: columns * rows }, (_, id) => ({
    adjacent: 0,
    flagged: false,
    id,
    mine: false,
    revealed: false,
  }));
}

function neighbours(index: number, { columns, rows }: Dimensions): number[] {
  const row = Math.floor(index / columns);
  const column = index % columns;
  const result: number[] = [];

  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
      if (rowOffset === 0 && columnOffset === 0) continue;
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (
        nextRow >= 0 &&
        nextRow < rows &&
        nextColumn >= 0 &&
        nextColumn < columns
      ) {
        result.push(nextRow * columns + nextColumn);
      }
    }
  }

  return result;
}

function layMines(
  board: Cell[],
  firstIndex: number,
  dimensions: Dimensions,
): Cell[] {
  const safeCells = new Set([
    firstIndex,
    ...neighbours(firstIndex, dimensions),
  ]);
  const candidates = board
    .map((_, index) => index)
    .filter((index) => !safeCells.has(index));
  const mineCount = Math.max(10, Math.floor(board.length * 0.16));

  for (let index = candidates.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [candidates[index], candidates[swapIndex]] = [
      candidates[swapIndex],
      candidates[index],
    ];
  }

  const mines = new Set(candidates.slice(0, mineCount));
  return board.map((cell, index) => ({
    ...cell,
    mine: mines.has(index),
    adjacent: neighbours(index, dimensions).filter((item) => mines.has(item))
      .length,
  }));
}

function revealArea(
  board: Cell[],
  startIndex: number,
  dimensions: Dimensions,
): Cell[] {
  const next = board.map((cell) => ({ ...cell }));
  const queue = [startIndex];
  const visited = new Set<number>();

  while (queue.length > 0) {
    const index = queue.shift();
    if (index === undefined || visited.has(index)) continue;
    visited.add(index);

    const cell = next[index];
    if (cell.flagged || cell.mine) continue;
    cell.revealed = true;

    if (cell.adjacent === 0) {
      queue.push(...neighbours(index, dimensions));
    }
  }

  return next;
}

export function Minesweeper(): React.ReactElement {
  const frameRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>(DEFAULT_DIMENSIONS);
  const [board, setBoard] = useState(() => emptyBoard(DEFAULT_DIMENSIONS));
  const [status, setStatus] = useState<GameStatus>("ready");
  const [seconds, setSeconds] = useState(0);

  const reset = useCallback(
    (nextDimensions = dimensions) => {
      setBoard(emptyBoard(nextDimensions));
      setStatus("ready");
      setSeconds(0);
    },
    [dimensions],
  );

  useEffect(() => {
    if (!frameRef.current || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const next = dimensionsForWidth(entry.contentRect.width);
      setDimensions((current) => {
        if (current.columns === next.columns && current.rows === next.rows) {
          return current;
        }
        return next;
      });
    });

    observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    reset(dimensions);
  }, [dimensions, reset]);

  useEffect(() => {
    if (status !== "playing") return;
    const timer = window.setInterval(
      () => setSeconds((value) => value + 1),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [status]);

  function reveal(index: number): void {
    if (status === "lost" || status === "won" || board[index].flagged) return;

    let next = status === "ready" ? layMines(board, index, dimensions) : board;
    if (next[index].mine) {
      next = next.map((cell) =>
        cell.mine ? { ...cell, revealed: true } : { ...cell },
      );
      setBoard(next);
      setStatus("lost");
      return;
    }

    next = revealArea(next, index, dimensions);
    setBoard(next);
    setStatus(
      next.every((cell) => cell.mine || cell.revealed) ? "won" : "playing",
    );
  }

  function toggleFlag(index: number): void {
    if (status === "lost" || status === "won" || board[index].revealed) return;
    setBoard((current) =>
      current.map((cell, cellIndex) =>
        cellIndex === index ? { ...cell, flagged: !cell.flagged } : cell,
      ),
    );
  }

  const mineCount = Math.max(10, Math.floor(board.length * 0.16));
  const flags = board.filter((cell) => cell.flagged).length;
  const statusCopy = {
    ready: "The problem: a field of mines. The solution: play.",
    playing: "Keep playing until the problem is solved",
    won: "Field cleared — lovely",
    lost: "Well, that escalated",
  }[status];

  return (
    <div className={styles.game} data-status={status} ref={frameRef}>
      <div className={styles.toolbar}>
        <div className={styles.readout}>
          <span>Mines</span>
          <strong>
            {String(Math.max(0, mineCount - flags)).padStart(2, "0")}
          </strong>
        </div>
        <p aria-live="polite">
          <i data-status={status} /> {statusCopy}
        </p>
        <button type="button" onClick={() => reset()}>
          Restart <span aria-hidden="true">↻</span>
        </button>
        <div className={styles.readout}>
          <span>Time</span>
          <strong>{String(Math.min(seconds, 999)).padStart(3, "0")}</strong>
        </div>
      </div>

      <fieldset
        className={styles.board}
        style={{ gridTemplateColumns: `repeat(${dimensions.columns}, 1fr)` }}
        aria-label={`${dimensions.columns} by ${dimensions.rows} Minesweeper board`}
      >
        {board.map((cell, index) => {
          const row = Math.floor(index / dimensions.columns) + 1;
          const column = (index % dimensions.columns) + 1;
          const isCelebratingMine = status === "won" && cell.mine;
          const label = isCelebratingMine
            ? `Smiley face, row ${row}, column ${column}`
            : cell.flagged
              ? `Flagged cell, row ${row}, column ${column}`
              : cell.revealed
                ? cell.mine
                  ? `Mine, row ${row}, column ${column}`
                  : `${cell.adjacent || "Empty"}, row ${row}, column ${column}`
                : `Covered cell, row ${row}, column ${column}`;

          return (
            <button
              type="button"
              aria-label={label}
              className={styles.cell}
              data-count={cell.adjacent || undefined}
              data-revealed={cell.revealed || undefined}
              data-mine={cell.revealed && cell.mine ? true : undefined}
              data-flagged={cell.flagged || undefined}
              key={`${dimensions.columns}-${dimensions.rows}-${cell.id}`}
              onClick={() => reveal(index)}
              onKeyDown={(event) => {
                if (event.key.toLowerCase() === "f") {
                  event.preventDefault();
                  toggleFlag(index);
                }
              }}
              onContextMenu={(event) => {
                event.preventDefault();
                toggleFlag(index);
              }}
            >
              {cell.revealed && !cell.mine && cell.adjacent > 0
                ? cell.adjacent
                : null}
              {cell.revealed && cell.mine ? (
                <i className={styles.mine} />
              ) : null}
              {isCelebratingMine ? (
                <i
                  aria-hidden="true"
                  className={styles.smile}
                  style={
                    {
                      "--smile-delay": `${((column - 1) / Math.max(1, dimensions.columns - 1)) * 700}ms`,
                    } as CssVariables
                  }
                >
                  ☺
                </i>
              ) : cell.flagged && !cell.revealed ? (
                <i className={styles.flag} />
              ) : null}
            </button>
          );
        })}
      </fieldset>
      <p className={styles.hint}>
        Click to clear · Right-click or press F to mark a mine
      </p>
    </div>
  );
}
