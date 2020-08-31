// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;
    borderRadius: string;

    color: {
      main: string;
      sub: string;
    };
  }
}
