import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: "groupomania-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
    public items!: MenuItem[];
    public liked: boolean = false;

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
}
