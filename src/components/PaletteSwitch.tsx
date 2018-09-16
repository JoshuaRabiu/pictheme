import * as React from 'react';
import {switchPalette} from '../actions/index.action';
import '../styles/PaletteSwitch.css';

export const PaletteSwitch = ({ index }) => {
  if (index === 0) {
    return <label onClick={() => switchPalette(1)} className="switch">Use Palette 2</label>
  }
  else {
    return <label onClick={() => switchPalette(0)} className="switch">Use Palette 1</label>
  }
}