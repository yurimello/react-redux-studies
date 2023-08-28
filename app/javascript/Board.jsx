import React from "react";
import { useSelector } from 'react-redux'
import Square from './Square'

export default function Board() {
  const squares = useSelector((state) => state.board.squares)
  const winner = useSelector((state) => state.board.winner)
  
  return (
    <>
      { squares.map((line, x_index) => {
        return (
          <div className="board-row" key={x_index}>
            { line.map((square, y_index) => {
              return <Square key={y_index} value={square} x_index={x_index} y_index={y_index} />
            }) }
          </div>  
        )
      }) }
      { winner && (
        <div>
          <h1>Winner</h1>
          <h2>{winner}</h2>
        </div>
      ) }
    </>
  );
}



