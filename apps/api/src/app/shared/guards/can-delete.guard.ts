import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "../../auth/users/users.service";
import { CommentsService } from "../../comments/comments.service";
import { PostsService } from "../../posts/posts.service";

@Injectable()
export class CanDeleteGuard implements CanActivate {
    constructor(
        private userService: UsersService,
        private postsService: PostsService,
        private commentsService: CommentsService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const userId = req.user.userId;
        const isAdmin = (await this.userService.findById(userId)).admin;

        if (isAdmin) {
            return isAdmin;
        } else {
            const elemId = req.params.id;

            const deleteElem = {
                post: await this.postsService.isUserOwner(userId, elemId),
                comment: await this.commentsService.isUserOwner(userId, elemId),
            };

            return deleteElem[req.query.type];
        }
    }
}
