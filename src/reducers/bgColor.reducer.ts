const initialState: string = '#0c0c0c'
export const bgColorReducer = (state: string = '#0c0c0c', action: any) => {
  switch(action.type){
    case 'CHANGE_BG_COLOR':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}