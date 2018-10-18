import * as React from 'react';
import '../styles/PaletteSquare.css';

export const PaletteSquare = ({color}: any): JSX.Element => (
    <div className="square-wrapper">
      <div className="color-square" style={{ backgroundColor: `${color}`}} />
      <div className="hex">{color}</div>
    </div>
)
