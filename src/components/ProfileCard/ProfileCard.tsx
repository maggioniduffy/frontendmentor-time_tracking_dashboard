import { Dispatch, SetStateAction } from "react";
import { Timeframe } from "../../App";
import './profilecard.css';
import jeremy from '../../assets/images/image-jeremy.png';

type Props = {
    timeframe: string;
    chooseTimeFrame: Dispatch<SetStateAction<Timeframe>>;
}

const ProfileCard = ({ chooseTimeFrame, timeframe } : Props) => {
  return (
    <div className="outer-profile-card">
        <div className="inner-profile-card">
            <div className="profile-pic-container">
                <img src={jeremy} alt='Jeremy' className='profile-pic'/>
            </div>
            <div className="names">
                <h5 className="light-font"> Report for </h5>
                <h3 className="jeremy light-font"> Jeremy Robson </h3>
            </div>
        </div>
        <div className='options'>
            <button className={timeframe === 'daily' ? 'focused' : ''} onClick={() => chooseTimeFrame('daily')}>
                Daily
            </button>
            <button className={timeframe === 'weekly' ? 'focused' : ''} onClick={() => chooseTimeFrame('weekly')}>
                Weekly
            </button>
            <button className={timeframe === 'monthly' ? 'focused' : ''} onClick={() => chooseTimeFrame('monthly')}>
                Monthly
            </button>
        </div>
    </div>
  )
}

export default ProfileCard