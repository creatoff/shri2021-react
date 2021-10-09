import React from 'react';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Toolbar({ direction, children, style }) {
  const cls = [
    'toolbar',
    direction && `toolbar_direction_${direction}`,
  ];

  const className = cls.filter(Boolean).join(' ');

  return (
    <div className={className} style={style}>{children}</div>
  );
}

export default Toolbar;
