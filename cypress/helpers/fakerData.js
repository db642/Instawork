import { faker } from "@faker-js/faker";

export const generateUserData = () => ({
  phoneNumber: faker.phone.number(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  linkedin: `linkedin.com/${faker.person.firstName()}`,
  company: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});
