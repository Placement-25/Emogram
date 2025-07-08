import React from 'react';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Stories from '../components/Stories';

function Home() {
  return (
    <div className="home">
      <Stories />
      <Feed />
      <Sidebar />
    </div>
  );
}

export default Home;