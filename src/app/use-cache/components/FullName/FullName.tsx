'use client';
// import { use, useState } from 'react';
import { fetchUser } from '@/http/user';
import { Button } from '@/components/ui/button';
import { getRandomInt } from '@/utils/number';
import * as users from '@/app/use-cache/api/mocks';
import type { TUserIds } from '@/app/use-cache/types/user';
import { useState } from 'react';

const FullName = () => {
  const [id, setId] = useState<TUserIds>('firstUser');
  // const data = use(fetchUser(id));
  const userNames = Object.keys(users) as TUserIds[];
  const handleClick = () => {
    const randomIndex = getRandomInt(0, userNames.length - 1);
    const userName = userNames[randomIndex];
    setId(userName);
  };

  return (
    <>
      <Button onClick={handleClick}>Set random User</Button>
      {/*<div>First Name: {data.first}</div>*/}
      {/*<div>Last Name: {data.last}</div>*/}
    </>
  );
};

export default FullName;
