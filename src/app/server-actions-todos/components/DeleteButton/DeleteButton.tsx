'use client';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { removeTodos } from '@/app/server-actions-todos/actions';

const DeleteButton = () => {
  const [pending, startTransition] = useTransition();

  return (
    <Button
      disabled={pending}
      className="mb-4"
      type="button"
      onClick={() => startTransition(() => removeTodos())}
    >
      Remove Todos
    </Button>
  );
};

export default DeleteButton;
