import * as React from 'react';
import '../styles/EditorList.css';
import { instructions } from '../utils/instructions';
import vscode from '../images/vscode.png';
import sublime from '../images/sublime.png';
import information from '../images/information.svg';
import { downloadTheme } from '../actions/index.action';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import Swal from 'sweetalert2';

export const EditorList = ({ themeName, bgColor, imgurLink, isChecked }) => (
  <div className="editor-list">
    <Tooltip
      placement="bottom"
      overlay={'How do I install PicThemes?'}
      arrowContent={<div className="rc-tooltip-arrow-inner" />}
    >
      <img
        onClick={() => Swal({ title: 'Installation Instructions', html: instructions, showCloseButton: true })}
        src={information}
        className="editor-icon"
      />
    </Tooltip>
    <Tooltip
      placement="bottom"
      overlay={'Download as Sublime Text Theme'}
      arrowContent={<div className="rc-tooltip-arrow-inner" />}
    >
      <img
        onClick={() => downloadTheme(themeName, bgColor, 'Sublime', imgurLink, isChecked)}
        className={'editor-icon'}
        src={sublime}
      />
    </Tooltip>
    <Tooltip
      placement="bottom"
      overlay={'Download as Visual Studio Code Theme'}
      arrowContent={<div className="rc-tooltip-arrow-inner" />}
    >
      <img
        onClick={() => downloadTheme(themeName, bgColor, 'VS Code', imgurLink, isChecked)}
        className="editor-icon"
        src={vscode}
      />
    </Tooltip>
  </div>
);
