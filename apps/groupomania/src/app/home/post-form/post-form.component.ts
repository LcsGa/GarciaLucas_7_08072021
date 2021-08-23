import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { PostsService } from "../../post/posts.service";

@Component({
    selector: "groupomania-post-form",
    templateUrl: "./post-form.component.html",
    styleUrls: ["./post-form.component.scss"],
})
export class PostFormComponent implements OnInit {
    public postForm!: FormGroup;

    constructor(private fb: FormBuilder, private postsService: PostsService, private authService: AuthService) {}

    ngOnInit(): void {
        this.postForm = this.fb.group({ content: ["", Validators.required] });
    }

    public createPost(): void {
        this.postsService
            .create({ author: this.authService.user$.value!, content: this.postForm.get("content")!.value })
            .subscribe(() => this.postsService.findAll().subscribe());
        this.postForm.reset();
    }
}
