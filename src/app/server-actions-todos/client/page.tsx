import TodoList from '@/app/server-actions-todos/client/components/TodoList';
import { getTodos } from '@/app/server-actions-todos/actions';

const ClientTodos = async () => {
  const todos = await getTodos();

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Todos</h1>
      <TodoList todos={todos} />
    </>
  );
};

export default ClientTodos;
