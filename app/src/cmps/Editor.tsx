import {css} from "@emotion/css"
import {cmp_cns} from "../utils/cmp_cns"
import {SideBar} from "./SideBar"

export type EditorProps = {}

export function Editor({}: EditorProps) {
  return (
    <div class={cn_e.root}>
      <SideBar />
    </div>
  )
}

const cn_e = cmp_cns(Editor.name, {
  root: css`
    flex-grow: 1;
    padding: 1rem;
    align-items: end;
    color: hsl(0, 0%, 100%);
  `,
})
