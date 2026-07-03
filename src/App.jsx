import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import BoardList from "./components/BoardList";
import Write from "./components/Write";
import View from "./components/View";
import { useState } from "react";

function App() {
  const [boardId, setBoardId] = useState(0);
  const [isModifyMode, setIsModifyMode] = useState(false);

  const handleModify = _id => {
    setBoardId(_id);
    setIsModifyMode(true);
  };

  const handleCancel = () => {
    setBoardId(0);
    setIsModifyMode(false);
  };

  return (
    <div className="container">
      <h1>React BBS</h1>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route
          path="/write"
          element={
            <Write isModifyMode={isModifyMode} boardId={boardId} handleCancel={handleCancel} />
          }
        />
        <Route path="/view/:id" element={<View handleModify={handleModify} />} />
      </Routes>
    </div>
  );
}

export default App;
