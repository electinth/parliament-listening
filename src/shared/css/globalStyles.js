import { createGlobalStyle } from "styled-components"
import {
  TheMatterBold,
  TheMatterBoldWoff2,
  NotoSansThaiUIRegular,
  NotoSansThaiUIRegularWoff2,
  NotoSansThaiUIBold,
  NotoSansThaiUIBoldWoff2,
} from "./fonts"

export default createGlobalStyle `
@font-face {
  font-family: 'The Matter';
  src: url("${TheMatterBoldWoff2}") format("woff2"), url("${TheMatterBold}") format("woff");
  font-weight: bold;
}

@font-face {
  font-family: 'Noto Sans Thai';
  src: url("${NotoSansThaiUIRegularWoff2}") format("woff2"), url("${NotoSansThaiUIRegular}") format("woff");
  font-weight: normal;
}

@font-face {
  font-family: 'Noto Sans Thai';
  src: url("${NotoSansThaiUIBoldWoff2}") format("woff2"), url("${NotoSansThaiUIBold}") format("woff");
  font-weight: bold;
}
`

