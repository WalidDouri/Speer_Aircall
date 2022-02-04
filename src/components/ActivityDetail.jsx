import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function ActivityDetail(props) {
  const [retrieve, setRetrieve] = useState({});
  
  
  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities/${props.id}`)
      .then(res => {
        const logData = res.data;
        setRetrieve(logData);
        console.log(props.id)
      })
      .catch (err => {
        console.log(err)
      })
    }, [props.id]);

    if (!retrieve) {
      return null;
    }

    return (
      <div>
        <h1 id="caller-des" class="caller-desc">Caller Details</h1>
        <div id="calling-details" class="details">
          <h1>{retrieve.from}</h1>
          <p>{retrieve.via}</p>
          <h1>{retrieve.call_type}</h1>
          <p>{retrieve.duration}</p>
          
        </div>
      </div>
    );

};
