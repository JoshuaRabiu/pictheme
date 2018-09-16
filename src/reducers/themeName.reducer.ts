// If the user doesn't specify a theme name, one is generated in the format: `PicTheme - ${random six-digit number}`
const defaultRandNumericalThemeName = (): string => `${Math.floor(Math.random() * 90000) + 10000}`;

export const themeNameReducer = (state: any = defaultRandNumericalThemeName(), action: any) => {
  switch (action.type) {
    case 'SET_THEME_NAME':
      return action.payload
    case 'RESET':
      return defaultRandNumericalThemeName()
    default:
      return state
  }
}