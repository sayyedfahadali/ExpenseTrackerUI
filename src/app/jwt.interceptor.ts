import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.includes('/auth/login') || req.url.includes('/auth/register')) {
    return next(req); // 🚫 NO TOKEN
  }
  const token = localStorage.getItem('jwt');

  //console.log('JWT from storage:', token); // DEBUG – remove later

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
