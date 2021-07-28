// User
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

// posts
export class CreatePostDto {
    author!: SafeUser;
    content!: string;
}

export class Post extends CreatePostDto {
    readonly id!: string;
    readonly created_at!: Date;
}
