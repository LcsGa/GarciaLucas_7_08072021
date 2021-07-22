import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AuthService } from "../../../auth/auth.service";

@Component({
    selector: "groupomania-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    public items!: MenuItem[];

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.items = [
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
        ];
    }
}
