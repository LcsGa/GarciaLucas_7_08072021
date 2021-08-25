import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SafeUser } from "@groupomania/dto";
import { Table } from "primeng/table";

@Component({
    selector: "groupomania-users-table",
    templateUrl: "./users-table.component.html",
    styleUrls: ["./users-table.component.scss"],
})
export class UsersTableComponent implements OnInit {
    @Input() public users!: SafeUser[];

    constructor(private router: Router) {}

    ngOnInit(): void {}

    public searchUsers(event: Event, userDT: Table): void {
        userDT.filterGlobal((event.target as HTMLInputElement).value, "contains");
    }

    public loadUserPosts(userId: string): void {
        this.router.navigate(["users", userId]);
    }
}
