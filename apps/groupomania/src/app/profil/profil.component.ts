import { Component, OnInit } from "@angular/core";

@Component({
    selector: "groupomania-profil",
    templateUrl: "./profil.component.html",
    styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent implements OnInit {
    public avatarUploaded = false;

    constructor() {}

    ngOnInit(): void {}

    public reloadPage(): void {
        this.avatarUploaded = true;
        setTimeout(() => location.reload(), 1000); // fix: let enough time to restart the server in dev mode, due to hot reloading that restarts the it, after adding a new file with multer
    }
}
