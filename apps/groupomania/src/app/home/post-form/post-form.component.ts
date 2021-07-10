import { Component, OnInit } from "@angular/core";
import { SafeUrl, DomSanitizer } from "@angular/platform-browser";
import { FileUpload } from "primeng/fileupload";

@Component({
    selector: "groupomania-post-form",
    templateUrl: "./post-form.component.html",
    styleUrls: ["./post-form.component.scss"],
})
export class PostFormComponent implements OnInit {
    public fileUpload!: FileUpload;
    public imageBlob!: SafeUrl | null;

    constructor(private sanitize: DomSanitizer) {}

    ngOnInit(): void {}

    public appendImage(image: { files: File[] }, fileUpload: FileUpload): void {
        this.fileUpload = fileUpload;
        this.imageBlob = this.sanitize.bypassSecurityTrustUrl(window.URL.createObjectURL(image.files[0]));
    }

    public removeImage(): void {
        this.fileUpload.clear();
        this.imageBlob = null;
    }
}
