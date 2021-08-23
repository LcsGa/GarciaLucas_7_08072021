import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Post, SafeUser } from "@groupomania/dto";
import { AuthService } from "../../auth/auth.service";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-post-toolbar",
    templateUrl: "./post-toolbar.component.html",
    styleUrls: ["./post-toolbar.component.scss"],
})
export class PostToolbarComponent implements OnInit {
    @Input() public post!: Post;
    @Output() public registerShowCommentForm = new EventEmitter();
    @Output() public registerShowComments = new EventEmitter();
    public isliked: boolean = false;
    public likes: SafeUser[] = [];

    constructor(private authService: AuthService, private postsService: PostsService) {}

    ngOnInit(): void {
        this.initLikes();
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

        this.postsService
            .updateLikes({ ...this.post, likes: this.likes })
            .subscribe(() => this.postsService.findAll().subscribe());
    }

    public showCommentForm(): void {
        this.registerShowCommentForm.emit();
    }
}
