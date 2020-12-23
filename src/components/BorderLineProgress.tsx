import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: theme.spacing(1),
    borderRadius: 2,
  },
  bar: {
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
}))(LinearProgress);

export default BorderLinearProgress;
