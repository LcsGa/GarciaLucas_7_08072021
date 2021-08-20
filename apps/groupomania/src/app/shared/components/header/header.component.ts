import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../auth/auth.service";
import { HeaderService } from "./header.service";

@Component({
    selector: "groupomania-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    public user$ = this.authService.user$;
    public items$ = this.headerService.items$;

    constructor(private headerService: HeaderService, private authService: AuthService) {}

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            if (user) {
                this.headerService.initMenuBar();
            } else {
                this.headerService.removeMenuBar();
            }
        });
    }
}
