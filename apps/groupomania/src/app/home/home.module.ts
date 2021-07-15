import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PrimeModule } from "../shared/modules/prime.module";
import { RouterModule, Routes } from "@angular/router";
import { ToggleButtonModule } from "primeng/togglebutton";

import { HomeComponent } from "./home.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
    declarations: [HomeComponent, PostFormComponent, PostComponent],
    imports: [CommonModule, FormsModule, PrimeModule, RouterModule.forChild(routes), ToggleButtonModule],
})
export class HomeModule {}
