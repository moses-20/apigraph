interface Action {
  id: string;
  logId: string;
  type: string;
  status: string;
  amount: string;
  narrative: string;
}

interface Log {
  id: string;
  date: string;
}

const actions: Action[] = [
  {
    id: "1",
    logId: "1",
    type: "Credit",
    status: "Success",
    amount: "GHS 4000",
    narrative:
      "Labore ea exercitation laborum et laboris incididunt anim tempor in et.",
  },
  {
    id: "2",
    logId: "1",
    type: "Debit",
    status: "Pending",
    amount: "GHS 300",
    narrative:
      "Eu aute aliquip qui anim dolor veniam enim pariatur cillum tempor occaecat commodo.",
  },
  {
    id: "3",
    logId: "2",
    type: "Credit",
    status: "Success",
    amount: "GHS 700",
    narrative:
      "Ex exercitation aliqua deserunt consectetur incididunt consequat labore veniam incididunt labore.",
  },
];

const logs: Log[] = [
  {
    id: "1",
    date: "05052022",
  },
  {
    id: "2",
    date: "06052022",
  },
];

export { actions, logs, Action, Log };
