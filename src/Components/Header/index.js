import { useLocation } from "react-router-dom";
import Toolbar from '../Toolbar';
import Button from '../Button';
import {ReactComponent as PlayIcon} from '../../icons/play.svg';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';
import './styles.scss';

function Header({title, wrapper, handleRunBuild}) {
  const HeaderWrapper = wrapper;
  
  const { pathname: page } = useLocation();

  const isBuild = page === '/';
  const isSettings = page === '/settings';

  return ( 
    <header className="header">
      <HeaderWrapper>
        <div className="header__inner">
          {title ? 
            <div className="header__title">{title}</div>
          :
            <div className="header__title header__title_default">School CI server</div>
          }
          <div className="header__actions">
            <Toolbar className="test">
              {title && isBuild && <Button size="small" icon={PlayIcon} onClick={handleRunBuild}>Run build</Button>}
              {!isSettings && <Button href="/settings" size="small" icon={SettingsIcon}>Settings</Button>}
            </Toolbar>
          </div>
        </div>
      </HeaderWrapper>
    </header>
   );
}

export default Header;