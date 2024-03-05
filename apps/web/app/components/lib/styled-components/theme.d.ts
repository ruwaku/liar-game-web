import "styled-components";
import { TTheme } from "./themeProvider";

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
