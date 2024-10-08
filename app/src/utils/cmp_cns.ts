import {to_kebab_case} from "./change_case"

export function cmp_cns<T extends Record<string, string>>(
  cmp_name: string,
  data: T
) {
  return Object.entries(data).reduce((a, [k, v]) => {
    if (!v.startsWith("css-")) throw new Error("Invalid css value")
    return {...a, [k]: [to_kebab_case([cmp_name, k].join("-")), v].join(" ")}
  }, {} as T)
}

export type JoinNameValue = string | undefined | null | false | JoinNameValue[]

export function jn_cns(...cns: JoinNameValue[]): string {
  return cns
    .map((i) => (Array.isArray(i) ? jn_cns(i) : i))
    .filter(Boolean)
    .join(" ")
}
