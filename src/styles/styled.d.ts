import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    cardBackground: string;
    border: string;
    boxShadow: string;
    boxShadowHover: string;
    secondaryBackground: string;
  }
}
