'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Add Todo
    </Button>
  );
};

export default SubmitButton;
