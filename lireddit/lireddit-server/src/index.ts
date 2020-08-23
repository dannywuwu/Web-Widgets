import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import express from "express";

import microConfig from "./mikro-orm.config";

const main = async () => {
  // connect to db
  const orm = await MikroORM.init(microConfig);
  // run migrations
  await orm.getMigrator().up();

  const app = express();
  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
