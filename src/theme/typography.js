// ----------------------------------------------------------------------
import palette from "./palette";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const typography = {
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 900,
  h1: {
    fontWeight: 900,
    lineHeight: 44 / 32, // formula lineHeight / fontSize = answer
    fontSize: pxToRem(32),
    color: palette.common.black,
  },
  h2: {
    fontWeight: 600,
    lineHeight: 20 / 20,
    fontSize: pxToRem(20),
    color: palette.common.black,
  },
  h3: {
    fontWeight: 600,
    lineHeight: 20 / 16,
    fontSize: pxToRem(16),
    color: palette.common.black,
  },
  h4: {
    fontWeight: 400,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    color: palette.grey[500],
  },
  h5: {
    fontWeight: 600,
    lineHeight: 16 / 14,
    fontSize: pxToRem(14),
    color: palette.common.black,
  },
  h6: {
    fontWeight: 600,
    lineHeight: 20 / 12,
    fontSize: pxToRem(12),
    color: palette.common.black,
  },
  smallText: {
    fontWeight: 500,
    lineHeight: 20 / 12,
    fontSize: 12,
  },
  p1: {
    fontWeight: 400,
    lineHeight: 20 / 18,
    fontSize: 18,
  },
  p2: {
    // for pagination
    fontWeight: 400,
    lineHeight: 20 / 14,
    fontSize: 14,
  },
  p3: {
    fontWeight: 400,
    lineHeight: 18 / 12,
    fontSize: 12,
    color: palette.grey[500],
  },
  p4: {
    fontWeight: 600,
    lineHeight: 16 / 12,
    fontSize: 12,
    color: palette.secondary.main,
  },
  p5: {
    fontWeight: 400,
    lineHeight: 20 / 12,
    fontSize: 12,
    color: palette.secondary.main,
  },
  p6: {
    fontWeight: 400,
    lineHeight: 24 / 16,
    fontSize: 16,
    color: palette.common.black,
  },
  p7: {
    fontWeight: 500,
    lineHeight: 20 / 18,
    fontSize: 20,
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    letterSpacing: "0.15px",
    color: palette.common.black,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 20 / 14,
    fontSize: pxToRem(14),
    color: palette.secondary.main,
  },
  subtitle3: {
    fontWeight: 400,
    lineHeight: 24 / 14,
    fontSize: pxToRem(16),
    color: palette.primary.main,
  },
  subtitle4: {
    fontWeight: 600,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    color: palette.common.black,
  },
  subtitle5: {
    fontWeight: 600,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    color: palette.secondary.main,
  },
  subtitle6: {
    fontWeight: 600,
    lineHeight: 16 / 12,
    fontSize: 12,
    letterSpacing: "1.25px",
    color: palette.primary.main,
  },
  subtitle7: {
    fontWeight: 600,
    lineHeight: 20 / 12,
    fontSize: 12,
    color: palette.secondary.main,
  },
  subtitle8: {
    fontWeight: 400,
    lineHeight: 20 / 12,
    fontSize: 16,
    color: palette.secondary.main,
  },
  subtitle9: {
    fontWeight: 600,
    lineHeight: 20 / 16,
    fontSize: pxToRem(16),
    color: palette.secondary.main,
  },
  subtitle10: {
    fontWeight: 600,
    lineHeight: 20 / 20,
    fontSize: pxToRem(20),
    color: palette.secondary.main,
  },
  subtitle11: {
    fontWeight: 600,
    lineHeight: 18 / 12,
    fontSize: 12,
    color: palette.grey[500],
  },
  modalHeading: {
    fontWeight: 900,
    lineHeight: 24 / 16,
    fontSize: 16,
  },

  button: {
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: pxToRem(14),
    letterSpacing: "1.25px",
    textTransform: "capitalize",
  },
  buttonText: {
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "1.25px",
    fontWeight: 600,
  },
  link: {
    letterSpacing: "1.25px",
  },
};

export default typography;
