const initialState: boolean = false
export const loadingStatusReducer = (state: boolean = initialState, action: any) => {
  switch(action.type){
    case 'LOADING_STATUS':
      return action.payload
    case 'RESET':
      return initialState
    default:
      return state
  }
}