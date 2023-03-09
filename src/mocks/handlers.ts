import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}/user/login`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "token",
        })
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}/user/login`,
    async (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Wrong credentials",
        })
      );
    }
  ),
];
