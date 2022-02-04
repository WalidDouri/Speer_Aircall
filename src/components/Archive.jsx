import React, {useEffect, useState} from "react";
import axios from "axios";


export default function Archive(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities/${props.id}`)
      .then((res) => {
      setPost(res.data);
    });
  }, [props.id]);

  function createArchive() {
    axios.post(`https://aircall-job.herokuapp.com/activities/${props.id}`, 
      {
        is_archived: true
      })
      .then((res) => {
        setPost(res.data);
      });
  }

  // Loop through the data for a "Archive all button [foreach]"

  if (!post) return "Can not Archive Number"

  return (
    <div id="caller-archive" className="archive">
        <button id="caller-archive-button" className="archive-button" onClick={createArchive}>Create Archive</button>
    </div>
  );
}