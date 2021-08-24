import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { PostsService } from "../../post/posts.service";

@Component({
    selector: "groupomania-user-posts",
    templateUrl: "./user-posts.component.html",
    styleUrls: ["./user-posts.component.scss"],
})
export class UserPostsComponent implements OnInit, OnDestroy {
    public posts$ = this.postsService.posts$;
    public authorSubscription!: Subscription;

    constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap) => this.postsService.authorId$.next(paramMap.get("userId")!));
        this.authorSubscription = this.postsService.authorId$.subscribe(() => this.postsService.findAll().subscribe());
    }

    ngOnDestroy(): void {
        this.authorSubscription.unsubscribe();
    }
}
