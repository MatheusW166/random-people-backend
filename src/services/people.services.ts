import peopleRepository from "../repositories/people.repository";

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

async function getRandomPerson() {
  const count = await peopleRepository.countPeople();

  if (!count) {
    throw new Error("unable to count");
  }

  const randomIdx = getRandomNumber(1, count);
  return await peopleRepository.getFromId(randomIdx);
}

const peopleServices = { getRandomPerson };

export default peopleServices;
