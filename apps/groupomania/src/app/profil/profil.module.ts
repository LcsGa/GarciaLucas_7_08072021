import { NgModule } from "@angular/core";
import { AvatarModule } from "../avatar/avatar.module";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../shared/modules/prime.module";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { RouterModule, Routes } from "@angular/router";

import { ProfilComponent } from "./profil.component";

const routes: Routes = [{ path: "", component: ProfilComponent }];

@NgModule({
    declarations: [ProfilComponent],
    imports: [AvatarModule, CommonModule, PrimeModule, ProgressSpinnerModule, RouterModule.forChild(routes)],
})
export class ProfilModule {}
