import { createSlice } from '@reduxjs/toolkit'
const chunkSize = 3
export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    squares: Array(chunkSize).fill(Array(chunkSize).fill(null)),
    chunkSize: chunkSize,
    winner: null,
    currentPlayer: 0,
    players: ['X', 'O']
  },
  reducers: {
    setPlay: (state, action) => {
      const position = action.payload
      const player = state.players[state.currentPlayer]
      state.squares[position.x][position.y] = player
      if(calculateWinner(state.squares, player)){
        state.winner = player
      }
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0
    }
  }
})

function calculateWinner(squares, player){
  let byLine, byColumn, byAxis;
  const axisPlays = [];
  squares.forEach((line, x_index) => {
    line.forEach((square, y_index) => {
      if(x_index === y_index) {
        axisPlays.push(match(square, player))
        byAxis = !axisPlays.includes(null);
      }
      
      columns = squares.map( (l) =>  {
        return l[y_index] 
      })
      if(columns.every((square) => square === player)) {
        byColumn = true
      }
    })

    if(line.every((square) => square === player)) {
      byLine = true
    }
  })
  
  return byLine || byColumn || byAxis
}

function match(square, player){
  if(square == player){
    return true;
  }
  return null  
}

export const { setPlay } = boardSlice.actions
export default boardSlice.reducer