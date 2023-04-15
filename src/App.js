import { useEffect, useState } from "react";
import Addtodo from "./components/AddTodo";
import "./App.css";
import Todo from "./components/Todo";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [keyword, setKeyword] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
    setKeyword("All");
  };


  const updateTodo = (id) => {
    let todosCopy = todos;
    const todoIndex = todosCopy.findIndex((el) => el.id === id);
    const todo = todosCopy.find((el) => el.id === id);
    todosCopy[todoIndex] = {
      ...todo,
      isActive: !todo.isActive,
    };
    setTodos([...todosCopy]);
  };


  const deleteTodo = (id) => {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };


  useEffect(() => {
    filterTodos(keyword);
  }, [todos, keyword]);


  const filterTodos = (key) => {
    if (key === "All") {
      setFilteredTodos(todos);
      setKeyword("All");
      return;
    }
    if (key === "Active") {
      setFilteredTodos(todos.filter((el) => el.isActive === true));
      setKeyword("Active");
      return;
    }
    if (key === "Completed") {
      setFilteredTodos(todos.filter((el) => el.isActive === false));
      setKeyword("Completed");
      return;
    }
    if (key === "Clear") {
      setTodos(todos.filter((el) => el.isActive === true));
      setKeyword("All");
    }
  };


  return (
    <div className="App">
      <div className="container">
        <Addtodo addTodo={addTodo} />
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <div className="actions">
          <span>
            {todos.filter((el) => el.isActive === true).length} Active items
            left
          </span>
          &nbsp;
          <div>
            <button
              className="filter-all"
              onClick={() => {
                filterTodos("All");
              }}
            >
              All
            </button>
            &nbsp;
            <button
              className="filter-active"
              onClick={() => {
                filterTodos("Active");
              }}
            >
              Active
            </button>
            &nbsp;
            <button
              className="filter-completed"
              onClick={() => {
                filterTodos("Completed");
              }}
            >
              Completed
            </button>
            &nbsp;
            <button
              className="delete-all"
              onClick={() => {
                filterTodos("Clear");
              }}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;

  
