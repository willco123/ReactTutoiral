import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props){ 
    
      return (
        <>
        <button 
            className="square" 
            //onClick = {()=>{console.log(props.value)}} //Why does this work?
            onClick = {props.handleClick}//But calling the same function through handleClick defined in parent returns undefined
        >
          {props.value}
        </button>
        </>
      );
  }

  
function Board(props){

  const [squareState, setSquareState] = useState(new Array(9).fill(null))
  const [testState, setTestState] = useState(0)

  function handleClick(value) {
    console.log(value)
    return null

  }

  function passProp(props){
    console.log(props)
  }

    const renderSquare = (i) =>{
      return(
        <Square 
          value = {i}
          handleClick = {() => handleClick(i)}
        />
      )
    }



    return (
        <div>
          <div className="board-row">
            <Square 
              value = {0}
              handleClick = {() => passProp(props.value)}

            />
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
}
  
function Game(props) {

      return (
        <React.StrictMode>
        <div className="game">
          <div className="game-board">
            <Board/>
          </div>
          <div className="game-info">
          </div>
        </div>
        </React.StrictMode>
      );
    }
  


  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);


  