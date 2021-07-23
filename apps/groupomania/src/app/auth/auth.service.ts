import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { CreateUserDto, SigninUserDto, User } from "../../../../../libs/dto/src";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public user$ = new BehaviorSubject<User | null>(null);
    public nameValidator: RegExp = /^\S[a-zÀ-ÿ ,.'-]+$/i;
    public passwordValidator: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    constructor(private http: HttpClient, private router: Router) {}

    public signin(siginForm: SigninUserDto): Observable<any> {
        return this.http.post<any>("/api/auth/signin", siginForm).pipe(tap((user) => this.user$.next(user)));
    }

    public signup(signupForm: CreateUserDto): Observable<CreateUserDto> {
        return this.http.post<CreateUserDto>("/api/auth/signup", signupForm);
    }

    public logout(): void {
        localStorage.removeItem("jwt");
        this.user$.next(null);
        this.router.navigateByUrl("/auth/signin");
    }

    public storeToken(token: string): void {
        localStorage.setItem("jwt", token);
        this.router.navigateByUrl("/home");
    }

    public removeToken(): void {
        localStorage.removeItem("jwt");
    }

    public isSignedIn(): boolean {
        return !!this.user$.value && !!localStorage.getItem("jwt");
    }
}
