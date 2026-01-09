import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/auth/register';

  constructor(private http: HttpClient) {}

  createUser(username: string, password: string, role: string = 'USER') {
    return this.http.post(
      this.apiUrl,
      { username, password, role },
      { responseType: 'text' }
    );
  }
}
