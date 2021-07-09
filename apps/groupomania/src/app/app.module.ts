import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderModule } from "./shared/includes/header/header.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "home",
        loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    },
    {
        path: "profil",
        loadChildren: () => import("./profil/profil.module").then((m) => m.ProfilModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        AuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HeaderModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
