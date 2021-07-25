import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("jwt");

        if (token) {
            const transformedRequest = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + token),
            });
            return next.handle(transformedRequest);
        }
        return next.handle(request);
    }
}
