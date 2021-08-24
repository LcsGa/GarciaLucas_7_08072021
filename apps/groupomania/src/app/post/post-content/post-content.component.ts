import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Post } from "@groupomania/dto";
import { ConfirmationService, MenuItem } from "primeng/api";
import { AuthService } from "../../auth/auth.service";
import { PostsService } from "../posts.service";

@Component({
    selector: "groupomania-post-content",
    templateUrl: "./post-content.component.html",
    styleUrls: ["./post-content.component.scss"],
})
export class PostContentComponent implements OnInit {
    @Input() public post!: Post;
    public inModification = false;
    public postContent!: FormControl;
    public items!: MenuItem[];
    public displayMenu!: boolean;

    constructor(
        private authService: AuthService,
        private postsService: PostsService,
        private fb: FormBuilder,
        private confirmService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.displayMenu = this.authService.isAuthorOrAdmin(this.post.author.id);

        this.items = [
            {
                label: "Modifier",
                icon: "pi pi-pencil",
                visible: this.postsService.canModify(this.post.author.id, this.authService.user$.value!),
                command: () => this.toggleModificationMode(),
            },
            {
                label: "Supprimer",
                icon: "pi pi-trash",
                visible: this.postsService.canDelete(this.post.author.id, this.authService.user$.value!),
                command: () =>
                    this.confirmService.confirm({
                        header: "Suppression du post",
                        message: "Voulez-vous confirmer la suppression de votre post ?",
                        accept: () => this.postsService.delete(this.post.id).subscribe(),
                    }),
            },
        ];

        this.postContent = this.fb.control(this.post.content, Validators.required);
    }

    public toggleModificationMode(): void {
        this.inModification = !this.inModification;
    }

    public cancelModifications(): void {
        this.postContent.setValue(this.post.content);
        this.toggleModificationMode();
    }

    public saveModifications(): void {
        this.postsService
            .update({ id: this.post.id, content: this.postContent.value })
            .subscribe(() => this.toggleModificationMode());
    }
}
