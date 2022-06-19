export type Post = {
  petName: string,
  author?: string | User,
  description: string,
  picURL?: string,
  createdAt: string,
  updatedAt: string,
};
