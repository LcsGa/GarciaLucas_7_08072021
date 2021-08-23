import { NgModule } from "@angular/core";
import { AvatarModule } from "../shared/components/avatar/avatar.module";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../shared/modules/prime.module";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { CommentComponent } from "./comment-container/comment/comment.component";
import { CommentContainerComponent } from "./comment-container/comment-container.component";
import { CommentFormComponent } from "./comment-container/comment-form/comment-form.component";
import { PostComponent } from "./post.component";
import { PostContentComponent } from "./post-content/post-content.component";
import { PostToolbarComponent } from "./post-toolbar/post-toolbar.component";

// Directives
import { FocusDirective } from "../shared/directives/focus.directive";

@NgModule({
    declarations: [
        CommentComponent,
        CommentContainerComponent,
        CommentFormComponent,
        FocusDirective,
        PostComponent,
        PostContentComponent,
        PostToolbarComponent,
    ],
    imports: [AvatarModule, CommonModule, PrimeModule, ReactiveFormsModule],
    exports: [PostComponent],
})
export class PostModule {}
