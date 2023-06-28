import peopleControllers from "../controllers/people.controllers";
import { Router } from "express";

const peopleRoutes = Router();

peopleRoutes.get("/random", peopleControllers.getRandom);

export default peopleRoutes;
