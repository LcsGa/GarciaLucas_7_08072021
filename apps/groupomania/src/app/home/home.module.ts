import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../shared/modules/prime.module";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
    declarations: [HomeComponent, PostFormComponent, PostListComponent],
    imports: [CommonModule, PrimeModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
