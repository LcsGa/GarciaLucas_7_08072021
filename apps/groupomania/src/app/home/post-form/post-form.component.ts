import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-post-form",
    templateUrl: "./post-form.component.html",
    styleUrls: ["./post-form.component.scss"],
})
export class PostFormComponent implements OnInit {
    public postContent!: FormControl;

    constructor(private fb: FormBuilder, private postsService: PostsService, private authService: AuthService) {}

    ngOnInit(): void {
        this.postContent = this.fb.control("", Validators.required);
    }

    public createPost(): void {
        this.postsService
            .create({ author: this.authService.user$.value!, content: this.postContent.value })
            .subscribe(() => this.postsService.fetch().subscribe());
        this.postContent.reset();
    }
}
