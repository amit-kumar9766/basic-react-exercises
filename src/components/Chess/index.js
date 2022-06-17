import React, { useState } from 'react'
import './chess.css'

const Chess = () => {
  const [colored, setColored] = useState([])
  const handleClick = (e, i, j) => {
    e.stopPropagation()
    const arr = []
    const itemp = i
    const jtemp = j
    while (i >= 0 && j >= 0) {
      const k = 8 * i + j
      arr.push(k)
      i--
      j--
    }
    i = itemp
    j = jtemp
    while (i < 8 && j < 8) {
      const k = 8 * i + j
      arr.push(k)
      i++
      j++
    }

    i = itemp
    j = jtemp
    while (i >= 0 && j < 8) {
      const k = 8 * i + j
      arr.push(k)
      i--
      j++
    }

    i = itemp
    j = jtemp
    while (i < 8 && j >= 0) {
      const k = 8 * i + j
      arr.push(k)
      j--
      i++
    }
    setColored(arr)
  }

  return (
    <div className="full-chess">
      <div className="grid-container">
        {[...Array(64)].map((x, index) => {
          return (
            <div
              className={`grid-item ${colored.includes(index) ? 'color' : ''}`}
              key={index}
              onClick={(e) => handleClick(e, Math.floor(index / 8), index % 8)}
            >
              {x}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Chess
