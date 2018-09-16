const initialState = '';
export const imgNameReducer = (state: string = initialState, action: any) => {
	switch(action.type){
		case 'SEND_IMAGE_NAME':
			return action.payload
		case 'RESET':
      return initialState
		default:
			return state
	}
}