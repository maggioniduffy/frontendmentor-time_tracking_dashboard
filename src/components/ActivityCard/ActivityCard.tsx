import './activitycard.css';
import { Activity, Timeframe } from '../../App';
import { titleToCssMap } from '../../utils';

type Props = {
  activity: Activity;
  timeframe: Timeframe;
}

const mainframeMap = new Map();
mainframeMap.set('daily', 'Day');
mainframeMap.set('weekly', 'Week');
mainframeMap.set('monthly', 'Month');

const ActivityCard = ({ activity, timeframe } : Props) => {
  const { title, timeframes } = activity;
  const time = timeframes[timeframe];
  const timeUnit = mainframeMap.get(timeframe);
  const css_class = titleToCssMap.get(title);

  return (
    <div className={`outer-card ${css_class}`}>
        <div className='inner-card'>
            <div className='main-info'>
                <h5 className='heavy-font'> {title} </h5>
                <h3 className='light-font'> {time.current}hs </h3>
            </div>
            <div className='secondary-info'>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                <h5 className='previous-hours'> {`Last ${timeUnit} - ${time.previous}hs`}</h5>
            </div>
            <div className='details'></div>
        </div>
    </div>
  )
}

export default ActivityCard