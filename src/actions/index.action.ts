import { store } from '../reducers/index.reducer';
import { randomizeColorMapping, defaultStyle } from '../utils/editorStyle';
import { makeTheme, pkgJSON, themeJSON, makeReadMe } from '../utils/output';
import { toHex } from '../utils/toHex';
import axios from 'axios';
import fileDownload from 'js-file-download';

export const reset = () => store.dispatch({ type: 'RESET' })

export const toggleCheck = () => store.dispatch({ type: 'TOGGLE_CHECK' })

export const setThemeName = (e) => store.dispatch({ type: 'SET_THEME_NAME', payload: e.target.value })


export const processImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
  store.dispatch<any>((dispatch: any): any => {
    dispatch({ type: 'LOADING_STATUS', payload: true });
    const image = e.target.files[0];

    const imgURL = window.URL.createObjectURL(image);
    dispatch({ type: 'SEND_URL', payload: imgURL });

    const imgName = e.target.files[0].name;
    dispatch({ type: 'SEND_IMAGE_NAME', payload: imgName })

    // Sends color palette and sets editor theme based on that palette
    const formData = new FormData();
    formData.append('image', image);
    const options = { headers: { 'Content-Type': 'multipart/form-data' } }
    axios.post('generate/palette', formData, options)
      .then(response => {
        dispatch({ type: 'GET_COLORS', payload: response.data })
        const palette = store.getState().palette[0]
        dispatch({ type: 'SET_DEFAULT_STYLE', payload: defaultStyle(palette) })
        dispatch({ type: 'LOADING_STATUS', payload: false })
        axios.post('generate/imgurLink', formData, options)
        .then(res => dispatch({ type: 'SEND_IMGUR_LINK', payload: res.data }))
      })
  })
}

export const switchPalette = (indexNo: number): any => store.dispatch({ type: 'SWITCH_PALETTE', payload: indexNo })


export const changeBGColor = (colors: any) => {
  store.dispatch({ type: 'CHANGE_BG_COLOR', payload: colors.color })
}


export const randomize = (palette: any) => {
  store.dispatch({ type: 'RANDOMIZE', payload: randomizeColorMapping(palette) })
}

export const downloadTheme = (themeName, bgColor, editor, imgurLink, isChecked) => {
  const arr: string[] = []
  const getEl = (selector: string) => document.querySelector(selector)
  const getColor = (elemArg: any) => toHex(window.getComputedStyle(elemArg).getPropertyValue('color'))
  const indexZero: any = getEl('.CodeMirror-code > div:nth-child(4) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(1)');  // consists of: import * as, from, interface, const
  const indexZeroColor = getColor(indexZero);
  arr.push(indexZeroColor);
  const indexOne: any = getEl('.CodeMirror-code > div:nth-child(3) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(4)') // React, GreeterProps, Greeter, Props Param, arr & newObj
  const indexOneColor: any = getColor(indexOne);
  arr.push(indexOneColor);
  const indexTwo: any = getEl('.CodeMirror-code > div:nth-child(3) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(6)')  // Strings, including their quotes
  const indexTwoColor: any = getColor(indexTwo);
  arr.push(indexTwoColor)
  const indexThree: any = getEl('span.cm-operator:nth-child(8)') // All punctuation, including =, (), commas, ?, =>, ;, :, {}, also Foreground
  const indexThreeColor: any = getColor(indexThree)
  arr.push(indexThreeColor)
  const indexFour: any = getEl('.CodeMirror-code > div:nth-child(17) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(2)') // name/msgNo inside interface aka interface property, x.[color]METHOD/VALUE[color], <element [color]value[color]="foo" />, {[color]value[color]: "bar"}
  const indexFourColor: any = getColor(indexFour);
  arr.push(indexFourColor);
  const indexFive: any = getEl('.CodeMirror-code > div:nth-child(7) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(3)') // interface value; e.g string, number, all types: React SFC; <[color]GreeterProps[color]>, (param: [color]GreeterProps[color])
  const indexFiveColor: any = getColor(indexFive);
  arr.push(indexFiveColor);
  const indexSix: any = getEl('.CodeMirror-code > div:nth-child(12) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(2)') // Tags
  const indexSixColor: any = getColor(indexSix);
  arr.push(indexSixColor);
  const indexSeven: any = getEl('.CodeMirror-code > div:nth-child(13) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(1)') // Obj/Method name, e.g [color]props[color].property, [color]]ReactDOM[color].method, [color]document.getElementById[color]('element'), [color]arr[color].push
  const indexSevenColor: any = getColor(indexSeven);
  arr.push(indexSevenColor)
  const indexEight: any = getEl('.cm-number') // numbers
  const indexEightColor: any = getColor(indexEight);
  arr.push(indexEightColor)
  const tmTheme = makeTheme(themeName, bgColor, arr, imgurLink, isChecked)
  const metaJSON = pkgJSON(themeName, bgColor)
  const colorJSON = themeJSON(themeName, bgColor, arr)

  // Checks if the user is downloading a theme for VS Code, which is the only case that 'colorJSON' and 'metaJSON' need to be sent to the server
  const shouldISend = (editorParam: string, payload: any) => {
    if (editorParam === 'VS Code') {
      return payload
    }
    else {
      return null
    }
  }

  axios.post(`generate/theme/${editor}`, {
    tmTheme: tmTheme,
    colorJSON: shouldISend(editor, colorJSON),
    metaJSON: shouldISend(editor, metaJSON),
    readMe: makeReadMe(themeName, imgurLink, isChecked),
    name: themeName,
  }, { responseType: 'blob' })
    .then(res => fileDownload(res.data, `${themeName} (${editor} PicTheme).zip`))
}
