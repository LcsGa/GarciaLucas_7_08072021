import { Component, Input, OnInit } from "@angular/core";
import { Post } from "@groupomania/dto";

@Component({
    selector: "groupomania-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
    @Input() public post!: Post;
    public commentFormShown = false;
    public inModification = false;

    constructor() {}

    ngOnInit(): void {}
}
