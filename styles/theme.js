import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61b15a",
    },
    text: {
      primary: "#fff",
      secondary: green[900],
    },
  },
});

export default theme;
