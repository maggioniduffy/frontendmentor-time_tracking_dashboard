import './activitycard.css';

const ActivityCard = () => {
  return (
    <div className='outer-card'>
        <div className='inner-card'>
            <div className='main-info'>
                <h3 className='heavy-font'> Name </h3>
                <h4 className='light-font'> Hours </h4>
            </div>
            <div className='details'></div>
        </div>
    </div>
  )
}

export default ActivityCard