function ColoredBox(props) {
  return (
    // inline CSS
    <div
      style={{
        border: '1px black solid',
        backgroundColor: props.color,
        width: props.width ? `${props.width}px` : '100px',
        height: props.height ? `${props.height}px` : '100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>{props.color}</span>
    </div>
  );
}
export default ColoredBox;
