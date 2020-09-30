import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

function IconLink({ icon, iconColor, children, to, ...props }) {
  if(to) {
    return (
      <NavLink to={to} {...props}>
        <FontAwesomeIcon icon={icon} style={ iconColor && { color: iconColor }}/>
        <span>{children}</span>
      </NavLink>
    );
  } else {
    return (
      <a target="_blank" {...props}>
        <FontAwesomeIcon icon={icon} style={ iconColor && { color: iconColor }}/>
        <span>{children}</span>
      </a>
    );
  }
}

export default styled(IconLink)`
  white-space: nowrap;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  font-weight: 600;

  :hover {
    text-decoration: none;

    span {
      text-decoration: underline;
    }
  }

  svg {
    height: .75em;
    margin-right: .125em;
  }

  span {
    color: var(--primary);
    transition: color 0.5s;
  }
`;
