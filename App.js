import React from "react";
import { MainStack } from "./src/navigation/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { theme } from "./src/theme/theme";

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
