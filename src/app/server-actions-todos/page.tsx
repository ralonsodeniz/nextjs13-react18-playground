import { Input } from '@/components/ui/input';
import SubmitButton from '@/app/server-actions-todos/components/SubmitButton';
import Link from 'next/link';
import { ROUTES } from '@/http/routes';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { addTodo, getTodos } from '@/app/server-actions-todos/actions';
import DeleteButton from '@/app/server-actions-todos/components/DeleteButton';

let todos = ['learn react'];

const TodoList = async () => {
  const todos = await getTodos();

  const { base64, img } = await getPlaiceholder(
    'https://picsum.photos/id/237/200/300',
    { size: 10 },
  );

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Todos</h1>
      <Image
        {...img}
        blurDataURL={base64}
        placeholder="blur"
        alt="random image"
      />
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4">
            {todo.todo}
          </li>
        ))}
      </ul>
      <form
        action={addTodo}
        className="flex w-full max-w-sm items-center space-x-2 mb-4"
        key={todos[todos.length - 1]?.id ?? 0}
      >
        <Input type="text" name="todo" placeholder="Add Todo" />
        <SubmitButton />
      </form>
      <DeleteButton />
      <Link href={ROUTES.SERVER_ACTIONS_TODOS_CLIENT.href}>
        {ROUTES.SERVER_ACTIONS_TODOS_CLIENT.description}
      </Link>
    </>
  );
};

export default TodoList;
