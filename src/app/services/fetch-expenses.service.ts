import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Expense } from '../../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class FetchExpensesService {

  private baseUrl = `${environment.apiBaseUrl}/api/expenses`;

  constructor(private http: HttpClient) { }

  // GET /api/expenses
  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.baseUrl);
  }
}
