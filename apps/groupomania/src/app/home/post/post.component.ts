import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: "groupomania-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
    public items!: MenuItem[];
    public liked: boolean = false;
    public doComment: boolean = false;
    public likes: string[] = [];

    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: "Modifier",
                icon: "pi pi-pencil",
            },
            {
                label: "Supprimer",
                icon: "pi pi-trash",
            },
        ];
    }

    public like(): void {
        this.liked = !this.liked;

        if (this.liked) {
            this.likes.push("me");
        } else {
            this.likes = this.likes.filter((like) => like != "me");
        }
    }

    public comment(commentTextArea: HTMLTextAreaElement): void {
        this.doComment = true;
        setTimeout(() => commentTextArea.focus(), 0);
    }
}
