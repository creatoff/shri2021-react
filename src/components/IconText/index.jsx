import React from 'react';
import { ReactComponent as CodeCommitIcon } from '../../icons/code-commit.svg';
import { ReactComponent as UserIcon } from '../../icons/user.svg';
import { ReactComponent as CalendarIcon } from '../../icons/calendar.svg';
import { ReactComponent as StopwatchIcon } from '../../icons/stopwatch.svg';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function IconText({ icon, children }) {
  // eslint-disable-next-line react/prop-types
  const Icon = ({ iconName }) => {
    switch (iconName) {
      case 'code-commit':
        return <CodeCommitIcon />;
      case 'user':
        return <UserIcon />;
      case 'calendar':
        return <CalendarIcon />;
      case 'stopwatch':
        return <StopwatchIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="icon-text">
      {icon && <div className="icon-text__icon"><Icon iconName={icon} /></div>}
      <span>{children}</span>
    </div>
  );
}

export default IconText;
