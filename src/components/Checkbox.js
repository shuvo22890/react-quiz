export default function Checkbox({
  className,
  labelFor,
  notAnalysis,
  text,
  ...rest
}) {
  return (
    <label className={className} htmlFor={labelFor}>
      {notAnalysis && <input type="checkbox" id={labelFor} {...rest} />}
      &nbsp;
      <span>{text}</span>
    </label>
  );
}
