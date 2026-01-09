import { Category } from './category.model';

export class Expense {

  date: Date | undefined;
  category: Category | undefined;
  amount: number | undefined;
  description: string | undefined;
  editable: boolean = false;
  // Constructor to initialize the properties 

  constructor(date: Date, category: Category, amount: number, description: string, editable: boolean) {
    this.date = date;
    this.category = category;
    this.amount = amount;
    this.description = description;
    this.editable = editable;
  }
  
}