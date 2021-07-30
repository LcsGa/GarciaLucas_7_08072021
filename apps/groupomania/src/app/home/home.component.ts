import { Component, OnInit } from "@angular/core";
import { Post } from "@groupomania/dto";
import { Observable } from "rxjs";
import { PostsService } from "./posts.service";

@Component({
    selector: "groupomania-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    public posts$: Observable<Post[]> = this.postsService.posts$;

    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.fetch().subscribe();
    }
}
