import IconText from '../IconText';
import {ReactComponent as DoneIcon} from '../../icons/done.svg';
import {ReactComponent as ClockIcon} from '../../icons/clock.svg';
import {ReactComponent as FailureIcon} from '../../icons/fail.svg';
import './styles.scss';

function BuildCard({id, status, message, branch, hash, user, timestamp}) {

  const StatusIcon = ({status}) => {
    switch (status) {
      case 'success':
        return <DoneIcon/>
      case 'pending':
        return <ClockIcon/>
      case 'failure':
        return <FailureIcon/>
      default:
        return;
    }
  }

  return (
    <div key={id} className={`build-card build-card_status_${status}`}>
      <div className="build-card__status">
        <StatusIcon status={status}></StatusIcon>
      </div>
      <div className="build-card__main">
        <div className="build-card__head">
          <div className="build-card__id">#{id}</div>
          <div className="build-card__message">{message}</div>
        </div>
        <div className="build-card__body">
          <IconText icon="code-commit">{branch}&nbsp;<span style={{opacity: 0.65}}>{hash}</span></IconText>
          <IconText icon="user">{user}</IconText>
        </div>
      </div>
      <div className="build-card__foot">
        <IconText icon="calendar">21 янв, 03:06</IconText>
        <IconText icon="stopwatch">1 ч 20 мин</IconText>
      </div>
    </div>
   );
}

export default BuildCard;