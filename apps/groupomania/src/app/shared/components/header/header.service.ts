import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../../../auth/auth.service";

@Injectable({
    providedIn: "root",
})
export class HeaderService {
    public items$ = new BehaviorSubject<MenuItem[]>([]);

    constructor(private authService: AuthService) {}

    public initMenuBar(): void {
        this.items$.next([
            {
                label: "Accueil",
                icon: "pi pi-home",
                routerLink: "/home",
            },
            {
                label: "Profil",
                icon: "pi pi-user",
                routerLink: "/profil",
            },
            {
                label: "Déconnexion",
                icon: "pi pi-sign-out",
                command: () => this.authService.logout(),
            },
        ]);
    }

    public removeMenuBar(): void {
        this.items$.next([]);
    }
}
