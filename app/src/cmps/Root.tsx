import {css} from "@emotion/css"
import {cmp_cns} from "../utils/cmp_cns"

export function Root() {
  return <div class={cns_r.outer}>Hello world!</div>
}

const cns_r = cmp_cns(Root.name, {
  outer: css`
    font-size: 100px;
    color: red;
  `,
})
