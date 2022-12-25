import { Link } from "react-router-dom";
import classes from "../styles/Video.module.css";

export default function Video({ title, noq, id }) {
  const LinkWrapper = ({ children }) =>
    noq > 0 ? (
      <Link to={`/quiz/${id}`} state={{ title }}>
        {children}
      </Link>
    ) : (
      children
    );

  return (
    <LinkWrapper>
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />

        <p>{title}</p>

        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points: {noq * 5}</p>
        </div>
      </div>
    </LinkWrapper>
  );
}
