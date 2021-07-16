import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: "groupomania-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
    public form!: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            firstname: ["", [Validators.required, Validators.pattern(this.authService.nameValidator)]],
            lastname: ["", [Validators.required, Validators.pattern(this.authService.nameValidator)]],
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required, Validators.pattern(this.authService.passwordValidator)]],
        });
    }

    public signup(): void {
        this.authService.signup(this.form.value).subscribe();
    }
}
