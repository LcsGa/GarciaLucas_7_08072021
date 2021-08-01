import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Observable, of, Subscription, switchMap, tap, timer } from "rxjs";
import { CreateUserDto, SafeUser, SigninUserDto } from "../../../../../libs/dto/src";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public user$ = new BehaviorSubject<SafeUser | null>(null);
    private tokenSubscription!: Subscription;
    public nameValidator: RegExp = /^\S[a-zÀ-ÿ ,.'-]+$/i;
    public passwordValidator: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    constructor(private http: HttpClient, private router: Router) {
        this.tokenSubscription = this.refreshAccessToken();
    }

    public signup(signupForm: CreateUserDto): Observable<CreateUserDto> {
        return this.http.post<CreateUserDto>("/api/auth/signup", signupForm);
    }

    public signin(siginForm: SigninUserDto): Observable<{ user: SafeUser; access_token: string }> {
        return this.http.post<{ user: SafeUser; access_token: string }>("/api/auth/signin", siginForm).pipe(
            tap((res) => {
                this.user$.next(res.user);
                localStorage.setItem(environment.tokenKeyName, res.access_token);
                this.router.navigateByUrl("/home");
                this.tokenSubscription = this.refreshAccessToken();
            })
        );
    }

    public isSignedIn(): boolean {
        return !!this.user$.value && !!localStorage.getItem(environment.tokenKeyName);
    }

    public logout(): void {
        localStorage.removeItem(environment.tokenKeyName);
        this.user$.next(null);
        this.router.navigateByUrl("/auth/signin");
    }

    public refreshAccessToken(): Subscription {
        const refreshDelay = 5 * 60 * 1000; // 5min
        return timer(0, refreshDelay)
            .pipe(
                switchMap(() => {
                    if (localStorage.getItem(environment.tokenKeyName)) {
                        return this.http
                            .get<{ user: SafeUser; access_token: string }>("/api/auth/refresh-access-token")
                            .pipe(
                                tap((session) => {
                                    localStorage.setItem(environment.tokenKeyName, session.access_token);
                                    this.user$.next(session.user);
                                    this.router.url.includes("auth") && this.router.navigateByUrl("/home");
                                })
                            );
                    }
                    this.tokenSubscription.unsubscribe();
                    return of(null);
                })
            )
            .subscribe({
                error: () => {
                    this.logout();
                    this.tokenSubscription.unsubscribe();
                },
            });
    }
}
