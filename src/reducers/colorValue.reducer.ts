const initialState = ''
export const colorValueReducer = (state: any = initialState, action: any) => {
  switch(action.type){
    case 'SEND_VALUE':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}