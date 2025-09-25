import 'styled-components';

type Theme = typeof import('../styles/themes').lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
