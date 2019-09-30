import {Entity, model, property} from '@loopback/repository';

@model()
export class Comment extends Entity {
  @property({
    type: 'number',
    id: true,
    name: 'com_id',
  })
  id: number;

  @property({
    type: 'string',
    name: 'com_lib',
  })
  lib: string;


  constructor(data?: Partial<Comment>) {
    super(data);
  }
}

export interface CommentRelations {
  // describe navigational properties here
}

export type CommentWithRelations = Comment & CommentRelations;
