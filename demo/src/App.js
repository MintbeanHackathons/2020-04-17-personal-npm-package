import React from 'react';
import Countdown from 'react-t-minus-countdown';

function App() {
  return (
    <div className="App">
     <Countdown text="test text" targetDate={new Date('07-01-2021')} tMinusNDays={500} />
    </div>
  );
}

export default App;
