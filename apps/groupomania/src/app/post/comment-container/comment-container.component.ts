import { Component, Input, OnInit } from "@angular/core";
import { Post } from "@groupomania/dto";

@Component({
    selector: "groupomania-comment-container",
    templateUrl: "./comment-container.component.html",
    styleUrls: ["./comment-container.component.scss"],
})
export class CommentContainerComponent implements OnInit {
    @Input() public post!: Post;
    @Input() public commentFormShown!: boolean;

    constructor() {}

    ngOnInit(): void {}
}
