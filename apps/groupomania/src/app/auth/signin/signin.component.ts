import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: "groupomania-signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
    public form!: FormGroup;
    public hasSigninFailed = false;

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]],
        });
    }

    public signin(): void {
        this.authService.signin(this.form.value).subscribe({
            next: () => (this.hasSigninFailed = false),
            error: () => (this.hasSigninFailed = true),
        });
    }
}
