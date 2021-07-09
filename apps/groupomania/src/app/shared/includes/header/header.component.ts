import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: "groupomania-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    public items!: MenuItem[];

    constructor() {}

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
                routerLink: "/auth/signin",
            },
        ];
    }
}
