import React from "react";
import { MainStack } from "./src/navigation/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { theme } from "./src/theme/theme";
import { UserContextProvider } from "./src/context/userContext";
import { checkForPermissions } from "./src/utils/requestPermissions";

function App() {
  checkForPermissions();
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <MainStack />
        </UserContextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
