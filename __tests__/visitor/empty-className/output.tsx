import { StyleSheet } from "react-native";
import { StyledComponent } from "tailwindcss-react-native";
import { Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
export function Test() {
  return (
    <TailwindProvider platform="native">
      <StyledComponent className="" component={Text}>
        Hello world!
      </StyledComponent>
    </TailwindProvider>
  );
}
Object.assign(globalThis.tailwindcss_react_native_style, StyleSheet.create({}));
Object.assign(globalThis.tailwindcss_react_native_media, {});