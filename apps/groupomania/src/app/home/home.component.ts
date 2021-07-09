import { Component, OnInit } from "@angular/core";
import { FileUpload } from "primeng/fileupload";

@Component({
    selector: "groupomania-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    public image!: FileUpload | null;

    constructor() {}

    ngOnInit(): void {}

    public appendImage(image: FileUpload): void {
        this.image = image;
        console.log(window.URL.createObjectURL(this.image.files[0]));
    }

    public clearImage(): void {
        this.image!.clear();
        this.image = null;
    }
}
