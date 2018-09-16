import * as React from 'react';
import '../styles/Info.css';
// import github from '../images/github.svg';

export const Info = () => (
  <div className="center">
    <h2 className="links">By: <a href="https://github.com/JoshuaScript">JoshuaScript</a> | <a className="source" href="https://www.github.com/JoshuaScript/PicTheme">Source Code Here</a></h2>
    <h2 className="links">Bugs? Feature Requests? Please file an issue on <a href="https://github.com/JoshuaScript/PicTheme/issues">GitHub</a></h2>
    <ul>
      Attribuions:
      <br />
      <li><a href="https://github.com/microlinkhq/splashy">splashy (Palette 1)</a></li>
      <li><a href="https://github.com/colorjs/get-image-colors">get-image-colors (Palette 2)</a></li>
      <li><a href="https://github.com/scniro/react-codemirror2">react-codemirror-2</a></li>
      <li><a href="https://github.com/react-component/color-picker">rc-color-picker</a></li>
      <li><a href="https://github.com/react-component/tooltip">rc-tooltip</a></li>
      <li><a href="https://sweetalert2.github.io/">Sweet Alert 2</a></li>
      <li>Icons: <a href="https://www.flaticon.com/free-icon/dices_287249#term=dice&page=1&position=27">dice</a> | <a href="https://es.kisspng.com/png-visual-studio-code-microsoft-visual-studio-source-571914/">VS Code</a> | <a href="https://dribbble.com/shots/3811091-Sublime-Text-3-Icon">Sublime</a><a href="http://www.iconarchive.com/show/outline-icons-by-iconsmind/Code-Window-icon.html">favicon</a></li>
    </ul>
  </div>
)