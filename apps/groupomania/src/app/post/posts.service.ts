import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateCommentDto, CreatePostDto, Post, SafeUser, UpdateCommentDto, UpdatePostDto } from "@groupomania/dto";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PostsService {
    public posts$ = new BehaviorSubject<Post[]>([]);
    public commentFormShown$ = new BehaviorSubject<boolean>(false);
    public authorId$ = new BehaviorSubject<string>("");

    constructor(private http: HttpClient) {}

    public findAll(): Observable<Post[]> {
        return this.http
            .get<Post[]>("/api/posts/" + this.authorId$.value!)
            .pipe(tap((posts) => this.posts$.next(posts.reverse())));
    }

    public create(createPostDto: CreatePostDto): Observable<Post> {
        return this.http
            .post<Post>("/api/posts", createPostDto)
            .pipe(tap((post) => this.posts$.next([{ ...post, comments: [] }, ...this.posts$.value])));
    }

    public createComment(createCommentDto: CreateCommentDto): Observable<Post> {
        return this.http
            .post<Post>("/api/posts/comment", createCommentDto)
            .pipe(tap((updatedPost) => this.updatePosts$(updatedPost)));
    }

    public update(postUpdated: UpdatePostDto): Observable<Post> {
        return this.http.patch<Post>("/api/posts", postUpdated).pipe(
            tap((updatedPost) =>
                this.posts$.next(
                    this.posts$.value.map((post) => {
                        if (post.id == updatedPost.id) post.content = updatedPost.content;
                        return post;
                    })
                )
            )
        );
    }

    public updateLikes(likesUpdatedPost: UpdatePostDto): Observable<Post> {
        return this.http
            .patch<Post>("/api/posts/like", likesUpdatedPost)
            .pipe(tap((updatedPost) => this.updatePosts$(updatedPost)));
    }

    public updateComment(updatedComment: UpdateCommentDto): Observable<Post> {
        return this.http
            .patch<Post>("/api/posts/comment", updatedComment)
            .pipe(tap((updatedPost) => this.updatePosts$(updatedPost)));
    }

    public delete(id: string): Observable<null> {
        return this.http
            .delete<null>(`/api/posts/${id}?type=post`)
            .pipe(tap(() => this.posts$.next(this.posts$.value.filter((post) => post.id != id))));
    }

    public deleteComment(postId: string, commentId: string): Observable<null> {
        return this.http.delete<null>(`/api/posts/comments/${commentId}?type=comment`).pipe(
            tap(() =>
                this.posts$.next(
                    this.posts$.value.map((post) => {
                        if (post.id == postId) {
                            post.comments = post.comments.filter((comment) => comment.id != commentId);
                        }
                        return post;
                    })
                )
            )
        );
    }

    public updatePosts$(updatedPost: Post): void {
        this.posts$.next(this.posts$.value.map((post) => (post.id == updatedPost.id ? updatedPost : post)));
    }

    public canModify(authorId: string, user: SafeUser): boolean {
        return authorId == user.id;
    }

    public canDelete(authorId: string, user: SafeUser): boolean {
        return this.canModify(authorId, user) || user.admin;
    }
}
