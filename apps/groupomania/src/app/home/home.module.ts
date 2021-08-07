import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeModule } from "../shared/modules/prime.module";
import { RouterModule, Routes } from "@angular/router";
import { ScrollTopModule } from "primeng/scrolltop";
import { ToggleButtonModule } from "primeng/togglebutton";

import { HomeComponent } from "./home.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";
import { PostContentComponent } from "./post/post-content/post-content.component";
import { PostToolbarComponent } from "./post/post-toolbar/post-toolbar.component";
import { CommentContainerComponent } from "./post/comment-container/comment-container.component";
import { CommentComponent } from "./post/comment-container/comment/comment.component";
import { CommentFormComponent } from "./post/comment-container/comment-form/comment-form.component";
import { FocusDirective } from "../shared/directives/focus.directive";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
    declarations: [
        HomeComponent,
        PostFormComponent,
        PostComponent,
        PostContentComponent,
        PostToolbarComponent,
        CommentContainerComponent,
        CommentComponent,
        CommentFormComponent,
        FocusDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrimeModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ScrollTopModule,
        ToggleButtonModule,
    ],
})
export class HomeModule {}
