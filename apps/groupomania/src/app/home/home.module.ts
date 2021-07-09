import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../shared/modules/prime.module";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, PrimeModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
