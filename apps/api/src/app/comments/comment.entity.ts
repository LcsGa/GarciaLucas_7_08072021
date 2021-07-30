import { SafeUser } from "libs/dto/src/lib/dto";
import { User } from "../auth/users/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../posts/post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;

    @ManyToOne(() => User, (user) => user.comments)
    author: SafeUser;

    @Column({ nullable: false })
    message: string;
}
