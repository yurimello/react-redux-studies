import React, { useState } from "react";
import "./styles.css";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const changeSquare = (index) => {
    const newSquares = squares.slice();
    newSquares[index] = 'X';
    setSquares(newSquares);
  }

  return (
    <>
      <div className="board-row">
          {
            squares.slice(0,3).map((value, index) => {
              return <Square key={index} value={value} index={index} changeSquare={changeSquare} />
            }) 
          }
      </div>
      <div className="board-row">
        {
          squares.slice(3,6).map((value, index) => {
            const squareIndex = index + 3;
            return <Square key={squareIndex} value={value} index={squareIndex} changeSquare={changeSquare} />
          }) 
        }
      </div>
      <div className="board-row">
        {
          squares.slice(6,9).map((value, index) => {
            const squareIndex = index + 6;
            return <Square key={squareIndex} value={value} index={squareIndex} changeSquare={changeSquare} />
          }) 
        }
      </div>
    </>
  );
}


const Square = ({ value, index, changeSquare }) => {
  const handleClick = () => {
    changeSquare(index)
  }
  return (
    
    <button className="square" onClick={handleClick}>{value}</button>
  )
}
