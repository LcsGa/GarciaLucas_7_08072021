import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: "groupomania-profil",
    templateUrl: "./profil.component.html",
    styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent implements OnInit {
    public avatarUploaded = false;
    public readonly user = this.authService.user$.value!;
    public profilForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private messageService: MessageService,
        private confirmService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.profilForm = this.fb.group({
            firstname: [this.user.firstname, [Validators.required, Validators.minLength(2)]],
            lastname: [this.user.lastname, [Validators.required, Validators.minLength(2)]],
        });
    }

    public reloadPage(): void {
        this.avatarUploaded = true;
        setTimeout(() => location.reload(), 1000); // fix: let enough time to restart the server in dev mode, due to hot reloading that restarts the it, after adding a new file with multer
    }

    public updateUser(): void {
        const updatedUser: { firstname: string; lastname: string } = this.profilForm.value;
        this.authService
            .updateUser({ ...this.user, firstname: updatedUser.firstname, lastname: updatedUser.lastname })
            .subscribe(() =>
                this.messageService.add({
                    severity: "success",
                    detail: "Profil modifié avec succès",
                    life: 1500,
                })
            );
    }

    public deleteUser(): void {
        this.confirmService.confirm({
            message: "Voulez-vous vraiment confirmer la suppression définitive de votre compte ?",
            accept: () => {
                this.authService.deleteUser(this.user.id).subscribe(() => location.reload());
            },
        });
    }
}
