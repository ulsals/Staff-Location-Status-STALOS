import { useColorScheme } from "@/hooks/use-color-scheme";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { colors } = useColorScheme();
  const backgroundColor = lightColor || darkColor || colors.background;
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
