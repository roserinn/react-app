import React from 'react';

function Home() {
  let likes = 0;

  return (
    <div className="App flex flex-col items-start justify-start">
      <h1>{likes}</h1>
    <button className='bg-teal-500' onClick={()=> likes += 1}>increment</button>
    <button className='bg-teal-600' onClick={()=> likes -= 1}>decrement</button>
    </div>
  );
 }

export default Home;
