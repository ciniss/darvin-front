import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseURL } from '../env';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const jwt = this.authService.jwt;
        const isApiUrl = request.url.startsWith(baseURL);
        if (jwt) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${jwt}` }
            });
        }

        return next.handle(request);
    }
}
