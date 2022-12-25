export default function Checkbox({
  className,
  labelFor,
  input,
  text,
  ...rest
}) {
  return (
    <label className={className} htmlFor={labelFor}>
      {input && <input type="checkbox" id={labelFor} {...rest} />}
      &nbsp;
      <span>{text}</span>
    </label>
  );
}
