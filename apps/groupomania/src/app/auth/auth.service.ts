import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { UserDto } from "../../../../../libs/dto/src";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public nameValidator: RegExp = /^\S[a-zÀ-ÿ ,.'-]+$/i;
    public passwordValidator: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    constructor(private http: HttpClient) {}

    public signin(siginForm: FormGroup): void {
        console.log(siginForm);
    }

    public signup(signupForm: FormGroup): Observable<UserDto> {
        return this.http.post<UserDto>("/api/auth/signup", signupForm);
    }

    public logout(): void {}
}
