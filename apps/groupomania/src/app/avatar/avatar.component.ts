import { Component, Input, OnInit } from "@angular/core";
import { SafeUser } from "@groupomania/dto";
import { AuthService } from "../auth/auth.service";
import { AvatarService } from "./avatar.service";

@Component({
    selector: "groupomania-avatar",
    templateUrl: "./avatar.component.html",
    styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit {
    @Input() public size!: string;
    @Input() public user: SafeUser = this.authService.user$.value!;
    private _avatarURL!: string;

    constructor(private authService: AuthService, private avatarService: AvatarService) {}

    ngOnInit(): void {
        this.avatarService.getAvatarURL(this.user.id).subscribe((avatar) => (this.avatarURL = avatar.URL));
    }

    set avatarURL(avatarURL: string) {
        this._avatarURL = avatarURL;
    }

    get avatarURL(): string {
        return this._avatarURL;
    }

    public get userInitials(): string {
        return this.user.firstname[0] + this.user.lastname[0];
    }
}
