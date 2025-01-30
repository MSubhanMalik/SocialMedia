import { Router } from "express";
import routes from "./routes.js";

const router = Router();

const asyncHandler = (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch((e) => console.log(e.message));
};

routes.forEach((route) => {
  const { path, func, controller, method } = route;
  router[method](
    path,
    asyncHandler(async (req, res, next) => {
      const control = new controller({ req, res, next });
      const response = await control[func]();
    })
  );
});

export default router;
