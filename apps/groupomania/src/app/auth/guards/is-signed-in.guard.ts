import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: "root",
})
export class IsSignedInGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(): boolean {
        const isSignedIn = this.authService.isSignedIn();

        if (!isSignedIn) {
            this.router.navigateByUrl("/auth/signin");
        }

        return isSignedIn;
    }
}
