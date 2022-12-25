import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const toggleMiniPlayer = () => {
    // if (!status) {
    //   buttonRef.current.classList.remove(classes.floatingBtn);
    //   setStatus(true);
    // } else {
    //   buttonRef.current.classList.add(classes.floatingBtn);
    //   setStatus(false);
    // }

    buttonRef.current.classList[!status ? "remove" : "add"](
      classes.floatingBtn
    );
    setStatus(!status);
  };

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={"material-icons-outlined " + classes.open}>
        play_circle_filled
      </span>
      <span
        className={"material-icons-outlined " + classes.close}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      {
        <ReactPlayer
          className={classes.player}
          width="300px"
          height="168px"
          url={`https://www.youtube.com/watch?v=${id}`}
          playing={status}
          controls
        />
      }
      <p>{title}</p>
    </div>
  );
}
