import React from "react";
import { useDispatch } from 'react-redux'
import { setPlay } from './boardSlice'


export default function Square({ value, x_index, y_index}) {
  const dispatch = useDispatch()
  return (
    
    <button className="square" onClick={() => { dispatch(setPlay({x: x_index, y: y_index})) }}>{value}</button>
  )
}