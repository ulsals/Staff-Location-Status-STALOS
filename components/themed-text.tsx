import { useColorScheme } from "@/hooks/use-color-scheme";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "subtitle" | "link" | "small";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...otherProps
}: ThemedTextProps) {
  const { colors } = useColorScheme();
  // Prioritaskan override jika ada, jika tidak pakai dari theme
  const color = lightColor || darkColor || colors.text;

  const getFontSize = () => {
    switch (type) {
      case "title":
        return 24;
      case "subtitle":
        return 18;
      case "link":
        return 16;
      case "small":
        return 12;
      default:
        return 16;
    }
  };

  const getFontWeight = () => {
    switch (type) {
      case "title":
        return "bold";
      case "subtitle":
        return "600";
      default:
        return "normal";
    }
  };

  return (
    <Text
      style={[
        { color, fontSize: getFontSize(), fontWeight: getFontWeight() },
        style,
      ]}
      {...otherProps}
    />
  );
}
