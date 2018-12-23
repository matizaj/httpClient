import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';


export class AuthInterceptor implements HttpInterceptor {
    private header = new HttpHeaders().set('Authorizationx', 'dupa');
    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        const reqClone = req.clone({headers: this.header});
        return next.handle(reqClone);
    }

}
