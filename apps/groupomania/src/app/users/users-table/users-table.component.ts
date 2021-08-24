import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SafeUser } from "@groupomania/dto";
import { Table } from "primeng/table";
import { PostsService } from "../../post/posts.service";
import { UsersService } from "../users.service";

@Component({
    selector: "groupomania-users-table",
    templateUrl: "./users-table.component.html",
    styleUrls: ["./users-table.component.scss"],
})
export class UsersTableComponent implements OnInit {
    public users!: SafeUser[];

    constructor(private usersService: UsersService, private router: Router) {}

    ngOnInit(): void {
        this.usersService.findAll().subscribe((users) => (this.users = users));
    }

    public searchUsers(event: Event, userDT: Table): void {
        userDT.filterGlobal((event.target as HTMLInputElement).value, "contains");
    }

    public loadUserPosts(userId: string): void {
        this.router.navigate(["users", userId]);
    }
}
