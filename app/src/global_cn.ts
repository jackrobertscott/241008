import {css} from "@emotion/css"

export const gcn = {
  elevate: css`
    --s1: var(--shadow-thickness);
    --s2: calc(var(--s1) * -1);
    background-color: hsl(0, 0%, 100%, 0.05);
    box-shadow: inset var(--s1) var(--s1) 0 0 hsl(0, 0%, 100%, 0.25),
      inset var(--s2) var(--s2) 0 0 hsl(0, 0%, 0%, 0.25);
  `,
  depress: css`
    --s1: var(--shadow-thickness);
    --s2: calc(var(--s1) * -1);
    background-color: hsl(0, 0%, 0%, 0.25);
    box-shadow: inset var(--s1) var(--s1) 0 0 hsl(0, 0%, 0%, 0.5),
      inset var(--s2) var(--s2) 0 0 hsl(0, 0%, 0%, 0.25);
  `,
  get hoverClick() {
    return css`
      ${this.elevate}
      position: relative;
      &:hover:not(:active)::before {
        content: "";
        inset: 0;
        position: absolute;
        background-color: hsl(0, 0%, 100%, 0.1);
      }
      &:active {
        ${this.depress}
      }
    `
  },
} satisfies Record<string, string>
