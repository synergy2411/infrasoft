import { User } from './user';

export const USER_DATA : User[] = [{
  firstName: "Bill",
  lastName: "Gates",
  income: 50000,
  dob: new Date("Jan 12, 1965"),
  isWorking: true,
  company: "Microsoft",
  image: './assets/images/bill.jpg',
  vote: 110,
  contact_no :7896543332
}, {
  firstName: "Steve",
  lastName: "Jojbs",
  income: 0,
  dob: new Date("Feb 2, 1965"),
  isWorking: false,
  company: "Microsoft",
  image: './assets/images/steve.png',
  vote: 120,
  contact_no : 9876541280
}, {
  firstName: "Tim B.",
  lastName: "Lee",
  income: 30000,
  dob: new Date("Dec 12, 1965"),
  isWorking: true,
  company: "World Wide Web",
  image: './assets/images/tim.jpg',
  vote: 90,
  contact_no : 987654321
}]

