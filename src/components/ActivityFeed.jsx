import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import './ActivityFeed.scss'

import incoming from '../images/incoming.png';
import outgoing from '../images/outgoing1.png';

export default function ActivityFeed(props) {
  const [feed, setFeed] = useState(null);
  const url = 'https://aircall-job.herokuapp.com/activities';

    useEffect(() => {
      axios.get(url)
      .then((res) => {
        // console.log(res.data)
        // loop through the data to not show numbers/calls that have been archived
        const logs = res.data
        setFeed(logs)
      })
      .catch(err => {
        console.log('There was an error!', err);
      });
    }, []);
    
      if (!feed) {
        return null;
      }

      return (
        feed.map((forNow) => {
          return (
            <div id="calling-cards" class="cards" 
            onClick={() => props.setFeedchange(forNow.id)}>
                {forNow.direction === 'inbound' ? <img src={incoming} alt="logo"/> : <img src={outgoing} alt="logo"/>}
                <div>
                    <h1> {forNow.from}</h1>
                <h3>{forNow.direction}</h3>
              </div>
              {/* <p>{forNow.call_type}</p> */}
                    <h2 id="calling-date" class="dates">{new Intl.DateTimeFormat('en-GB', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                    }).format(new Date(forNow.created_at))}</h2>
            </div>
          )
        })
      )
};


 

