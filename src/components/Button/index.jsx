/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Button({
  href,
  children,
  theme = 'control',
  size,
  icon = null,
  type = 'button',
  collapsible,
  collapsed,
  disabled,
  ...rest
}) {
  const cls = [
    'button',
    theme ? `button_theme_${theme}` : '',
    size ? `button_size_${size}` : '',
    collapsible ? 'button_collapsible' : '',
    collapsed ? 'button_collapsed' : '',
  ];

  const className = cls.join(' ');

  const Icon = icon;

  const content = (
    <>
      {children && <div className="button__label">{ children }</div>}
      {icon && (
        <div className="button__icon">
          <Icon />
        </div>
      )}
    </>
  );

  if (href && !disabled) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Link className={className} to={href} {...rest}>{content}</Link>;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button className={className} type={type} disabled={disabled} {...rest}>{content}</button>;
}

export default Button;
