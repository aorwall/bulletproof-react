import { BaseEntity } from '@/types';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: 'ADMIN' | 'USER';
  teamId: string;
  bio: string;
  birthdate: string; // Added birthdate field
} & BaseEntity;
