function ColoredBox(props) {
  return (
    <div className="ColoredBox">
      <div
        style={{
          backgroundColor: props.color,
          width: '200px',
          height: '200px',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
export default ColoredBox;
