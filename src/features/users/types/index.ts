import { BaseEntity } from '@/types';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: 'ADMIN' | 'USER';
  teamId: string;
  bio: string;
  birthdate: Date; // Added birthdate of type Date
} & BaseEntity;
