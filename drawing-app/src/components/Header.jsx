export default function Header({ title, setTitle, exportDrawing, importDrawing }) {
  return (
    <header className="header">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
      </div>
      <div className="header-buttons">
        <button onClick={exportDrawing}>Export</button>
        <input
          type="file"
          id="import-file"
          accept=".json"
          onChange={importDrawing}
          style={{ display: 'none' }}
        />
        <button onClick={() => document.getElementById('import-file').click()}>
          Import
        </button>
      </div>
    </header>
  );
}