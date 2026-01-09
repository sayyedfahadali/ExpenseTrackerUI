import { Component, Input } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { Category } from '../../models/category.model';
import { DeleteExpenseService } from '../edit-remove-column/edit-remove-expense.service';
import { FetchExpensesService } from '../services/fetch-expenses.service';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // added
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateExpenseService } from './update-expense.service';


@Component({
  selector: 'app-expenseTable',
  templateUrl: './expenseTable.component.html',
  styleUrls: ['./expenseTable.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule] // <- no HttpClientModule here
})
export class ExpenseTableComponent {

  constructor(private deleteExpenseService: DeleteExpenseService, 
              private fetchExpensesService: FetchExpensesService,
              private expenseCategoryService: ExpenseCategoryService,
              private updateExpenseService: UpdateExpenseService,
              private snackBar: MatSnackBar) {}

  @Input() editRemoveColumnActive: boolean = false;

  sno: number = 0;
  expenses: Expense[] = [];
  expenseCategory: Category[] = [];

  ngOnInit() {
    // map fetched DTOs to Expense by adding the missing `editable` property
    this.fetchExpensesService.getAllExpenses().subscribe({
      next: (expenses: any[]) => {
        this.expenses = expenses.map(e => ({ ...e, editable: false } as Expense));
      },
      error: (err) => { console.error('Failed to load expenses', err); }
    });
  }

  getCategoryName(i: number): String {
    return this.expenses[i]?.category?.name || 'Uncategorized';
  }

  deleteButtonClicked(i: number) {
    console.log('Delete button clicked for expense:', this.expenses[i]);
    const expenseId = (this.expenses[i] as any).id;
    if (expenseId != null) {
      this.deleteExpense(i);
    } else {
      // fallback: remove locally if no id present
      this.expenses.splice(i, 1);
    }
  }

  // call the service and update UI
  deleteExpense(i: number) {
    const expenseId = (this.expenses[i] as any).id;
    const description = this.expenses[i].description;
    this.deleteExpenseService.deleteExpense(expenseId).subscribe({
      next: () => {
        // remove from local list / refresh
        const idx = this.expenses.findIndex(e => (e as any).id === expenseId);
        if (idx !== -1) {
          this.expenses.splice(idx, 1);
        }
        console.log('Expense "'+description+'" removed');
        this.snackBar.open('Expense "'+description+'" removed', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      error: err => console.error('Delete failed', err)
    });
  }

  toggleEdit(i: number) {
    const expense = this.expenses[i];

    if (expense.editable) {
      // Save updated expense to the database
      this.updateExpenseService.updateExpense(expense).subscribe({
        next: (updatedExpense: Expense) => {
          // Update the local expense with the saved values
          this.expenses[i] = { ...updatedExpense, editable: false };
          console.log('Expense updated successfully:', updatedExpense);

          // Show success notification
          this.snackBar.open('Expense updated successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
        },
        error: (err) => {
          console.error('Failed to update expense:', err);
          this.snackBar.open('Failed to update expense!', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    } else {
      // Fetch categories for the dropdown
      this.expenseCategoryService.getExpenseCategories().subscribe({
        next: (cats: Category[]) => {
          this.expenseCategory = cats ?? [];
        },
        error: (err) => console.error('Failed to load categories', err)
      });
    }

    // Toggle editable state
    expense.editable = !expense.editable;
  }
}
