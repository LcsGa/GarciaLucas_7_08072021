import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreatePostDto, Post } from "@groupomania/dto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PostsService {
    constructor(private http: HttpClient) {}

    public fetch(): Observable<Post[]> {
        return this.http.get<Post[]>("/api/posts");
    }

    public create(createPostDto: CreatePostDto): Observable<Post> {
        return this.http.post<Post>("/api/posts", createPostDto);
    }

    public delete(id: string): Observable<null> {
        return this.http.delete<null>("/api/posts/" + id);
    }
}
