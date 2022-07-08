interface Log {
  id: string;
  date: string;
  actions: {
    id: string;
    status: string;
    amount: string;
    type: string;
    narrative: string;
  }[];
}

const logs: Log[] = [
  {
    id: "1",
    date: "20220505",
    actions: [
      {
        id: "1",
        status: "Success",
        amount: "GHS 4000",
        type: "Credit",
        narrative:
          "Labore ea exercitation laborum et laboris incididunt anim tempor in et.",
      },
      {
        id: "2",
        status: "Pending",
        amount: "GHS 300",
        type: "Debit",
        narrative:
          "Eu aute aliquip qui anim dolor veniam enim pariatur cillum tempor occaecat commodo.",
      },
    ],
  },
  {
    id: "2",
    date: "20220506",
    actions: [
      {
        id: "1",
        status: "Success",
        amount: "GHS 700",
        type: "Debit",
        narrative:
          "Ex exercitation aliqua deserunt consectetur incididunt consequat labore veniam incididunt labore.",
      },
      {
        id: "2",
        status: "Success",
        amount: "GHS 7400",
        type: "Credit",
        narrative:
          "Ex exercitation aliqua deserunt consectetur incididunt consequat labore veniam incididunt labore.",
      },
    ],
  },
];

export default logs;
