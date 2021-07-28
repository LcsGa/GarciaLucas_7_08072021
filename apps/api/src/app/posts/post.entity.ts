import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../auth/users/user.entity";

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

    @ManyToMany(() => User)
    @JoinTable()
    likes: User[];
}
