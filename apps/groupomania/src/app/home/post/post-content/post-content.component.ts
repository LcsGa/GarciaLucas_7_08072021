import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Post } from "@groupomania/dto";
import { MenuItem } from "primeng/api";
import { AuthService } from "../../../auth/auth.service";
import { PostsService } from "../../posts.service";

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

    constructor(private authService: AuthService, private postsService: PostsService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.items = [
            {
                label: "Modifier",
                icon: "pi pi-pencil",
                visible: this.postsService.isUserTheAuthor(this.post.author.id, this.authService.user$.value!.id),
                command: () => this.toggleModificationMode(),
            },
            {
                label: "Supprimer",
                icon: "pi pi-trash",
                visible: this.postsService.isUserTheAuthor(this.post.author.id, this.authService.user$.value!.id),
                command: () => this.postsService.delete(this.post.id).subscribe(),
            },
            {
                label: "Signaler",
                icon: "pi pi-shield",
                visible: !this.postsService.isUserTheAuthor(this.post.author.id, this.authService.user$.value!.id),
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
        this.postsService.update({ id: this.post.id, content: this.postContent.value }).subscribe((res) => {
            this.postsService.fetch().subscribe();
        });
    }
}
