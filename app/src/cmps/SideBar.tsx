import {css} from "@emotion/css"
import {gcn} from "../global_cn"
import {cmp_cns} from "../utils/cmp_cns"

export type SideBarProps = {}

export function SideBar({}: SideBarProps) {
  return (
    <div className={cn_sb.root}>
      <div class={cn_sb.tag}>H1</div>
    </div>
  )
}

const cn_sb = cmp_cns(SideBar.name, {
  root: css`
    flex-grow: 1;
    width: 15rem;
    border-radius: 0.5rem;
    padding: 1rem;
    ${gcn.elevate}
  `,
  tag: css`
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    ${gcn.elevate}
  `,
})
