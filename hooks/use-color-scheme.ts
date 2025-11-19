import { Colors } from "@/constants/theme";
import { useColorScheme as useNativeColorScheme } from "react-native";

export function useColorScheme() {
  let scheme = useNativeColorScheme();
  if (scheme !== "dark" && scheme !== "light") {
    scheme = "light";
  }
  return {
    colors: Colors[scheme],
    colorScheme: scheme,
  };
}
