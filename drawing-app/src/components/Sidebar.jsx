export default function Sidebar({ addShape, selectedShapeType }) {
  const shapes = ['square', 'circle', 'triangle'];
  
  return (
    <div className="sidebar">
      {shapes.map((shape) => (
        <button
          key={shape}
          className={`sidebar-button ${
            selectedShapeType === shape ? 'selected' : ''
          }`}
          onClick={() => addShape(shape)}
        >
          {shape.charAt(0).toUpperCase() + shape.slice(1)}
        </button>
      ))}
    </div>
  );
}