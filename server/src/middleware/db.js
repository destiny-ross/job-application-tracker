import Knex from "knex";

const db = Knex({
  client: "pg",
  connection: {
    connectionString: `${process.env.PG_CONNECTION_STRING}`,
    ssl: { rejectUnauthorized: false },
  },
});

const connect = (app) => {
  app.set("db", db);
};

export default connect;
