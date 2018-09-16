const initialState: number = 0;
export const indexNoReducer = (state: number = initialState, action: any) => {
  switch(action.type){
    case 'SWITCH_PALETTE':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}