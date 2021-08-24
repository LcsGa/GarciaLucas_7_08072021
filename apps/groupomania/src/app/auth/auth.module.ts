import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PasswordModule } from "primeng/password";
import { PrimeModule } from "../shared/modules/prime.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    {
        path: "auth",
        children: [
            { path: "signin", component: SigninComponent },
            { path: "signup", component: SignupComponent },
        ],
    },
];

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [CommonModule, PasswordModule, PrimeModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
