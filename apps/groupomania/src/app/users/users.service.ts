import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SafeUser } from "@groupomania/dto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UsersService {
    constructor(private http: HttpClient) {}

    public findAll(): Observable<SafeUser[]> {
        return this.http.get<SafeUser[]>("/api/users");
    }

    public findById(id: string): Observable<SafeUser> {
        return this.http.get<SafeUser>("/api/users/" + id);
    }
}
