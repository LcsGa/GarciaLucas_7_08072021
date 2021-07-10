import { Component, OnInit } from "@angular/core";

@Component({
    selector: "groupomania-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    public numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor() {}

    ngOnInit(): void {}
}
