import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./data/schema";

const app = express();

app.get("/", (req, res) => {
	res.send("Graphql is amazing!");
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

const helmet = require("helmet");
app.use(helmet.frameguard({ action: "DENY" }));

app.listen(8082, () =>
	console.log("Running on server port localhost:8082/graphql")
);
