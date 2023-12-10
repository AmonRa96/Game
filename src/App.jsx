/* eslint-disable no-undef */
import './App.css';
import { Player } from './components/player/Player';
import { useEffect, useState } from 'react';
import { getRandomInt } from './components/utils';
import { Modal } from './components/Modal/Modal';
import { StartOptions } from './components/startOptions/StartOptions';

export const App = () => {
  const [startOptions, setStartOptions] = useState({
    firstPlayer: 'Person1',
    secondPlayer: 'Person2',
    maxPoints: 50,
  });
  const [firstPlayerTurn, setFirstPlayerTurn] = useState(true);
  const [secondPlayerTurn, setSecondPlayerTurn] = useState(false);
  const [diceValue, setDiceValue] = useState(0);
  const [firstPlayerTotalPoints, setFirstPlayerTotalPoints] = useState(0);
  const [secondPlayerTotalPoints, setSecondPlayerTotalPoints] = useState(0);
  const [firstPlayerCurrentPoints, setFirstPlayerCurrentPoints] = useState(0);
  const [secondPlayerCurrentPoints, setSecondPlayerCurrentPoints] =
        useState(0);
  const [someNum, setSomeNum] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [startModal, setStartModal] = useState(true);

  const handleRoll = () => {
    setTimeout(() => {
      setDiceValue(getRandomInt(1, 6));
      setSomeNum(someNum + 1);
    }, 300);
  };

  const handleHold = () => {
    setFirstPlayerTurn(!firstPlayerTurn);
    setSecondPlayerTurn(!secondPlayerTurn);
  };

  const handleZero = () => {
    setFirstPlayerTotalPoints(0);
    setSecondPlayerTotalPoints(0);
    setFirstPlayerCurrentPoints(0);
    setSecondPlayerCurrentPoints(0);
    setDiceValue(0);
    setStartModal(true);
  };

  useEffect(() => {
    if (firstPlayerTurn) {
      setFirstPlayerCurrentPoints(diceValue);
      setFirstPlayerTotalPoints(firstPlayerTotalPoints + diceValue);
      if (diceValue === 1) {
        setFirstPlayerTurn(false);
        setSecondPlayerTurn(true);
        setFirstPlayerCurrentPoints(0);
        setFirstPlayerTotalPoints(firstPlayerTotalPoints + 0);
      }
    } else if (secondPlayerTurn) {
      setSecondPlayerCurrentPoints(diceValue);
      setSecondPlayerTotalPoints(secondPlayerTotalPoints + diceValue);
      if (diceValue === 1) {
        setFirstPlayerTurn(true);
        setSecondPlayerTurn(false);
        setSecondPlayerCurrentPoints(0);
        setSecondPlayerTotalPoints(secondPlayerTotalPoints + 0);
      }
    }
  }, [someNum, diceValue]);

  useEffect(() => {
    console.log(startOptions.winPoint, 'fff');

    if (
      firstPlayerTotalPoints >= startOptions.maxPoints ||
            secondPlayerTotalPoints >= startOptions.maxPoints
    ) {
      console.log(firstPlayerTotalPoints, 'fff');
      setShowModal(true);
    }
  }, [firstPlayerTotalPoints, secondPlayerTotalPoints]);
  console.log(showModal, 'showMod');
  return (
    <div
      className="app"
      style={{
        backgroundColor: 'rgb(180, 180, 180)',
      }}
    >
      {startModal ? (
        <Modal closeButton={false}>
          <StartOptions
            setStartOptions={setStartOptions}
            setStartModal={setStartModal}
          />
        </Modal>
      ) : null}
      {showModal ? (
        <Modal setShowModal={setShowModal} handleZero={handleZero}>
          <h1>
            {firstPlayerTotalPoints >= startOptions.maxPoints
              ? startOptions.firstPlayer
              : startOptions.secondPlayer}{' '}
                        win !!!
          </h1>
        </Modal>
      ) : null}
      <div className="players">
        <Player
          playerName={startOptions.firstPlayer}
          myTurn={firstPlayerTurn}
          totalPoints={firstPlayerTotalPoints}
          currentPoints={firstPlayerCurrentPoints}
        />
        <Player
          playerName={startOptions.secondPlayer}
          myTurn={secondPlayerTurn}
          totalPoints={secondPlayerTotalPoints}
          currentPoints={secondPlayerCurrentPoints}
        />
      </div>
      <div className="buttons">
        <button onClick={handleZero}>NEW GAME</button>
        <div
          style={{
            visibility: diceValue ? 'visible' : 'hidden',
            width: '100px',
            height: '100px',
          }}
        >
          {diceValue ? (
            <img
              src={require(
                `./components/assets/${diceValue}.png`,
              )}
              alt="dice"
              width="100px"
            />
          ) : null}
        </div>
        <button onClick={handleRoll}>ROLL DICE</button>
        <button onClick={handleHold}>HOLD</button>
      </div>
    </div>
  );
};
