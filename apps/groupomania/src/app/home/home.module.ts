import { NgModule } from "@angular/core";
import { AvatarModule } from "../shared/components/avatar/avatar.module";
import { CommonModule } from "@angular/common";
import { PostModule } from "../post/post.module";
import { PrimeModule } from "../shared/modules/prime.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// Components
import { HomeComponent } from "./home.component";
import { PostFormComponent } from "./post-form/post-form.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
    declarations: [HomeComponent, PostFormComponent],
    imports: [AvatarModule, CommonModule, PostModule, PrimeModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
