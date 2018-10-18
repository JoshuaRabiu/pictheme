import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { paletteReducer } from './palette.reducer';
import { imgURLReducer } from './imgURL.reducer';
import { imgNameReducer } from './imgName.reducer';
import { loadingStatusReducer } from './loadingStatus.reducer';
import { indexNoReducer } from './indexNo.reducer';
import { bgColorReducer } from './bgColor.reducer';
import { editorStyleReducer } from './editorStyle.reducer';
import { colorValueReducer } from './colorValue.reducer';
import { themeNameReducer } from './themeName.reducer';
import { isCheckedReducer } from './isChecked.reducer';
import { imgurLinkReducer } from './imgurLink.reducer';

export const rootReducer = combineReducers({
  palette: paletteReducer,
  imgURL: imgURLReducer,
  imgName: imgNameReducer,
  indexNo: indexNoReducer,
  loadingStatus: loadingStatusReducer,
  bgColor: bgColorReducer,
  editorStyle: editorStyleReducer,
  colorValue: colorValueReducer,
  themeName: themeNameReducer,
  isChecked: isCheckedReducer,
  imgurLink: imgurLinkReducer
});

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware);
