import {Category} from "./category";

export interface Course {
  id: string,
  category: Category,
  name: string,
  source: string,
  sortOrder?: number,
}
