const initialState = ''
export const imgURLReducer = (state=initialState, action: any) => {
  switch(action.type){
    case 'SEND_URL':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}