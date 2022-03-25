import { Entity, PrimaryKey, Property, ManyToMany, Collection, OneToMany } from "@mikro-orm/core";
import { Category } from "./Category";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { PostVote } from "./PostVote";
import { CommentVote } from "./CommentVote";

@Entity()
export class User {

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({unique: true})
  username!: string;

  @Property({unique: true})
  email!: string;

  @Property()
  passwordHash!: string;

  @Property()
  isDisabled = false;

  @Property()
  profileImgUrl = "https://i.imgur.com/OQENGf1.jpeg";


  @ManyToMany(() => Category, category => category.members, {owner: true})
  subscriptions = new Collection<Category>(this);

  @ManyToMany(() => Category, category => category.moderators, {owner: true})
  moderating = new Collection<Category>(this);

  @OneToMany(()=> Post, post => post.owner)
  posts = new Collection<Post>(this);

  @OneToMany(()=> Comment, comment => comment.owner)
  comments = new Collection<Comment>(this);

  @ManyToMany(() => Post, post => post.savers, {owner: true})
  savedPosts = new Collection<Post>(this);

  @ManyToMany(() => Comment, comment  => comment.savers, {owner: true})
  savedComments = new Collection<Post>(this);

  
  @OneToMany(() => PostVote, postVote => postVote.user)
  postVotes = new Collection<PostVote>(this);


  @OneToMany(() => CommentVote, commentVote => commentVote.user)
  commentVotes = new Collection<PostVote>(this);


}