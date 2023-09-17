import { FC } from "react";
import { List, ListItem, Typography } from "@mui/material";

interface Iprops {
  feedbacksValues: number[];
  positive: number;
  total: number;
}

const Statistics: FC<Iprops> = ({ feedbacksValues, positive, total }) => {
  return (
    <List>
      <ListItem>
        <Typography variant="h6" component="h4">
          good: {feedbacksValues[0]}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h6" component="h4">
          neutral: {feedbacksValues[1]}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h6" component="h4">
          bad: {feedbacksValues[2]}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h6" component="h4">
          total: {total}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5" component="h4">
          Positive Feedbacks: {`${positive}%`}
        </Typography>
      </ListItem>
    </List>
  );
};

export default Statistics;
