import { Link, Typography } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="textSecondary" href="http://basitminhas.com">
        Basit Minhas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
