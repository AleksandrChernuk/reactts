import { Component, MouseEvent } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import { Box, Typography } from "@mui/material";

interface IState {
  good: number;
  neutral: number;
  bad: number;
}

class Feedbacks extends Component<{}, IState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    const btnName = e.currentTarget.name as keyof IState;

    this.setState((prevState) => {
      return { ...prevState, [btnName]: prevState[btnName] + 1 };
    });
  };
  getTotalFeedbacks() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  }

  positivePercentage() {
    const { good } = this.state;
    const total = this.getTotalFeedbacks();
    return Math.round((good / total) * 100);
  }

  render() {
    const feedbacksValues = Object.values(this.state);
    const feedbacksArr = Object.keys(this.state);
    const total = this.getTotalFeedbacks();
    const positive = this.positivePercentage() | 0;

    return (
      <>
        <Box my={2}>
          <Typography variant="h5" component="h3">
            Please Leave Feedbacks
          </Typography>
          <Box my={2}>
            <FeedbackOptions feedbacksArr={feedbacksArr} handleChange={this.handleChange} />
          </Box>
        </Box>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Box>
            <Typography variant="h5" component="h3">
              Statistics
            </Typography>
            <Statistics feedbacksValues={feedbacksValues} positive={positive} total={total} />
          </Box>
        )}
      </>
    );
  }
}

export default Feedbacks;
