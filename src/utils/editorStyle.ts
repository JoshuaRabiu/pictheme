import { getRandomInt } from './getRandomInt';


export const randomizeColorMapping = (palette: string[]) => {
  return `.cm-s-custom.CodeMirror { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
  .cm-s-custom div.CodeMirror-selected {  ${palette[getRandomInt(0, palette.length - 1)]}; }
  .cm-s-custom .CodeMirror-line::selection, .cm-s-custom .CodeMirror-line > span::selection, .cm-s-custom .CodeMirror-line > span > span::selection { background:  ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom .CodeMirror-line::-moz-selection, .cm-s-custom .CodeMirror-line > span::-moz-selection, .cm-s-custom .CodeMirror-line > span > span::-moz-selection { background:  ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom .CodeMirror-gutters { background: #272822; border-right: 0px; }
.cm-s-custom .CodeMirror-guttermarker { color: white; }
.cm-s-custom .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-custom .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-custom .CodeMirror-cursor { border-left: 1px solid ${palette[getRandomInt(0, palette.length - 1)]}; }

.cm-s-custom span.cm-comment { color: #75715e; }
.cm-s-custom span.cm-atom { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-number { color: ${palette[getRandomInt(0, palette.length - 1)]}; }

.cm-s-custom span.cm-comment.cm-attribute { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-comment.cm-def { color: #${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-comment.cm-tag { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-comment.cm-type { color: ${palette[getRandomInt(0, palette.length - 1)]}; }

.cm-s-custom span.cm-property, .cm-s-custom span.cm-attribute { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-keyword { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-builtin { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-string { color: ${palette[getRandomInt(0, palette.length - 1)]}; }

.cm-s-custom span.cm-variable { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-variable-2 { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-variable-3, .cm-s-custom span.cm-type { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-def { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-bracket { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-tag { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-header { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-link { color: ${palette[getRandomInt(0, palette.length - 1)]}; }
.cm-s-custom span.cm-error { background: ${palette[getRandomInt(0, palette.length - 1)]}; color: ${palette[getRandomInt(0, palette.length - 1)]}; }

.cm-s-custom .CodeMirror-activeline-background { background: #373831; }
.cm-s-custom .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: ${palette[getRandomInt(0, palette.length - 1)]};`
}

export const defaultStyle = (palette: string[]) => {
  return `.cm-s-custom.CodeMirror { color: ${palette[0]}; }
  .cm-s-custom div.CodeMirror-selected { background: #49483E; }
  .cm-s-custom .CodeMirror-line::selection, .cm-s-custom .CodeMirror-line > span::selection, .cm-s-custom .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }
.cm-s-custom .CodeMirror-line::-moz-selection, .cm-s-custom .CodeMirror-line > span::-moz-selection, .cm-s-custom .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }
.cm-s-custom .CodeMirror-gutters { background: #272822; border-right: 0px; }
.cm-s-custom .CodeMirror-guttermarker { color: white; }
.cm-s-custom .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
.cm-s-custom .CodeMirror-linenumber { color: #d0d0d0; }
.cm-s-custom .CodeMirror-cursor { border-left: 1px solid ${palette[1]}; }

.cm-s-custom span.cm-comment { color: #75715e; }
.cm-s-custom span.cm-atom { color: ${palette[2]}; }
.cm-s-custom span.cm-number { color: ${palette[2]}; }

.cm-s-custom span.cm-comment.cm-attribute { color: ${palette[3]}; }
.cm-s-custom span.cm-comment.cm-def { color: #${palette[3]}; }
.cm-s-custom span.cm-comment.cm-tag { color: ${palette[3]}; }
.cm-s-custom span.cm-comment.cm-type { color: ${palette[3]}; }

.cm-s-custom span.cm-property, .cm-s-custom span.cm-attribute { color: ${palette[3]}; }
.cm-s-custom span.cm-keyword { color: ${palette[4]}; }
.cm-s-custom span.cm-builtin { color: ${palette[4]}; }
.cm-s-custom span.cm-string { color: ${palette[4]}; }

.cm-s-custom span.cm-variable { color: ${palette[4]}; }
.cm-s-custom span.cm-variable-2 { color: #9effff; }
.cm-s-custom span.cm-variable-3, .cm-s-custom span.cm-type { color: ${palette[2]}; }
.cm-s-custom span.cm-def { color: ${palette[5]}; }
.cm-s-custom span.cm-bracket { color: ${palette[5]}; }
.cm-s-custom span.cm-tag { color: ${palette[1]}; }
.cm-s-custom span.cm-header { color: ${palette[1]}; }
.cm-s-custom span.cm-link { color: ${palette[5]}; }
.cm-s-custom span.cm-error { background: ${palette[5]}; color: ${palette[1]}; }

.cm-s-custom .CodeMirror-activeline-background { background: #373831; }
.cm-s-custom .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: ${palette[5]};`
}