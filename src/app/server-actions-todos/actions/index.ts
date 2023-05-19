'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { ROUTES } from '@/http/routes';
import { wait } from '@/utils/delay';

const todosPath = path.resolve('./public', './todos.json');

export const getTodos = async () => {
  let todos: string = '[]';
  if (fs.existsSync(todosPath)) {
    todos = fs.readFileSync(todosPath, 'utf-8');
  } else {
    fs.writeFileSync(todosPath, todos);
  }
  return JSON.parse(todos) as { id: string; todo: string; sending: boolean }[];
};

export const addTodo = async (data: FormData) => {
  const todos = await getTodos();
  const todo = data.get('todo');
  await wait(1000);
  if (todo) {
    const newTodos = [
      ...todos,
      { id: `${todos.length + 1}`, todo, sending: false },
    ];
    fs.writeFileSync(todosPath, JSON.stringify(newTodos));
    revalidatePath(ROUTES.SERVER_ACTIONS_TODOS_CLIENT.href);
    revalidatePath(ROUTES.SERVER_ACTIONS_TODOS.href);
  } else throw new Error('No todo provided');
};

export const removeTodos = async () => {
  fs.unlinkSync(todosPath);
  revalidatePath(ROUTES.SERVER_ACTIONS_TODOS_CLIENT.href);
  revalidatePath(ROUTES.SERVER_ACTIONS_TODOS.href);};
