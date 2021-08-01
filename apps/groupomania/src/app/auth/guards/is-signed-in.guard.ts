import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: "root",
})
export class IsSignedInGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isSignedIn = this.authService.isSignedIn();

        if (!isSignedIn) {
            this.router.navigateByUrl("/auth/signin");
        } else if (state.url.includes("auth")) {
            this.router.navigateByUrl("/home");
        }

        return isSignedIn;
    }
}
