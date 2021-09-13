function ColoredBox(props) {
  return (
    <div className="ColoredBox">
      <div
        style={{
          backgroundColor: props.color,
          width: '200px',
          height: '200px',
        }}
      >
        {' '}
      </div>
    </div>
  );
}
export default ColoredBox;
