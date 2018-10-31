import * as React from 'react';
import { PaletteSwitch } from './PaletteSwitch';
import { EditorList } from './EditorList';
import { editorText } from '../utils/editorText';
import { changeBGColor, randomize, reset, setThemeName, toggleCheck } from '../actions/index.action';
import dice from '../images/dice.svg';
import leftArrow from '../images/left-arrow.svg';
import spinning from '../images/spinning.gif';
import 'codemirror/lib/codemirror';
import '../styles/codemirror.css';
import '../styles/mononoki.css';
import 'codemirror/mode/jsx/jsx.js';
import 'rc-color-picker/assets/index.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import '../styles/ThemeCustomizer.css';
import { PaletteSquare } from './PaletteSquare';
const ColorPicker = require('rc-color-picker');
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';


export const ThemeCustomizer = ({ palette, link, imgName, index, themeName, bgColor, editorStyle, isChecked, imgurLink }: any) => {

  const hasImageUploaded = !!imgurLink
  const PaletteArr: JSX.Element[] = []

  for (let i = 0; i < palette.length; i++) {
    PaletteArr.push(<PaletteSquare key={i} color={palette[i]} />)
  }


  return (
    <div className="grid-wrapper">
      <img onClick={reset} className="arrow grow" src={leftArrow} />
      <div className="input-area">
        <h3 className="input-title">Input: {imgName} </h3>
        <img className="input-image" src={link} />
        <span className="palette">
          {PaletteArr}
          <PaletteSwitch index={index} />
        </span>
      </div>

      <div className="output-area">
        <h4 className="output-text">
          Background: <ColorPicker className="bg-square" animation="slide-up" color={bgColor} onChange={changeBGColor} />
        </h4>
        <Tooltip placement="top" overlay={"Randomize Text Color Mapping"} arrowContent={<div className="rc-tooltip-arrow-inner" />}>
          <img className="dice grow" src={dice} onClick={() => randomize(palette)} />
        </Tooltip>
        <input type="text" onChange={setThemeName} className="theme-name" placeholder="Theme Name" />
        <span className={hasImageUploaded ? null : "text-waiting"}>
          <img className={hasImageUploaded ? "done" : "spinner"} src={spinning} />Include image in README?<input type="checkbox" defaultChecked={isChecked} onClick={toggleCheck} />
        </span>
        <CodeMirror
          value={editorText}
          options={{
            mode: { name: "jsx", base: { name: "javascript", typescript: true } },
            lineNumbers: true,
            theme: 'custom',
            readOnly: 'nocursor',
          }} />
        <EditorList themeName={themeName} bgColor={bgColor} imgurLink={imgurLink} isChecked={isChecked} />
        <style>{`.cm-s-custom.CodeMirror { background: ${bgColor};`}</style>
        <style>{`${editorStyle}`}</style>
      </div>
    </div>
  )
}

