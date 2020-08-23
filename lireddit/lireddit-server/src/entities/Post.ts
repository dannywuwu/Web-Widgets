import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

// db table
@Entity()
export class Post {
// each corresponds to a db column
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;
}