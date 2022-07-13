import { makeVar, ReactiveVar } from "@apollo/client";

export const logActionTypeVar: ReactiveVar<string> = makeVar<string>("");
export const logActionStatusVar: ReactiveVar<string> = makeVar<string>("");
