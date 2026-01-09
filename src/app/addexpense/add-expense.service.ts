import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Expense } from '../../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class AddExpenseService {

  private baseUrl = `${environment.apiBaseUrl}/api/expenses`;

  constructor(private http: HttpClient) { }

  // POST /api/expenses -> returns created ExpenseDTO (backend returns 201 with body)
  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.baseUrl, expense);
  }
}
