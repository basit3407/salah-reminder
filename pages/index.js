import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Checkbox,
  FormControlLabel,
  Avatar,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../components/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundColor: theme.palette.primary.main,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonLabel: {
    color: theme.palette.text.primary,
  },
  textColor: {
    color: theme.palette.primary.main,
  },
}));

export default function Login() {
  const classes = useStyles(),
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container className={classes.root}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          item
          xs={false}
          sm={6}
          md={7}
          className={classes.image}
        >
          <Typography color="textPrimary" variant={matches ? "h4" : "h2"}>
            <Typography display="inline" color="textPrimary" variant="body1">
              (القران٢:١٥٢){" "}
            </Typography>
            فَاذۡكُرُوۡنِىۡٓ اَذۡكُرۡكُمۡ
          </Typography>

          <Typography color="textPrimary" variant={matches ? "body2" : "h6"}>
            so remember me,i will remember you
            <Typography
              display="inline"
              color="textPrimary"
              variant={matches ? "caption" : "body2"}
            >
              {" "}
              (AL-Quran 2:152)
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                inputProps={{ className: classes.textColor }}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                inputProps={{ className: classes.textColor }}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                classes={{ label: classes.textColor }}
              />
              <Button
                classes={{ label: classes.buttonLabel }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
