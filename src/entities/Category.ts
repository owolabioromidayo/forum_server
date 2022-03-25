import { Collection, Entity, ManyToMany, PrimaryKey, Property, OneToMany } from "@mikro-orm/core";

import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Category {

  @PrimaryKey({nullable: false})
  id!: number;

  @Property({nullable: false})
  createdAt = new Date();

  @Property({unique: true, length:60, nullable:false})
  name!: string;

  @Property({nullable: false, length:3000})
  description!: string;

  @Property({nullable: false})
  isDisabled = false;

  @Property({nullable: false})
  logoImgUrl = "https://i.imgur.com/OQENGf1.jpeg";

  @Property({nullable: false})
  bannerImgUrl = "https://i.imgur.com/OQENGf1.jpeg";

  @ManyToMany(() => User, user => user.subscriptions)
  members = new Collection<User>(this);

  @OneToMany(()=> Post, post => post.category)
  posts = new Collection<Post>(this);

  @ManyToMany(() => User, user => user.moderating)
  moderators = new Collection<User>(this);


}