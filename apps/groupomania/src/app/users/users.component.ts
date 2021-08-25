import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SafeUser } from "@groupomania/dto";

@Component({
    selector: "groupomania-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    public users!: SafeUser[];

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.subscribe((data) => (this.users = data.users));
    }
}
