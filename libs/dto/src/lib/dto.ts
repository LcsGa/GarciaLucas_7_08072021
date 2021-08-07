//* START: users_____________________________________________________
export class SigninUserDto {
    email!: string;
    password!: string;
}

export class CreateUserDto extends SigninUserDto {
    firstname!: string;
    lastname!: string;
}

export class User extends CreateUserDto {
    readonly id!: string;
}

export type SafeUser = Omit<User, "password">;
//* END: users_______________________________________________________

//* START: posts_____________________________________________________
export class CreatePostDto {
    author!: SafeUser;
    content!: string;
}

export class Post extends CreatePostDto {
    readonly id!: string;
    readonly created_at!: Date;
    likes!: SafeUser[];
    comments!: Comment[];
}

export type UpdatePostDto = Partial<Post>;
//* END: posts_______________________________________________________

//* START: comments__________________________________________________
export class CreateCommentDto {
    author!: SafeUser;
    post!: Post;
    message!: string;
}

export class Comment extends CreateCommentDto {
    readonly id!: string;
    readonly created_at!: Date;
}

export type UpdateCommentDto = Partial<Comment> & { postId: string };
//* END: comments____________________________________________________
