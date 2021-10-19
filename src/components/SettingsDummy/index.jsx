import React from 'react';
import Button from '../Button';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import './styles.scss';

function SettingsDummy() {
  return (
    <div className="settings-dummy">
      <div className="settings-dummy__icon">
        <Logo />
      </div>
      <div className="settings-dummy__text">Configure repository connection and&nbsp;synchronization settings</div>
      <Button href="/settings" theme="action">Open settings</Button>
    </div>
  );
}

export default SettingsDummy;
