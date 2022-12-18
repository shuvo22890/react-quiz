import classes from "../styles/Button.module.css";

export default function Button({ children, ...rest }) {
  return (
    <div class={classes.button}>
      <span>{children}</span>
    </div>
  );
}
