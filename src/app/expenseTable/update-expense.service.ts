import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../../models/expense.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateExpenseService {


  private baseUrl = `${environment.apiBaseUrl}/api/expenses`;
  constructor(private http: HttpClient) { }

  updateExpense(expense: Expense): Observable<Expense> {
    const url = `${this.baseUrl}/${(expense as any).id}`;
    return this.http.put<Expense>(url, expense);
  }
}
