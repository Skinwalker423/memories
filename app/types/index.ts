export interface MemoryBoard {
  id: number;
  created_at: Date;
  title: string;
  images: string[];
  userId: number;
}

export interface ExtendedUser {
  id: number;
  created_at: Date;
  allowedBoards: number;
}
