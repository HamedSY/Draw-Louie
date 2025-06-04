import Shape from './Shape';

export default function Canvas({ shapes, placeShape, removeShape }) {
  const handleCanvasClick = (e) => {
    if (e.target === e.currentTarget) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      placeShape(x, y);
    }
  };

  return (
    <div className="canvas-container" onClick={handleCanvasClick}>
      {shapes.map((shape) => (
        <Shape
          key={shape.id}
          shape={shape}
          onDoubleClick={() => removeShape(shape.id)}
        />
      ))}
    </div>
  );
}