import { authClient } from "./lib/auth-client";

const newUser = await authClient.admin.createUser({
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    role: "user",
   
  });

