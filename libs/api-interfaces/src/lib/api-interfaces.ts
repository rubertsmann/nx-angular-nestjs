import { ObjectID } from 'typeorm';

export interface Message {
  message: string;
}

export interface IPhoto {
  id?: ObjectID;
  name: string;
  description: string;
  filename: string;
  isPublished: boolean;
}