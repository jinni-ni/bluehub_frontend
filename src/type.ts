interface Author {
  id: number;
  email: string;
  register_user_method: string;
}

export interface Announcements {
  id: number;
  title: string;
  company: string;
  bsicAddr: string;
  sal: number;
  regDt: Date;
  closeDt: Date;
  explain: string;
  region: string;
  is_fav: boolean;
  author: Author;
}
