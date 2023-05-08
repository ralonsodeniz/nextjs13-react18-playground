import { cache } from 'react';
import type { TUserIds } from '@/types/user';

export const fetchUser = cache((id: TUserIds) =>
  fetch(`http://localhost:3000/use-cache/api?id=${id}`).then((res) =>
    res.json(),
  ),
);
