export type Post = {
  id: string,
  petName: string,
  author?: string | User,
  description: string,
  picURL?: string,
  createdAt: string,
  updatedAt: string,
};
