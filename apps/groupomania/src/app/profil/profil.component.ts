import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { FileUpload } from "primeng/fileupload";

@Component({
    selector: "groupomania-profil",
    templateUrl: "./profil.component.html",
    styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent implements OnInit {
    private fileUpload!: FileUpload;
    public imageBlob!: SafeUrl;

    constructor(private sanitize: DomSanitizer) {}

    ngOnInit(): void {}

    public appendImage(image: { files: File[] }, fileUpload: FileUpload): void {
        this.fileUpload = fileUpload;
        this.imageBlob = this.sanitize.bypassSecurityTrustUrl(window.URL.createObjectURL(image.files[0]));
        console.log(this.imageBlob);
    }
}
