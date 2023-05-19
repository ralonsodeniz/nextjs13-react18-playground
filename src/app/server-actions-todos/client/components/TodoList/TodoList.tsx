'use client';
import { experimental_useOptimistic as useOptimistic, useEffect } from 'react';
import ClientForm from '../ClientForm';
import { addTodo } from '@/app/server-actions-todos/actions';

const TodoList = ({
  todos,
}: {
  todos: { todo: string; id: string; sending: boolean }[];
}) => {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: string) => {
      return [
        ...state,
        { todo: newTodo, sending: true, id: `${state.length + 1}` },
      ];
    },
  );

  const handleAddTodo = async (todo: string) => {
    addOptimisticTodo(todo);
    const data = new FormData();
    data.append('todo', todo);
    await addTodo(data);
  };

  return (
    <>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index} className="mb-4">
            {todo.todo} - {todo.sending ? 'sending' : 'sent'}
          </li>
        ))}
      </ul>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <ClientForm addTodo={handleAddTodo} />
      </div>
    </>
  );
};

export default TodoList;
