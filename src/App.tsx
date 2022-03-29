import { useState } from 'react';

import getActivities from './api/activities';
import './App.css';
import { ActivityCard, ProfileCard } from './components';

export type Timeframe = 'daily' | 'weekly' | 'monthly';
export type Activity = {
  title: string,
  timeframes: {
        daily: {
          current: number,
          previous: number
        },
        weekly: {
          current: number,
          previous: number,
        },
        monthly: {
          current: number,
          previous: number,
        }
  }
}

const activities: Activity[] = getActivities();

function App() {
  const [timeFrame, setTimeFrame] = useState<Timeframe>('daily')
  return (
    <div className="App">
      <div className='container'>
        <ProfileCard timeframe={timeFrame} chooseTimeFrame={setTimeFrame} />
        {activities.map((act) => {
          return (
            <ActivityCard activity={act} timeframe={timeFrame}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
