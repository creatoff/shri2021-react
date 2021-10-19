import React from 'react';
import { useLocation } from 'react-router-dom';
import Toolbar from '../Toolbar';
import Button from '../Button';
import { ReactComponent as PlayIcon } from '../../icons/play.svg';
import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Header({ title, wrapper, handleRunBuild }) {
  const HeaderWrapper = wrapper;

  const { pathname: page } = useLocation();

  const isBuild = page === '/' && title;
  const isSettings = page === '/settings';

  return (
    <header className="header">
      <HeaderWrapper>
        <div className="header__inner">
          {isBuild ? (
            <div className="header__title">{title}</div>
          ) : (
            <div className="header__logo">School CI server</div>
          )}
          <div className="header__actions">
            <Toolbar className="test">
              {isBuild && (
                <Button size="small" icon={PlayIcon} onClick={handleRunBuild} collapsible>
                  Run build
                </Button>
              )}
              {!isSettings && (
                <Button
                  href="/settings"
                  size="small"
                  icon={SettingsIcon}
                  collapsible
                  collapsed={isBuild}
                >
                  Settings
                </Button>
              )}
            </Toolbar>
          </div>
        </div>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
