import {css} from "@emotion/css"
import {cmp_cns} from "../utils/cmp_cns"
import {Editor} from "./Editor"

export function Root() {
  return (
    <div class={cn_r.root}>
      <Editor />
    </div>
  )
}

const cn_r = cmp_cns(Root.name, {
  root: css`
    width: 100%;
    flex-grow: 1;
    background-color: var(--root-bg);
  `,
})
