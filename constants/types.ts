export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  category: string;
  status: string;
  image: string;
  isHero?: boolean;
  link?: string;
  private?: boolean;
};