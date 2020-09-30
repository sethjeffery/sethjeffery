import React from 'react';
import styled from 'styled-components/macro';
import IconLink from './IconLink';
import { useRouteMatch } from 'react-router-dom';
import { mobileBreakpoint } from './breakpoints';
import { pageColors } from './colors';

const Inverted = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0;
  overflow: hidden;
  pointer-events: none;
  transition: width 0.15s;
  background-color: white;
  color: var(--primary);
`;

function SideLink({ className, children, ...props }) {
  const isActive = useRouteMatch({ path: props.to, exact: true }) ? 'active' : '';

  return (
    <div className={`${className} ${isActive}`}>
      <IconLink {...props}>{children}</IconLink>
      <Inverted>
        <IconLink {...props} iconColor={pageColors[props.to]}>{children}</IconLink>
      </Inverted>
    </div>
  )
}

export default styled(SideLink)`
  font-size: 1.5rem;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  position: relative;

  ${IconLink} {
    padding-top: .5rem;
    padding-bottom: .5rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    font-weight: 400;

    span {
      color: inherit;
      margin: -.1em 0 .1em clamp(1.25rem, 4.5vw, 3rem);
    }

    :hover {
      span {
        text-decoration: none;
      }
    }

    svg {
      width: 2rem;
      width: clamp(2rem, 4vw, 3rem);
      margin: 0 0 0 .5rem;
      margin-left: clamp(.5rem, 1vw, 1.5rem);
    }
  }

  &.active ${Inverted} {
    width: clamp(2rem, 4vw, 3rem);
  }

  :hover {
    ${IconLink} {
      span {
        text-decoration: none;
      }
    }

    ${Inverted} {
      width: 100%;
    }
  }

  @media(max-width: ${mobileBreakpoint}) {
    padding-left: 0;

    ${IconLink} {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 2rem;

      span {
        display: none;
      }

      svg {
        width: 3rem;
      }
    }

    &.active ${Inverted} {
      width: 3rem;
    }

    :hover {
      ${Inverted} {
        width: 3rem;
      }
    }

  }
`;
