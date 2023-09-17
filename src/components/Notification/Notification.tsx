import { Typography } from "@mui/material";
import { FC } from "react";
interface Iprops {
  message: string;
}

const Notification: FC<Iprops> = ({ message }) => {
  return (
    <Typography variant="h5" component="h3">
      {message}
    </Typography>
  );
};
export default Notification;
