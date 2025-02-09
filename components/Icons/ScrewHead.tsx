import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 40 40" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        className="stroke-current"
        strokeWidth={2}
        d="M20 39c10.493 0 19-8.507 19-19S30.493 1 20 1 1 9.507 1 20s8.507 19 19 19Z"
      />
      <path
        className="fill-current"
        d="M19.552 5.002c-3.8-.1-1.8 4.3-5.1 6.2-3.3 1.9-6.1-2-8 1.3-1.9 3.3 3 3.7 2.9 7.5-.1 3.8-4.8 4.2-2.9 7.5s4.7-.6 8 1.3 1.3 6.1 5.1 6.2c3.8.1 1.8-4.3 5.1-6.2 3.3-1.9 6.1 2 8-1.3 1.9-3.3-3-3.7-2.9-7.5.1-3.8 4.8-4.2 2.9-7.5s-4.7.6-8-1.3-1.3-6.1-5.1-6.2Zm-7 15a7 7 0 1 1 0 .01v-.01Zm1 0A6 6 0 1 1 25.55 20a6 6 0 0 1-12 .003v-.001Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
