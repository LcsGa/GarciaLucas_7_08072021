import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AvatarService {
    constructor(private http: HttpClient) {}

    public getAvatarURL(userId: string): Observable<{ URL: string }> {
        return this.http.get<{ URL: string }>(`/api/users/${userId}/avatar`);
    }
}
