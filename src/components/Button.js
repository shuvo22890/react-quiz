import classes from "../styles/Button.module.css";

export default function Button({ children, className, ...rest }) {
  return <div className={classes.button + " " + className}>{children}</div>;
}
