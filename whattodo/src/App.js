import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    }
  ])

  const nextID = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextID.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextID.current += 1;
    }, [todos],
  )

  const onRemove = useCallback((id) => {
    //결과를 리턴하는 것이니 filter 내부 로직은 false를 리턴하는 것.
    setTodos(todos.filter(todo => todo.id !== id));
  },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo,)
      )
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}

export default App;