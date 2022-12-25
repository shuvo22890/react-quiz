import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ input, options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className={`${classes.answer} ${
            !input &&
            (option.correct
              ? classes.correct
              : option.checked
              ? classes.wrong
              : null)
          }`}
          input={input}
          text={option.title}
          labelFor={"opt" + index}
          value={index}
          checked={option.checked}
          onChange={input && ((e) => handleChange(e, index))}
        />
      ))}
    </div>
  );
}
