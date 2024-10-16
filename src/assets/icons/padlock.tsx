import { SVGProps } from "react";
type Props = {
  height?: string;
  width?: string;
  className?: string;
  color?: string;
} & SVGProps<SVGSVGElement>;
export const Padlock = ({
  width = "32",
  height = "32",
  className,
  color = "#4C6FFF",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_5432_29695)">
        <path
          d="M25 32H7C5.34667 32 4 30.6547 4 29V15C4 13.3453 5.34667 12 7 12H25C26.6533 12 28 13.3453 28 15V29C28 30.6547 26.6533 32 25 32ZM7 14C6.44933 14 6 14.448 6 15V29C6 29.552 6.44933 30 7 30H25C25.5507 30 26 29.552 26 29V15C26 14.448 25.5507 14 25 14H7Z"
          fill={color}
        />
        <path
          d="M23 14C22.448 14 22 13.552 22 13V8C22 4.692 19.308 2 16 2C12.692 2 10 4.692 10 8V13C10 13.552 9.552 14 9 14C8.448 14 8 13.552 8 13V8C8 3.588 11.588 0 16 0C20.412 0 24 3.588 24 8V13C24 13.552 23.552 14 23 14Z"
          fill={color}
        />
        <path
          d="M16.0007 22.6673C14.53 22.6673 13.334 21.4713 13.334 20.0007C13.334 18.53 14.53 17.334 16.0007 17.334C17.4713 17.334 18.6673 18.53 18.6673 20.0007C18.6673 21.4713 17.4713 22.6673 16.0007 22.6673ZM16.0007 19.334C15.634 19.334 15.334 19.6327 15.334 20.0007C15.334 20.3687 15.634 20.6673 16.0007 20.6673C16.3673 20.6673 16.6673 20.3687 16.6673 20.0007C16.6673 19.6327 16.3673 19.334 16.0007 19.334Z"
          fill={color}
        />
        <path
          d="M16 26.6667C15.448 26.6667 15 26.2187 15 25.6667V22C15 21.448 15.448 21 16 21C16.552 21 17 21.448 17 22V25.6667C17 26.2187 16.552 26.6667 16 26.6667Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5432_29695">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
