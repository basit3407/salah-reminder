import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url("images/background.png")`,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container component="main"></Grid>
    </>
  );
}
