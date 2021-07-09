import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrimeModule } from "../shared/modules/prime.module";

import { ProfilComponent } from "./profil.component";

const routes: Routes = [{ path: "", component: ProfilComponent }];

@NgModule({
    declarations: [ProfilComponent],
    imports: [PrimeModule, RouterModule.forChild(routes)],
})
export class ProfilModule {}
