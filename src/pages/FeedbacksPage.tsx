import { FC } from "react";
import Feedbacks from "../components/Feedbacks/Feedbacks";

interface FeedbacksPageProps {}

const FeedbacksPage: FC<FeedbacksPageProps> = () => {
  return (
    <>
      <Feedbacks />
    </>
  );
};

export default FeedbacksPage;
