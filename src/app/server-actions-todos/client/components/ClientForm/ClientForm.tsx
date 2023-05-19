'use client';

import { type FormEventHandler, useRef, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import DeleteButton from '@/app/server-actions-todos/components/DeleteButton';
import SubmitButton from '@/app/server-actions-todos/components/SubmitButton';

const ClientForm = ({
  addTodo,
}: {
  addTodo: (todo: string) => Promise<void>;
}) => {
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    startTransition(() => addTodo(inputRef.current?.value || ''));
  };

  return (
    <>
      <form
        className="flex w-full max-w-sm items-center space-x-2 mb-4"
        onSubmit={handleAddTodo}
      >
        <Input
          disabled={isPending}
          ref={inputRef}
          type="text"
          name="todo"
          placeholder="Add Todo"
        />
        <SubmitButton />
      </form>
      <DeleteButton />
    </>
  );
};

export default ClientForm;
