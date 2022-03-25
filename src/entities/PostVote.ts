import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { User } from "./User";
import { Post } from "./Post";


@Entity()
export class PostVote {

  @PrimaryKey()
  userId!: number;

  @PrimaryKey()
  postId!: number;

  @Property({nullable: false})
  value: number;

  @ManyToOne(() => Post, {onDelete: "CASCADE"})
  post: Post;

  @ManyToOne(() => User, {onDelete: "CASCADE"})
  user: User;


}