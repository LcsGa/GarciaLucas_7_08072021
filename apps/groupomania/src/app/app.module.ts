import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderModule } from "./shared/includes/header/header.module";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "auth/signin" },
    {
        path: "auth",
        children: [
            { path: "signin", component: SigninComponent },
            { path: "signup", component: SignupComponent },
        ],
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [RouterModule.forRoot(routes), BrowserModule, HeaderModule, HttpClientModule, AuthModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
