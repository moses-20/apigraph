import { randomUUID } from "crypto";
import { faker } from "@faker-js/faker";

interface Action {
  id: string;
  ref: string;
  logId: string;
  type: string;
  trxn: string;
  status: string;
  amount: string;
  party: string;
  narrative: string;
}

interface Log {
  id: string;
  date: string;
}

const genType = () =>
  faker.helpers.arrayElement(["Debit", "Credit", "Reversal"]);
const genStatus = () =>
  faker.helpers.arrayElement(["Success", "Pending", "Failed"]);
const genAmount = () => faker.finance.amount(700, 10000, 2, "GHS", true);
const genLogId = () =>
  faker.helpers.arrayElement(["1", "2", "3", "4", "5", "6"]);
const genParty = () => faker.company.companyName();

const logs: Log[] = [
  {
    id: "1",
    date: "20220706",
  },
  {
    id: "2",
    date: "20220705",
  },
  {
    id: "3",
    date: "20220704",
  },
  {
    id: "4",
    date: "20220703",
  },
  {
    id: "5",
    date: "20220702",
  },
  {
    id: "6",
    date: "20220701",
  },
];

const actions: Action[] = Array.apply(0, new Array(27)).map((_, idx) => ({
  id: String(idx),
  ref: faker.random.alphaNumeric(7, {
    casing: "mixed",
  }),
  logId: genLogId(),
  trxn: randomUUID(),
  type: genType(),
  status: genStatus(),
  party: genParty(),
  amount: genAmount(),
  narrative: faker.lorem.lines(1),
}));

export { actions, logs };
