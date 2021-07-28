import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from "@groupomania/dto";
import { MenuItem } from "primeng/api";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
    public commentForm!: FormGroup;
    public items!: MenuItem[];
    public liked: boolean = false;
    public likes: string[] = [];
    public commentFormShown: boolean = false;
    public comments: string[] = [];
    @Input() public post!: Post;

    constructor(private fb: FormBuilder, private postsService: PostsService) {}

    ngOnInit(): void {
        this.commentForm = this.fb.group({
            comment: ["", Validators.required],
        });

        this.items = [
            {
                label: "Modifier",
                icon: "pi pi-pencil",
            },
            {
                label: "Supprimer",
                icon: "pi pi-trash",
                command: () => this.postsService.delete(this.post.id).subscribe(),
            },
        ];

        console.log(this.post);
    }

    public like(): void {
        this.liked = !this.liked;

        if (this.liked) {
            this.likes.push("me");
        } else {
            this.likes = this.likes.filter((like) => like != "me");
        }
    }

    public showCommentForm(commentTextArea: HTMLTextAreaElement): void {
        this.commentFormShown = true;
        setTimeout(() => commentTextArea.focus(), 0);
    }

    public postComment(): void {
        this.comments.push(this.commentForm.controls.comment.value);
        this.commentForm.reset();
    }
}
