import { Component, OnInit } from "@angular/core";
import { Post } from "@groupomania/dto";
import { PostsService } from "./posts.service";

@Component({
    selector: "groupomania-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    public posts!: Post[];

    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.fetch().subscribe((posts) => (this.posts = posts));
    }
}
