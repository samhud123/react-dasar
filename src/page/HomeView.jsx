import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const HomeView = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-4">Daftar Todo</h1>
      {todoList.length > 0 ? (
        <ul className="list-disc pl-5">
          {todoList.map((todo) => (
            <li key={todo.id} className="mb-2">
              <h2 className="text-xl font-bold">{todo.title}</h2>
              <p>{todo.body}</p>
              <p>
                Status: {todo.isComplete ? '✅ Selesai' : '❌ Belum selesai'}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Belum ada todo yang ditambahkan.</p>
      )}
    </div>
  );
};

export default HomeView;
