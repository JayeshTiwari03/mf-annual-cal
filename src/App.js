import { createTheme, NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "./DarkModeToggle";
import MutualFundReturnCalculator from "./MutualFundCalculator";

const lightTheme = createTheme({
  type: "light"
});

const darkTheme = createTheme({
  type: "dark"
});

export const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <DarkModeToggle />
      <MutualFundReturnCalculator />
    </NextUIProvider>
  );
};
