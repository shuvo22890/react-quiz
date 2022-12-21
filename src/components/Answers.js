import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ notAnalysis = true }) {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        notAnalysis={notAnalysis}
        labelFor="option1"
        text="A New Hope 1"
      />
      <Checkbox
        className={classes.answer}
        notAnalysis={notAnalysis}
        labelFor="option2"
        text="A New Hope 1"
      />
      <Checkbox
        className={classes.answer + " " + classes.wrong}
        labelFor="option3"
        text="A New Hope 1"
      />
      <Checkbox
        className={classes.answer + " " + classes.correct}
        labelFor="option4"
        text="A New Hope 1"
      />
      <Checkbox
        className={classes.answer}
        notAnalysis={notAnalysis}
        labelFor="option5"
        text="A New Hope 1"
      />
      <Checkbox
        className={classes.answer}
        notAnalysis={notAnalysis}
        labelFor="option6"
        text="A New Hope 1"
      />
    </div>
  );
}
