import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

export class SpyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        console.log('zapytanie wykonano dnia: ' + new Date());
        console.log('zapytanie na adres: ' + req.url);
        return next.handle(req);
    }

}
