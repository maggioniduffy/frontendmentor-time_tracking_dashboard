import { Dispatch, SetStateAction } from "react";
import { Timeframe } from "../../App";
import './profilecard.css';

type Props = {
    timeframe: string;
    chooseTimeFrame: Dispatch<SetStateAction<Timeframe>>;
}

const ProfileCard = ({ chooseTimeFrame, timeframe } : Props) => {
  return (
    <div className="outer-profile-card">
        <div className="inner-profile-card">
            
        </div>
        <div className='options'>
            <button onClick={() => chooseTimeFrame('daily')}>
                Daily
            </button>
            <button onClick={() => chooseTimeFrame('weekly')}>
                Weekly
            </button>
            <button onClick={() => chooseTimeFrame('monthly')}>
                Monthly
            </button>
        </div>
    </div>
  )
}

export default ProfileCard