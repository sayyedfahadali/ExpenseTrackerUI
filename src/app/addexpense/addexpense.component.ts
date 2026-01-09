import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { AddExpenseService } from './add-expense.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { get } from 'http';

@Component({
  standalone: true,
  selector: 'app-addexpense',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './addexpense.component.html',
  styleUrl: './addexpense.component.css'
})
export class AddexpenseComponent implements OnInit {

  expenseCategory: Category[] | undefined;
  expenseForm!: FormGroup<any>;
  submitting = false;

  constructor(private expenseCategoryService: ExpenseCategoryService, 
              private addExpenseService: AddExpenseService, 
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.expenseForm = this.formBuilder.group({
      // Your form controls with initial values and validation
      category: ['Other', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      date: [new Date(), Validators.required],
      description: [''],
    });

    this.getCategories();
  }

  getCategories(){
    this.expenseCategoryService.getExpenseCategories().subscribe({
      next: (cats: Category[]) => {
        // Ensure that the response is an array and handle null/undefined
        const responseCategories = cats ?? [];
    
        // Assign the array of Category objects directly to the component property
        this.expenseCategory = responseCategories;
      },
      error: (err) => console.error('Failed to load categories', err)
    });
  }

  onSubmit() {
     if (this.expenseForm?.valid) {
      // Set submitting to true when the request starts
      this.submitting = true;
      this.addExpenseService.createExpense(this.expenseForm?.value).subscribe({
        next: () => {
          console.log('Expense added successfully');
          this.snackBar.open('Expense added successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.expenseForm.reset();
          this.submitting = false;
        },
        error: (err: any) => {
          console.error('Failed to add expense', err);
          this.snackBar.open('Error Occured!', 'Close', {
            duration: 3000,
            panelClass: ['failure-snackbar']
          });
          this.submitting = false;
        }
      });
    }
  }

}
