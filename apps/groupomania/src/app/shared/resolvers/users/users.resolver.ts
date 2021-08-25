import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { SafeUser } from "@groupomania/dto";
import { Observable } from "rxjs";
import { UsersService } from "../../../users/users.service";

@Injectable({
    providedIn: "root",
})
export class UsersResolver implements Resolve<SafeUser[]> {
    constructor(private usersService: UsersService) {}

    resolve(): Observable<SafeUser[]> {
        return this.usersService.findAll();
    }
}
