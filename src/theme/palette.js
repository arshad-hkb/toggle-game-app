import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const COMMON = {
  white: "#ffffff",
  whiteLight: "#F9F9F9",
  black: "#4F4E4E",
  // darkblue: "#103556",
};

const GREY = {
  0: COMMON.white,
  100: "#E0E0E0",
  100_1: "#E9EDF0",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  400_1: "#64748B",
  450: "#808080",
  500: "#919EAB",
  500_1: "#9DA3AE",
  600: "#F7F8F8",
  700: "#F9FAFC",
  800: "#212B36",
  800_1: "#222222",
  800_2: "#212121",
  900: "#E6E8EF",
  900_1: "#D1D5DB",
  900_2: "#F3F4F6",
  900_3: alpha(COMMON.black, 0.6),
  100_02: alpha("#E9EDF0", 0.2),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  400_12: alpha("#64748B", 0.12),
};

const PRIMARY = {
  light: "#71B3DE",
  main: "#1A93E2",
  // dark: "#0074ad",
  // darker: "#004064",
  // contrastText: COMMON.white,
};

const SECONDARY = {
  light: "#7F7878",
  lighter: "#998F8F",
  main: "#6D6D6D",
  dark: "#4E4E4E",
  // contrastText: COMMON.white,
};

const INFO = {
  light: "#7F7878",
  main: "#003aff",
  dark: "#00279d",
  contrastText: COMMON.white,
};

const SUCCESS = {
  // lighter: "#71DE7C",
  light: "#71DE7C",
  // main: "#129355",
  // dark: "#03ad00", //'#00642b',
  // contrastText: COMMON.white,
};

// this color is not set yellow
const WARNING = {
  lighter: "#EE6B21",
  // light: "#FFE16A",
  // main: "#FFC107",
  // dark: "#B78103",
  // darker: "#7A4F01",
  // contrastText: COMMON.white,
};

const ERROR = {
  light: "#E33E3E",
  // main: "#ff0000",
  // dark: "#c20000",
  // contrastText: COMMON.white,
};

const palette = {
  common: { ...COMMON },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: GREY[500_24],
  background: { paper: COMMON.white, default: GREY[700] },
  transparent: "transparent",
};

export default palette;
