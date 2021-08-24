import { Component, OnInit } from "@angular/core";
import { PostsService } from "../post/posts.service";

@Component({
    selector: "groupomania-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.posts$.next([]);
    }
}
