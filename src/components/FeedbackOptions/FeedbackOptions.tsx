import { Button, ButtonGroup } from "@mui/material";
import { FC, MouseEvent } from "react";
import { nanoid } from "nanoid";

interface Iprops {
  feedbacksArr: string[];
  handleChange: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FeedbackOptions: FC<Iprops> = ({ feedbacksArr, handleChange }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {feedbacksArr.map((e) => {
        return (
          <Button key={nanoid()} onClick={handleChange} name={e} color="warning">
            {e}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
export default FeedbackOptions;
