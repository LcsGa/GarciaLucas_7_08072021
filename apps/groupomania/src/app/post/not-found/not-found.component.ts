import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-not-found",
    templateUrl: "./not-found.component.html",
    styleUrls: ["./not-found.component.scss"],
})
export class NotFoundComponent implements OnInit, OnDestroy {
    public posts$ = this.postsService.posts$;
    private authorFullName = "";
    public header!: string;
    private subscription!: Subscription;

    constructor(private postsService: PostsService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const header = "Aucun poste n'a été trouvé";
        this.subscription = this.postsService.authorId$.subscribe(() => {
            this.route.queryParams.subscribe((queryParams) => (this.authorFullName = queryParams.fullname));
            this.header = this.authorFullName ? `${header} pour ${this.authorFullName}` : header;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
