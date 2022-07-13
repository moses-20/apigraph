import Action from "./action";

export default interface Log {
  id: string;
  date: string;
  actions: Action[];
}
