import classes from "../styles/Illustration.module.css";

export default function Illustration({ img, alt }) {
  return (
    <div class={classes.illustration}>
      <img src={img} alt={alt} />
    </div>
  );
}
