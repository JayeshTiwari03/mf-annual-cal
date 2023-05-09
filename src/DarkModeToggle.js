import { Switch, useTheme, Grid, Text } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  const { type } = useTheme();

  return (
    <Grid.Container justify="center" align="center" gap={2}>
      <Grid>
        <Text>{type === "dark" ? "Dark" : "Light"}</Text>
      </Grid>
      <Grid>
        <Switch
          size="xs"
          checked={darkMode.value}
          onChange={() => darkMode.toggle()}
          className="switch-position"
        />
      </Grid>
    </Grid.Container>
  );
};

export default DarkModeToggle;
