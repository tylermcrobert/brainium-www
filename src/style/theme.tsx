// eslint-disable-next-line no-unused-vars
import { DefaultTheme } from 'styled-components'

const scale: number[] = [
  0.694,
  0.833,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488,
  2.986,
  3.583,
  4.3,
  5.16,
  6.192,
  7.43,
]
const remScale: string[] = scale.map(item => `${item}rem`)

const theme: DefaultTheme = {
  scale,
  colors: {
    error: '#801200',
    brand: {
      main: '#5DBCDB',
      secondary: '#203C5F',
    },
    text: '#747c85',
  },
  remScale,
  fontFamilies: {
    sansSerif: `CircularStd`,
  },

  margins: {
    standard: '1rem',
  },

  sizes: {
    xl: 1900,
    lg: 1440,
    md: 1024,
    sm: 768,
    xs: 576,
  },
}

export default theme
