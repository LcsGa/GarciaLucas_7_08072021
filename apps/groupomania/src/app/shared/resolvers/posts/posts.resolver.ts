import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Post } from "@groupomania/dto";
import { Observable } from "rxjs";
import { PostsService } from "../../../post/posts.service";

@Injectable({
    providedIn: "root",
})
export class PostsResolver implements Resolve<Post[]> {
    constructor(private postsService: PostsService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
        this.postsService.authorId$.next(route.paramMap.get("userId") || "");
        return this.postsService.findAll();
    }
}
