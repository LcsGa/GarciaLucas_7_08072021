import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Post } from "@groupomania/dto";
import { AuthService } from "apps/groupomania/src/app/auth/auth.service";
import { PostsService } from "../../posts.service";

@Component({
    selector: "groupomania-comment-form",
    templateUrl: "./comment-form.component.html",
    styleUrls: ["./comment-form.component.scss"],
})
export class CommentFormComponent implements OnInit {
    @Input() public post!: Post;
    public commentForm!: FormGroup;

    constructor(private postsService: PostsService, private authService: AuthService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.commentForm = this.fb.group({ message: ["", Validators.required] });
    }

    public sendComment(): void {
        this.postsService
            .createComment({
                author: this.authService.user$.value!,
                post: this.post,
                message: this.commentForm.get("message")!.value,
            })
            .subscribe(() => {
                this.postsService.findAll().subscribe();
                this.commentForm.reset();
            });
    }
}
