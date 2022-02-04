import React, {useState, useEffect} from 'react';

//Components
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NavBar from './components/NavBar.jsx';

import ActivityDetail from './components/ActivityDetail.jsx';
import ActivityFeed from './components/ActivityFeed';
import Archive from './components/Archive';

export default function App () {
  const [selectedFeedIteam, setSelectedFeedIteam] = useState({})

  return (
    <div className='container'>
      <Header/>
      <NavBar/>
      <Archive/>
      <ActivityFeed setFeedchange={setSelectedFeedIteam}/>
      <ActivityDetail id={selectedFeedIteam}/>
      <Footer/>
    </div>
  );
};

// ReactDOM.render(<App/>, document.getElementById('app'));

// export default App;
