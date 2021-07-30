import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreatePostDto, Post, UpdatePostDto } from "@groupomania/dto";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PostsService {
    public posts$ = new BehaviorSubject<Post[]>([]);

    constructor(private http: HttpClient) {}

    public fetch(): Observable<Post[]> {
        return this.http.get<Post[]>("/api/posts").pipe(tap((posts) => this.posts$.next(posts.reverse())));
    }

    public create(createPostDto: CreatePostDto): Observable<Post> {
        return this.http.post<Post>("/api/posts", createPostDto);
    }

    public updateLikes(updatedPost: UpdatePostDto): Observable<Post> {
        return this.http.patch<Post>("/api/posts/like", updatedPost);
    }

    public delete(id: string): Observable<null> {
        return this.http
            .delete<null>("/api/posts/" + id)
            .pipe(tap(() => this.posts$.next(this.posts$.value.filter((post) => post.id != id))));
    }
}
