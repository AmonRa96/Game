import './StartOptions.css';
import { useState } from 'react';

export const StartOptions = ({setStartOptions,setStartModal}) =>{
  const [firstPlayerName, setFirstPlayerName] = useState('Player 1');
  const [secondPlayerName, setSecondPlayerName] = useState('Player 2');
  const [winPoint,setWinPoint] = useState(50);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setStartOptions({
      firstPlayer: firstPlayerName,
      secondPlayer: secondPlayerName,
      maxPoints: winPoint
    });
    setStartModal(false);
    console.log('ddddd');
  };

  return (
    <div className="startOptions">
      <div className="optionInputs">
        <div>
          <span>1st player name: </span>
          <input className="input" value={firstPlayerName} onChange={(e)=>setFirstPlayerName(e.target.value)} placeholder="1st player name" disabled={false}/>
        </div>
        <div>
          <span>2nd player name: </span>
          <input className="input" value={secondPlayerName} onChange={(e)=>setSecondPlayerName(e.target.value)} placeholder="2nd player name"/>
        </div>
        <div>
          <span>Max points: </span>
          <input className="input" value={winPoint} onChange={(e)=>setWinPoint(e.target.value)} placeholder="Max points to win"/>
        </div>              
      </div>
      <button className="button-3" role="button" onClick={handleSubmit}>Start</button>
    </div>
  );
};