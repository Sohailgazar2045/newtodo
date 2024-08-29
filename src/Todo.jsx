import { useState } from "react";
export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState([]);
  const [date, setDate] = useState([]);

  const addTask = () => {
    if (!task || !date) return;
    const newTodo = { task, date };
    setTodoList([...todoList, newTodo]);
    setDate("");
    setTask("");
  };

  const handleDate = (index) => {
    const updateTodo = todoList.filter((item, i) => i != index);
    setTodoList(updateTodo);
  };
  return (
    <center className="content-container">
      <h2>ToDo APP</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Inter Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-btn"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>
        {todoList.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-4">
              <h3>{item.task}</h3>
            </div>
            <div className="col-4">
              <h3>{item.date}</h3>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger kg-btn "
                onClick={() => handleDate(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </center>
  );
}
