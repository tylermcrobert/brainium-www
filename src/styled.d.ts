import 'styled-components'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Sizes = {
  [item in Size]: number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    scale: number[]
    remScale: string[]
    fontFamilies: {
      sansSerif: string
    }

    colors: {
      brand: {
        main: string
        secondary: string
      }
      text: string
      error: string
    }

    sizes: Sizes
  }
}