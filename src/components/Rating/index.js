import React, { useState } from 'react'
import './rating.css'

export const Rating = () => {
  const [colorIndex, setColorIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState(0)
  return (
    <>
      {[...Array(5)].map((item, index) => {
        return (
          <span className={index < colorIndex ? 'color' : ''} key={index}>
            <i
              className={`fas fa-star ${
                index < colorIndex
                  ? 'color'
                  : index < hoverIndex
                  ? 'hover-color'
                  : ''
              }`}
              onClick={() => setColorIndex(index + 1)}
              onMouseEnter={() => setHoverIndex(index + 1)}
              onMouseLeave={() => setHoverIndex(0)}
            />
          </span>
        )
      })}
    </>
  )
}
