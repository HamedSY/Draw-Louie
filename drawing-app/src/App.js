import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ShapeCounter from './components/ShapeCounter';
import './App.css';

const SHAPE_COLORS = [
  '#FF5252', // Red
  '#FF4081', // Pink
  '#E040FB', // Purple
  '#7C4DFF', // Deep Purple
  '#536DFE', // Indigo
  '#448AFF', // Blue
  '#40C4FF', // Light Blue
  '#18FFFF', // Cyan
  '#64FFDA', // Teal
  '#69F0AE', // Green
  '#B2FF59', // Light Green
  '#EEFF41', // Lime
  '#FFFF00', // Yellow
  '#FFD740', // Amber
  '#FFAB40', // Orange
  '#FF6E40'  // Deep Orange
];

function App() {
  const [title, setTitle] = useState('My Painting');
  const [shapes, setShapes] = useState([]);
  const [selectedShapeType, setSelectedShapeType] = useState(null); // New state

  const addShape = (shape) => {
    setSelectedShapeType(shape);
  };

  const placeShape = (x, y) => {
    if (!selectedShapeType) return;
    
    const newShape = {
      type: selectedShapeType,
      id: Date.now(),
      x,
      y,
      color: SHAPE_COLORS[Math.floor(Math.random() * SHAPE_COLORS.length)]
    };
    
    setShapes([...shapes, newShape]);
  };

  const removeShape = (id) => {
    setShapes(shapes.filter(shape => shape.id !== id));
  };

  const exportDrawing = () => {
    const data = {
      title,
      shapes
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.json`;
    a.click();
  };

  const importDrawing = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        setTitle(data.title || 'Imported Painting');
        setShapes(data.shapes || []);
      } catch (error) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="app">
      <Header 
        title={title} 
        setTitle={setTitle} 
        exportDrawing={exportDrawing} 
        importDrawing={importDrawing} 
      />
      <div className="main-content">
        <Sidebar addShape={addShape} selectedShapeType={selectedShapeType} />
        <Canvas 
          shapes={shapes} 
          placeShape={placeShape} 
          removeShape={removeShape} 
        />
      </div>
      <ShapeCounter shapes={shapes} />
    </div>
  );
}

export default App;