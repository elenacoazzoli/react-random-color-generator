function ColoredBox(props) {
  return (
    <div className="ColoredBox">
      <div
        style={{
          backgroundColor: props.color,
          width: props.width ? `${props.width}px` : '200px',
          height: props.height ? `${props.height}px` : '200px',
          margin: '0 auto',
        }}
      />
      <p>width {props.width}</p>
      <p>height {props.height}</p>
    </div>
  );
}
export default ColoredBox;
