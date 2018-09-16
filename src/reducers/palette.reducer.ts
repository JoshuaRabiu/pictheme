const initialState: any | any[] = [];
export const paletteReducer = (state: any | any[] = initialState, action: any) => {
  switch(action.type){
    case 'GET_COLORS':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}