import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    borderRadius: 2
  },
  bar: {
    borderRadius: 4,
    backgroundColor: "#ffffff"
  }
}))(LinearProgress);

export default BorderLinearProgress;
