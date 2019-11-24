import { createGlobalStyle } from 'styled-components'

import { MTSSansMedium } from '../assets/fonts/MTSSans-Medium__W.woff2'
import { MTSSansRegular } from '../assets/fonts/MTSSans-Regular__W.woff2'
import { MTSSansBold } from '../assets/fonts/MTSSans-Bold__W.woff2'

export const GlobalStyles = createGlobalStyle`
    button {
        padding: 12px;

        div {
            font-size: 16px;
            line-height: 24px;
        }
    }
    @font-face {
    font-family: 'MTS Sans';
    font-style: normal;
    font-weight: 400;
    src: url('static/fonts/MTSSans-Regular__W.woff2') format('woff2');
  }
`
