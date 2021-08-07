import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateCommentDto, CreatePostDto, Post, UpdateCommentDto, UpdatePostDto } from "@groupomania/dto";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PostsService {
    public posts$ = new BehaviorSubject<Post[]>([]);
    public commentFormShown$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {}

    public fetch(): Observable<Post[]> {
        return this.http.get<Post[]>("/api/posts").pipe(tap((posts) => this.posts$.next(posts.reverse())));
    }

    public create(createPostDto: CreatePostDto): Observable<Post> {
        return this.http.post<Post>("/api/posts", createPostDto);
    }

    public createComment(createCommentDto: CreateCommentDto): Observable<Post> {
        return this.http.post<Post>("/api/posts/comment", createCommentDto);
    }

    public update(updatedPost: UpdatePostDto): Observable<Post> {
        return this.http.patch<Post>("/api/posts", updatedPost);
    }

    public updateLikes(updatedPost: UpdatePostDto): Observable<Post> {
        return this.http.patch<Post>("/api/posts/like", updatedPost);
    }

    public updateComment(updatedComment: UpdateCommentDto): Observable<Post> {
        return this.http.patch<Post>("/api/posts/comment", updatedComment);
    }

    public delete(id: string): Observable<null> {
        return this.http
            .delete<null>("/api/posts/" + id)
            .pipe(tap(() => this.posts$.next(this.posts$.value.filter((post) => post.id != id))));
    }

    public deleteComment(commentId: string): Observable<null> {
        return this.http.delete<null>("/api/posts/comments/" + commentId);
    }

    public isUserTheAuthor(authorId: string, userId: string): boolean {
        return authorId == userId;
    }
}
