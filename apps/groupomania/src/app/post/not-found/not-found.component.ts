import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-not-found",
    templateUrl: "./not-found.component.html",
    styleUrls: ["./not-found.component.scss"],
})
export class NotFoundComponent implements OnInit {
    public posts$ = this.postsService.posts$;

    constructor(private postsService: PostsService) {}

    ngOnInit(): void {}
}
