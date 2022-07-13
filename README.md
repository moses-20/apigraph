# API-GRAPH

Helicarrier [Engineering Challenge](https://helicarrier.notion.site/Engineering-Challenge-f870aea032e14381ae4e404263534326)

### Tech Stack

1. Typescript
2. ReactJS
3. GraphQL
4. Apollo Client
5. Prisma ORM
6. Postgres Database
7. Material-UI

### Description and Features

A scrollable interface with datasets grouped by date. Datasets can be filtered by certain values or can be searched through by text strings.

#### Dataset Structure

The Dataset is a sampled array of transactions with the following fields

```ts
interface Action {
  id: number;
  ref: string;
  trxn: string;
  type: string;
  status: string;
  party: string;
  amount: string;
  narrative: string;
  logId: number;
}

interface Log {
  id: number;
  date: string;
  actions: Action[];
}
```

#### Filter Values

There are two groups of filter values. Filter can be a single value or combination of one value from each group. In the UI, the filter group is a horizontal list of scrollable items.

| Status  |   Type   |
| :-----: | :------: |
| Success |  Credit  |
| Failed  |  Debit   |
| Pending | Reversal |

#### Search Queries

Search queries can be run on the following fields

1. Ref
2. Trxn
3. Party
4. Amount
5. Narrative

Results will return all transactions with any field matching

### Development Journey

I started with sampling data using FakerJS and setting up GraphQL backend. ReactJS was prefered for frontend majorly because it requires less setup and development bugs. I added Jest tests initially but had to drop it and focus more on meeting the stated requirements.

I had to decide between Sequelize and Prisma for object-relational mapping. Sequelize is quite matured compared to Prisma, but I love the fact that Prisma offers more flexibilities and even works with NoSQL databses perfectly, plus they have great documentation and community support. And for Database, there were no two thoughts about Postgres

Challenges!
Working on this app has been moderately challenging. But for the funny part, I got stuck trying to fix an 'error' reported by Typscript for hours... only to realise that I had the file extension as `.ts` instead of `.tsx`. I can guess your face right now will be just like mine 🙄. Well, I solved that thanks to a bowl-full of Waakye 😂😂
