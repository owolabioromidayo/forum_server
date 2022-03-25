import { Entity, PrimaryKey, Property, ManyToOne, Collection, ManyToMany, OneToMany} from "@mikro-orm/core";
import { Category } from "./Category";
import { User } from "./User";
import { PostVote } from "./PostVote";

@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  @Property()
  title!: string;

  @Property()
  body = "";

  @Property()
  isDisabled = false;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => User)
  owner: User;

  @ManyToMany(() => User, user => user.savedPosts)
  savers = new Collection<User>(this);

  @OneToMany(() => PostVote, postvote => postvote.post)
  votes = new Collection<PostVote>(this);


}