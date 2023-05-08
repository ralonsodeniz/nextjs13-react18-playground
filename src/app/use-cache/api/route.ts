import { NextRequest, NextResponse } from 'next/server';
import * as users from './mocks';
import type { TUserIds } from '@/types/user';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.nextUrl);
  const id = searchParams.get('id') as TUserIds;
  const user = id ? users[id] : users.firstUser;

  return NextResponse.json(user);
};
