import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setAmount } from './counterSlice'


export default function ReduxApp() {
  const count = useSelector((state) => state.counter.value )
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={ () => dispatch(increment()) }>
          Increment
        </button>
        <span>{count}</span>
        <button onClick={ () => dispatch(decrement()) }>
          Decrement
        </button>
      </div>
      <div>
        <label htmlFor='increment_by_amount'>setAmount</label>
        <input type='number' name='increment_by_amount' 
          value={count}
          onChange={(evt) => {
            const newVal = evt.currentTarget.value;
            dispatch(setAmount(newVal))
          }}
        />
      </div>
    </div>
  )
}