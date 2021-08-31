import "styled-components"

declare module 'styled-components'{
  export interface DefaultTheme{
    title: string,
    colors:{
      background: string,
      white: string,
      gray: string,
      bgmodal: string,
      pink: string,
      green: string,
      dark: string,
      border: string
    }
  }
}