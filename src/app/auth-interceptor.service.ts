import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Interceptor works: ' + JSON.stringify(req));
    const mofisRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
    return next.handle(mofisRequest).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Is response');
          console.log('Body: ' + event.body);
        }
      })
    );
  }

}
