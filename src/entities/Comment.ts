import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection, ManyToMany } from "@mikro-orm/core";
import { CommentVote } from "./CommentVote";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Comment {

  @PrimaryKey()
  id!: number;

  @Property({nullable: false})
  createdAt = new Date();

  @Property({nullable: false})
  updatedAt = new Date();

  @Property({nullable: false, length:3000})
  body = "";

  @Property({nullable: false})
  isDisabled = false;

  @ManyToOne(() => Post, {nullable: true})
  post: Post;

  // if parentComment is null then parent is post
  @ManyToOne(() => Comment, {nullable: true})
  parentComment: Comment | null;

  @OneToMany(() => Comment, comment =>comment.parentComment)
  children = new Collection<Comment>(this);

  @ManyToOne(() => User)
  owner: User;

  @ManyToMany(() => User, user => user.savedComments)
  savers = new Collection<User>(this);

  @OneToMany(() => CommentVote, commentVote => commentVote.comment)
  votes = new Collection<CommentVote>(this);



}