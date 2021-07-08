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
    public isAuthActiveRoute = /auth/.test(this.router.url);

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.items = [
            {
                label: "Accueil",
                routerLink: "/",
                visible: !this.isAuthActiveRoute,
            },
            {
                label: "Se déconnecter",
                visible: !this.isAuthActiveRoute,
            },
        ];
    }
}
