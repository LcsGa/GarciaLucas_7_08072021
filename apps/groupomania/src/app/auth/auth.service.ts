import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CreateUserDto, User } from "../../../../../libs/dto/src";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public nameValidator: RegExp = /^\S[a-zÀ-ÿ ,.'-]+$/i;
    public passwordValidator: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    constructor(private http: HttpClient, private router: Router) {}

    public signin(siginForm: FormGroup): Observable<any> {
        return this.http.post<any>("/api/auth/signin", siginForm);
    }

    public signup(signupForm: FormGroup): Observable<CreateUserDto> {
        return this.http.post<CreateUserDto>("/api/auth/signup", signupForm);
    }

    public logout(): void {
        localStorage.removeItem("jwt");
        this.router.navigateByUrl("/auth/signin"); //Todo : redirect on "/" with an handler that redirect to /auth/signin if there is no user
    }
}
