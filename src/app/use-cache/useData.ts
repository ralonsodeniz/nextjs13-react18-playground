import { use } from 'react';
import { fetchUser } from '@/http/user';
import { TUserIds } from '@/types/user';

export const useData = () => {
  let data;
  let dataError;
  const getData = (id: TUserIds) => {
    console.log('useData: getData: id:', id)
    data = use(fetchUser(id));
  };

  return {
    getData,
    data,
    dataError,
  };
};
