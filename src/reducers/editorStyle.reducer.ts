const initialState = '';
export const editorStyleReducer = (state: any = initialState, action: any) => {
  switch(action.type){
    case 'SET_DEFAULT_STYLE':
      return action.payload
    case 'RANDOMIZE':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}