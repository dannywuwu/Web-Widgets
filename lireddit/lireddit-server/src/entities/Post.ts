import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";

// db table
@ObjectType()
@Entity()
export class Post {
  // each corresponds to a db column
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  createdAt = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property()
  title!: string;
}
