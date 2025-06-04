export default function ShapeCounter({ shapes }) {
  const count = {
    square: shapes.filter(shape => shape.type === 'square').length,
    circle: shapes.filter(shape => shape.type === 'circle').length,
    triangle: shapes.filter(shape => shape.type === 'triangle').length
  };

  return (
    <div className="shape-counter">
      <div>Squares: {count.square}</div>
      <div>Circles: {count.circle}</div>
      <div>Triangles: {count.triangle}</div>
    </div>
  );
}