import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Post, SafeUser } from "@groupomania/dto";
import { MenuItem } from "primeng/api";
import { AuthService } from "../../auth/auth.service";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
    public items!: MenuItem[];
    @Input() public post!: Post;
    public isliked: boolean = false;
    public likes: SafeUser[] = [];
    public commentMessage!: FormControl;
    public displayComments: boolean = false;
    public commentFormShown: boolean = false;

    constructor(private authService: AuthService, private fb: FormBuilder, private postsService: PostsService) {}

    ngOnInit(): void {
        this.initLikes();

        this.commentMessage = this.fb.control("", Validators.required);

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
    }

    public initLikes(): void {
        this.likes = this.post.likes || [];
        this.isliked = !!this.likes.find((user) => user.id == this.authService.user$.value!.id);
    }

    public like(): void {
        const connectedUser = this.authService.user$.value!;
        this.isliked = !this.isliked;

        if (this.isliked) {
            this.likes.push(connectedUser);
        } else {
            this.likes = this.likes.filter((user) => user.id != connectedUser.id);
        }

        this.postsService.updateLikes({ ...this.post, likes: this.likes }).subscribe();
    }

    public showComments(): void {}

    public showCommentForm(commentTextArea: HTMLTextAreaElement): void {
        this.commentFormShown = true;
        setTimeout(() => commentTextArea.focus(), 0); // Fix display bug where the input hasn't it's normal height
    }

    public sendComment(): void {
        this.post.comments.push();
        this.commentMessage.reset();
    }
}
