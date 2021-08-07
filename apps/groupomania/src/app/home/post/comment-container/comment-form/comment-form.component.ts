import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Post } from "@groupomania/dto";
import { AuthService } from "apps/groupomania/src/app/auth/auth.service";
import { PostsService } from "../../../posts.service";

@Component({
    selector: "groupomania-comment-form",
    templateUrl: "./comment-form.component.html",
    styleUrls: ["./comment-form.component.scss"],
})
export class CommentFormComponent implements OnInit {
    @Input() public post!: Post;
    public commentMessage!: FormControl;

    constructor(private postsService: PostsService, private authService: AuthService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.commentMessage = this.fb.control("", Validators.required);
    }

    public sendComment(): void {
        this.postsService
            .createComment({
                author: this.authService.user$.value!,
                post: this.post,
                message: this.commentMessage.value,
            })
            .subscribe(() => {
                this.postsService.fetch().subscribe();
                this.commentMessage.reset();
            });
    }
}
