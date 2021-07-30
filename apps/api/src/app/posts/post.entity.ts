import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../auth/users/user.entity";
import { Comment } from "../comments/comment.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User, { eager: true })
    author: User;

    @Column({ nullable: false })
    content: string;

    @ManyToMany(() => User, { eager: true })
    @JoinTable()
    likes: User[];

    @OneToMany(() => Comment, (comment) => comment.post, { eager: true })
    comments: Comment[];
}
