import { Component, OnInit } from "@angular/core";

@Component({
    selector: "groupomania-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    test() {
        console.log(history.state.data);
    }
}
