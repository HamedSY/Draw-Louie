export default function Shape({ shape, onDoubleClick }) {
  const style = {
    '--shape-color': shape.color,
    left: `${shape.x}px`,
    top: `${shape.y}px`
  };

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent click from reaching canvas
  };

  return (
    <div
      className={`shape ${shape.type}`}
      style={style}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
    />
  );
}