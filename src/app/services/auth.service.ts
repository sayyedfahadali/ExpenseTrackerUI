import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
  console.log('Calling /auth/login');

  return this.http.post(
    this.loginUrl,
    { username, password },
    {
      responseType: 'text' as const  
    }
  ).pipe(
    tap(token => {
      //console.log('JWT received from backend:', token);
      localStorage.setItem('jwt', token);
    })
  );
}


  private platformId = inject(PLATFORM_ID);

  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false; // 👈 SSR safe
    }

    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    return localStorage.getItem('token');
  }

  logout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('jwt');
      console.log('User logged out, token removed from localStorage');
      console.log('Current localStorage:', localStorage);
  }
}
