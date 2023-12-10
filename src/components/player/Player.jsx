import './Player.css';

export const Player = ({ playerName,totalPoints,currentPoints,myTurn }) =>{

  return (        
    <div className={myTurn? 'myTurnStyle person' : 'otherTurnStyle person'}>
      <div>
        <div className="playerName">{playerName}</div>
        <div className="totalPoints">{totalPoints}</div>
      </div>
      <div>
        <span className="current">CURRENT</span>
        <div className="currentPoints">{currentPoints}</div>
      </div>
    </div>        
  );
};