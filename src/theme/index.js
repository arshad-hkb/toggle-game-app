import { ReactElement, ReactNode } from "react";
import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import PropTypes from "prop-types";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
import shadows from "./shadow";

export let theme = createTheme({
  palette,
  shape: { borderRadius: 2 }, //textbox also
  breakpoints,
  typography,
  shadows,
});
export const muiCache = createCache({
  key: "css",
  prepend: true,
});

const ThemeProvider = (props) => {
  const { children } = props;
  return (
    <CacheProvider value={muiCache}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
ThemeProvider.propTypes = {
  children: PropTypes.node,
};
