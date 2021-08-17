import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Comment } from "@groupomania/dto";
import { AuthService } from "apps/groupomania/src/app/auth/auth.service";
import { ConfirmationService, MenuItem } from "primeng/api";
import { PostsService } from "../../../posts.service";

@Component({
    selector: "groupomania-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"],
})
export class CommentComponent implements OnInit {
    @Input() public postId!: string;
    @Input() public comment!: Comment;
    @Input() public last!: boolean;
    public commentMessage!: FormControl;
    public items!: MenuItem[];
    public inModification = false;

    constructor(
        private postsService: PostsService,
        private authService: AuthService,
        private fb: FormBuilder,
        private confirmService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.items = [
            {
                label: "Modifier",
                icon: "pi pi-pencil",
                visible: this.postsService.isUserTheAuthor(this.comment.author.id, this.authService.user$.value!.id),
                command: () => this.toggleModificationMode(),
            },
            {
                label: "Supprimer",
                icon: "pi pi-trash",
                visible: this.postsService.isUserTheAuthor(this.comment.author.id, this.authService.user$.value!.id),
                command: () =>
                    this.confirmService.confirm({
                        header: "Suppression du commentaire",
                        message: "Voulez-vous confirmer la suppression de votre commentaire ?",
                        accept: () =>
                            this.postsService
                                .deleteComment(this.comment.id)
                                .subscribe(() => this.postsService.fetch().subscribe()),
                    }),
            },
            {
                label: "Signaler",
                icon: "pi pi-shield",
                visible: !this.postsService.isUserTheAuthor(this.comment.author.id, this.authService.user$.value!.id),
            },
        ];

        this.commentMessage = this.fb.control(this.comment.message, Validators.required);
    }

    public toggleModificationMode(): void {
        this.inModification = !this.inModification;
    }

    public saveModifications(): void {
        this.postsService
            .updateComment({ id: this.comment.id, message: this.commentMessage.value, postId: this.postId })
            .subscribe(() => this.postsService.fetch().subscribe());
    }

    public cancelModifications(): void {
        this.commentMessage.setValue(this.comment.message);
        this.toggleModificationMode();
    }
}
