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

  rest.get(
    `${process.env.REACT_APP_URL_API}/structures`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          structures: [],
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_URL_API}/structures/123456789`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          deleted: "Aljub SN08",
        })
      );
    }
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}/structures`,
    async (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Structure not found",
        })
      );
    }
  ),

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

  rest.delete(
    `${process.env.REACT_APP_URL_API}/structures/123456789`,
    async (req, res, ctx) => {
      return res(
        ctx.status(498),
        ctx.json({
          error: "Can't delete",
        })
      );
    }
  ),
];

export const getByIDError = [
  rest.get(
    `${process.env.REACT_APP_URL_API}/structures/id`,
    async (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Structure not found",
        })
      );
    }
  ),
];

export const getById = [
  rest.get(
    `${process.env.REACT_APP_URL_API}/structures/id`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),
];

export const errorCreate = [
  rest.post(
    `${process.env.REACT_APP_URL_API}/structures/create`,
    async (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Can't create",
        })
      );
    }
  ),
];

export const createHandler = [
  rest.post(
    `${process.env.REACT_APP_URL_API}/structures/create`,
    async (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          created: "Aljub SN08",
        })
      );
    }
  ),
];
