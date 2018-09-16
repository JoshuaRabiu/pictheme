const initialState: string = ''
export const imgurLinkReducer = (state: any=initialState, action: any) => {
  switch(action.type){
    case 'SEND_IMGUR_LINK':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}