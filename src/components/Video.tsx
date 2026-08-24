import styles from "./Video.module.css";

type VideoProps = {
  id: string;
  no: string;
  title: string;
};

export function Video({ id, title, no }: VideoProps): React.ReactElement {
  return (
    <article className={styles.video}>
      <div>
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p>
        {title}
        <span>{no}</span>
      </p>
    </article>
  );
}
