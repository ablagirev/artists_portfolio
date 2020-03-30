import 'antd/dist/antd.css'
import { createGlobalStyle } from 'styled-components'
import font1 from 'assets/fonts/ProximaNova-Light.otf'
import font2 from 'assets/fonts/ProximaNova-Reg.otf'
import font3 from 'assets/fonts/ProximaNova-Bold.otf'
import font4 from 'assets/fonts/PlayfairDisplay-Bold.ttf'
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    font-style: thin;
    font-weight: 300;
    src: url('assets/fonts/ProximaNova-Light.otf') format('otf');
  }
  /*@font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    src: url(${font2}) format('otf');
  }
  @font-face {
    font-family: 'Proxima Nova';
    font-style: bold;
    font-weight: 700;
    src: url(${font3}) format('otf');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: bold;
    font-weight: 700;
    src: url(${font4}) format('ttf');
  }*/
`
