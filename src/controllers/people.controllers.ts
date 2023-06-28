import { Response, Request } from "express";
import peopleServices from "../services/people.services";

async function getRandom(_req: Request, res: Response) {
  try {
    const person = await peopleServices.getRandomPerson();
    res.send(person);
  } catch (err) {
    res.sendStatus(500);
  }
}

const peopleControllers = { getRandom };

export default peopleControllers;
