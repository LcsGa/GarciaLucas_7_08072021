import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("jwt");

        console.debug("in interceptor");
        if (token) {
            console.debug(token);
            const jwtRequeset = request.clone();
            jwtRequeset.headers.set("Authorization", "Bearer " + token);
            return next.handle(jwtRequeset);
        }
        return next.handle(request);
    }
}
