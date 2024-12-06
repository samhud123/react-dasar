import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Bangun Tidur',
      body: 'Bangun tidur langsung coding',
      isComplete: true,
    },
    {
      id: 2,
      title: 'Makan Pagi',
      body: 'Makan sambil nonton youtuber',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Pergi Kampus',
      body: 'Belajar jadi orang bener',
      isComplete: false,
    },
  ]);

  const addTodo = (title, body) => {
    let todoArray = todoList.length;
    setTodoList([
      ...todoList,
      {
        id: todoArray + 1,
        title: title,
        body: body,
        isComplete: false,
      },
    ]);
    setTitle('');
    setBody('');
  };

  const ChangeStatusTodo = (id) => {
    setTodoList((itemTodo) =>
      itemTodo.map((data) =>
        data.id === id ? { ...data, isComplete: true } : data
      )
    );
    console.log(todoList);
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, ChangeStatusTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
