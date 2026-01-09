import { Injectable } from '@angular/core';
// Provide imports for the service to utilize it to get springBoot API calls
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {

  private expenseCategoriesAPIURL = `${environment.apiBaseUrl}/api/expenses/categories`; // use env

  // Inject the required dependencies using constructor injection
  constructor(private http: HttpClient) {}

  // Define the method to get expense categories from the backend
  getExpenseCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.expenseCategoriesAPIURL);
  }

}
