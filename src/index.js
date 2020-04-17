import React, { useEffect, useState } from 'react';
import produce from 'immer';

const Grid = (props) => {
  const { rows, cols, color, bgColor, tileSize } = props

  const [grid, setGrid] = useState();

  useEffect(() => {
    const grid = Array.from({ length: rows || 10 }).map(() => Array.from({ length: cols || 10 }).fill(0));
    setGrid(grid)
  }, [rows, cols])

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, ${tileSize || 20})`
    }}>
      {grid.map((row, i) => {
        row.map((col, k) => {
          return (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: tileSize || 20,
                height: tileSize || 20,
                backgroundColor: grid[i][k] ? color || 'black' : bgColor,
                border: `solid 1px ${color || 'black'}`
              }}
            />
          )
        })
      })}

    </div>
  )
}

export default Grid

