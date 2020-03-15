import 'antd/dist/antd.css'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    font-style: thin;
    font-weight: 300;
    src: url('assets/fonts/ProximaNova-Light.otf') format('otf');
  }
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    src: url('assets/fonts/ProximaNova-Reg.otf') format('otf');
  }
  @font-face {
    font-family: 'Proxima Nova';
    font-style: bold;
    font-weight: 700;
    src: url('assets/fonts/ProximaNova-Bold.otf') format('otf');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: bold;
    font-weight: 700;
    src: url('assets/fonts/PlayfairDisplay-Bold.ttf') format('ttf');
  }
  
  #artists_portfolio {
    height: 100%;
  }
`
