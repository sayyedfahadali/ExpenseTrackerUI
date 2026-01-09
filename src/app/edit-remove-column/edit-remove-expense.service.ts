import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DeleteExpenseService {

  private baseUrl = `${environment.apiBaseUrl}/api/expenses`;

  constructor(private http: HttpClient) {}

  // DELETE /api/expenses/{id}
  deleteExpense(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
