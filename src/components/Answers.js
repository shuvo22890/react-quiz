import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        labelFor="option1"
        text="A New Hope 1"
        notAnalysis={false}
      />
      <Checkbox
        className={classes.answer}
        labelFor="option2"
        text="A New Hope 1"
        notAnalysis={false}
      />
      <Checkbox
        className={classes.answer + " " + classes.wrong}
        labelFor="option3"
        text="A New Hope 1"
        notAnalysis={false}
      />
      <Checkbox
        className={classes.answer + " " + classes.correct}
        labelFor="option4"
        text="A New Hope 1"
        notAnalysis={false}
      />
      <Checkbox
        className={classes.answer}
        labelFor="option5"
        text="A New Hope 1"
        notAnalysis={false}
      />
      <Checkbox
        className={classes.answer}
        labelFor="option6"
        text="A New Hope 1"
        notAnalysis={false}
      />
    </div>
  );
}
