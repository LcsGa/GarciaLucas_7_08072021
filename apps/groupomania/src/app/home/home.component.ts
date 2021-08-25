import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "@groupomania/dto";
import { BehaviorSubject } from "rxjs";
import { PostsService } from "../post/posts.service";

@Component({
    selector: "groupomania-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    public posts$: BehaviorSubject<Post[]> = this.postsService.posts$;

    constructor(private postsService: PostsService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.subscribe((data) => this.postsService.posts$.next(data.posts));
    }
}
