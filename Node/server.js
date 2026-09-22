import cors from "cors";
import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.post("/users", async (request, response) => {
  const user = await prisma.user.create({
    data: {
      email: request.body.email,
      age: request.body.age,
      name: request.body.name,
    },
  });

  response.status(201).json(user);
});

app.get("/users", async (request, response) => {
  const users = await prisma.user.findMany();

  response.status(200).json(users);
});

app.put("/users/:id", async (request, response) => {
  const user = await prisma.user.update({
    where: {
      id: request.params.id,
    },
    data: {
      email: request.body.email,
      age: request.body.age,
      name: request.body.name,
    },
  });

  response.status(200).json(user);
});

app.delete("/users/:id", async (request, response) => {
  await prisma.user.delete({
    where: {
      id: request.params.id,
    },
  });
  response.status(200).json({ message: "User Successfully Deleted!" });
});

app.listen(3000);
