import ThemeConfig from "../src/theme/index"

const withThemeProvider = (Story, context) => {
  return (
      <ThemeConfig>
          <Story {...context}/>
      </ThemeConfig>
  )
}
export const decorators = [withThemeProvider]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}