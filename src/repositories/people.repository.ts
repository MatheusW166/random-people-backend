import db from "../db/database";

type CountQueryResult = { count: number };

async function countPeople(): Promise<number> {
  const { rows } = await db.query<CountQueryResult>(`SELECT COUNT(*)::integer FROM people;`);
  return rows[0].count;
}

type PeopleQueryResult = {
  id: number,
  firstName: string,
  lastName: string,
};

async function getFromId(id: number): Promise<PeopleQueryResult> {
  const { rows } = await db.query<PeopleQueryResult>(`SELECT * FROM people WHERE id=$1;`, [id]);
  return rows[0];
}

const peopleRepository = { countPeople, getFromId };

export default peopleRepository;
