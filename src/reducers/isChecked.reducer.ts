export const isCheckedReducer = (state: boolean = true, action: any) => {
  switch(action.type){
    case 'TOGGLE_CHECK':
      return !state
    case 'RESET':
      return true
    default:
      return state
  }
}