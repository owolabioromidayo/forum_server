import { Entity, PrimaryKey, Property, ManyToOne, Collection, ManyToMany, OneToMany} from "@mikro-orm/core";
import { Category } from "./Category";
import { User } from "./User";
import { PostVote } from "./PostVote";

@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property({nullable: false})
  createdAt = new Date();

  @Property({nullable: false})
  updatedAt = new Date();

  @Property({nullable: false, length:100})
  title!: string;

  @Property({nullable: false, length:15000})
  body = "";

  @Property({nullable: false})
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