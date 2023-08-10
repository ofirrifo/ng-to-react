// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <h1>React App</h1>
      <Routes>
        <Route path="/" element={<div>Route</div>} />
        <Route
          path="*"
          element={<div>{}</div>}
        />
      </Routes>
    </>


  );
}

export default App;
