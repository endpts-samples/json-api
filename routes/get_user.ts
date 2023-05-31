import type { Route } from "@endpts/types";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
];

export default {
  method: "GET",
  path: "/users/:id",
  async handler(req) {
    const userId = parseInt(req.params.id);

    const user = users.find((user) => user.id === userId);

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
} satisfies Route;
