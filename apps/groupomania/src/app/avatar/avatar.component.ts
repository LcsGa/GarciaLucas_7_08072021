import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { AvatarService } from "./avatar.service";

@Component({
    selector: "groupomania-avatar",
    templateUrl: "./avatar.component.html",
    styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit {
    @Input() public size!: string;
    @Input() public userId: string = this.authService.user$.value!.id;
    private _avatarURL!: string;

    constructor(private authService: AuthService, private avatarService: AvatarService) {}

    ngOnInit(): void {
        this.avatarService.getAvatarURL(this.userId).subscribe((avatar) => (this.avatarURL = avatar.URL));
    }

    set avatarURL(avatarURL: string) {
        this._avatarURL = avatarURL;
    }

    get avatarURL(): string {
        return this._avatarURL;
    }

    public get userInitials(): string {
        return this.authService.user$.value!.firstname[0] + this.authService.user$.value!.lastname[0];
    }
}
