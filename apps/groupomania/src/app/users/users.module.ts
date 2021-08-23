import { NgModule } from "@angular/core";
import { AvatarModule } from "../shared/components/avatar/avatar.module";
import { CommonModule } from "@angular/common";
import { PostModule } from "../post/post.module";
import { PrimeModule } from "../shared/modules/prime.module";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";

import { UsersComponent } from "./users.component";
import { UserPostsComponent } from "./user-posts/user-posts.component";
import { UsersTableComponent } from "./users-table/users-table.component";

const routes: Routes = [
    { path: "", component: UsersComponent, children: [{ path: ":userId", component: UserPostsComponent }] },
];

@NgModule({
    declarations: [UsersComponent, UsersTableComponent, UserPostsComponent],
    imports: [AvatarModule, CommonModule, PostModule, PrimeModule, RouterModule.forChild(routes), TableModule],
})
export class UsersModule {}
