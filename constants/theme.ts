/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

// Skala abu-abu (Monochrome)
const colors = {
  black: "#000",
  white: "#fff",
  gray1: "#F4F4F4",
  gray2: "#E9E9E9",
  gray3: "#D1D1D1",
  gray4: "#AAAAAA",
  gray5: "#888888",
  gray6: "#555555",
  gray7: "#333333",
};

export const Colors = {
  light: {
    text: colors.black,
    background: colors.white,
    tint: colors.gray6,
    icon: colors.gray7,
    tabIconDefault: colors.gray7,
    tabIconSelected: colors.black,
    card: colors.gray1,
    border: colors.gray2,
  },
  dark: {
    text: colors.white,
    background: colors.black,
    tint: colors.gray3,
    icon: colors.gray2,
    tabIconDefault: colors.gray2,
    tabIconSelected: colors.white,
    card: colors.gray7,
    border: colors.gray6,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
