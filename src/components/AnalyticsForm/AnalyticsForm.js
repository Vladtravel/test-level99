import { useDispatch, useSelector } from "react-redux";
// import logo from "./avatar.png";
import selectors from "../../redux/selectors";
import operations from "../../redux/operations";
import "./AnalyticsForm.css";
import Container from "../../components/Container/Container";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ChartLine from "../../components/Chart/ChartLine";
import ChartDoughnut from "../../components/Chart/ChartDoughnut";
import ChartVertical from "../../components/Chart/ChartVertical";

const useStyles = makeStyles({
  button: {
    display: "block",
    letterSpacing: "1px",
    textTransform: "none",
    fontSize: "14px",
  },
});

function UserMenu() {
  const name = useSelector(selectors.getUserName);
  const email = useSelector(selectors.getUserEmail);
  const avatarURL = useSelector(selectors.getUserAvatarURL);

  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Container>
      <div className="userMenu">
        <img src={avatarURL} alt="" width="32" className="userAvatar" />
        <span className="userName">
          Welcome, <b>{name}</b> {` (${email})`}
        </span>
        <Button
          type="button"
          size="small"
          variant="contained"
          onClick={() => dispatch(operations.logOut())}
          className={classes.button}
        >
          Logout
        </Button>
        <ChartLine />
        <ChartDoughnut />
        <ChartVertical />
      </div>
    </Container>
  );
}
export default UserMenu;
