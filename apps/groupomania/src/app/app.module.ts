import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "./shared/components/header/header.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { IsSignedInGuard } from "./auth/guards/is-signed-in.guard";
import { JwtInterceptor } from "./shared/interceptors/jwt.interceptor";

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { AvatarComponent } from "./avatar/avatar.component";
registerLocaleData(localeFr, "fr");

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "home",
        loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
        canActivate: [IsSignedInGuard],
    },
    {
        path: "profil",
        loadChildren: () => import("./profil/profil.module").then((m) => m.ProfilModule),
        canActivate: [IsSignedInGuard],
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
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
