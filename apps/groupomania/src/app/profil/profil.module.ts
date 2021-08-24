import { NgModule } from "@angular/core";
import { AvatarModule } from "../shared/components/avatar/avatar.module";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../shared/modules/prime.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { ProfilComponent } from "./profil.component";

const routes: Routes = [{ path: "", component: ProfilComponent }];

@NgModule({
    declarations: [ProfilComponent],
    imports: [AvatarModule, CommonModule, PrimeModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class ProfilModule {}
