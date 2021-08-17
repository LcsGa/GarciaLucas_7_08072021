import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "../../comments/comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    firstname: string;

    @Column({ nullable: false })
    lastname: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false, select: false })
    password: string;

    @OneToMany(() => Comment, (comment) => comment.author, { onDelete: "CASCADE" })
    comments: Comment[];
}
