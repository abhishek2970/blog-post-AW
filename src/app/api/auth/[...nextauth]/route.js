import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: "1045315442051-2ep41jc8eci08946ejtbvhil4simmrd7.apps.googleusercontent.com",
        clientSecret: "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",
      }),
    ],
    secret: "sdjkfkjsdsffsdfsdf",
  });
  

export { handler as GET, handler as POST };
