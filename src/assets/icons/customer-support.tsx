import { SVGProps } from "react";
type Props = {
  height?: string;
  width?: string;
  className?: string;
  color?: string;
} & SVGProps<SVGSVGElement>;
export const CustomerSupport = ({
  height = "33",
  width= "33",
  className,
  color = "black",
}: Props) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 33 33"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30.9739 13.9665C30.845 10.2931 29.3574 6.85801 26.7454 4.24594C24.0075 1.50757 20.3688 0 16.5002 0C8.68657 0 2.30214 6.2192 2.02694 13.9665C0.834559 14.4964 0 15.6898 0 17.0769V20.8982C0 22.7746 1.52652 24.3017 3.40349 24.3017C4.61796 24.3017 5.60565 23.314 5.60565 22.0995V15.875C5.60565 14.7348 4.7311 13.805 3.61923 13.6945C4.02967 6.94484 9.64847 1.57861 16.5002 1.57861C19.9479 1.57861 23.1898 2.92254 25.6298 5.36254C27.8704 7.60312 29.1817 10.5235 29.379 13.695C28.2682 13.8065 27.3952 14.7358 27.3952 15.875V22.099C27.3952 23.2487 28.2834 24.1843 29.4085 24.2817V25.8545C29.4085 27.6257 27.9672 29.0664 26.196 29.0664H23.817C23.7002 28.7328 23.5171 28.4245 23.2603 28.1687C22.8104 27.7167 22.2105 27.4678 21.5717 27.4678H19.1196C18.7676 27.4678 18.4298 27.5426 18.1203 27.6867C17.2763 28.0746 16.7312 28.9259 16.7312 29.8558C16.7312 30.4946 16.9801 31.0944 17.431 31.5433C17.882 31.9953 18.4819 32.2442 19.1196 32.2442H21.5717C22.5883 32.2442 23.4845 31.587 23.8186 30.6451H26.196C28.8381 30.6451 30.9871 28.496 30.9871 25.8545V24.0007C32.1721 23.4676 33.0003 22.2784 33.0003 20.8971V17.0758C33.0003 15.6898 32.1658 14.4964 30.9739 13.9665ZM4.02651 15.875V22.099C4.02651 22.4426 3.7471 22.7225 3.40296 22.7225C2.39686 22.7225 1.57809 21.9038 1.57809 20.8977V17.0764C1.57809 16.0697 2.39686 15.2515 3.40296 15.2515C3.7471 15.2515 4.02651 15.5314 4.02651 15.875ZM22.3637 30.0252C22.2853 30.3967 21.9516 30.6666 21.5712 30.6666H19.1191C18.9033 30.6666 18.7008 30.5824 18.5461 30.4277C18.3935 30.2757 18.3093 30.0725 18.3093 29.8568C18.3093 29.5416 18.494 29.2538 18.7834 29.1206C18.8865 29.0722 18.9996 29.0475 19.1191 29.0475H21.5712C21.7869 29.0475 21.9895 29.1312 22.1437 29.2859C22.2963 29.4379 22.3805 29.6411 22.3805 29.8568C22.381 29.9147 22.3747 29.9726 22.3637 30.0252ZM31.4217 20.8977C31.4217 21.9038 30.603 22.7225 29.5969 22.7225C29.2532 22.7225 28.9733 22.4431 28.9733 22.099V15.875C28.9733 15.5314 29.2527 15.2515 29.5969 15.2515C30.603 15.2515 31.4217 16.0703 31.4217 17.0764V20.8977Z"
        fill={color}
      />
      <path
        d="M21.6115 21.17C23.4559 21.17 24.9561 19.6692 24.9561 17.8254V11.0106C24.9561 10.1192 24.6077 9.27936 23.9752 8.64686C23.3427 8.01436 22.5034 7.66602 21.6115 7.66602H11.3895C9.54513 7.66602 8.04492 9.16622 8.04492 11.0106V17.8254C8.04492 19.6698 9.54513 21.17 11.3895 21.17H11.4521V22.9359C11.4521 23.6095 11.8536 24.2072 12.4745 24.4593C12.675 24.5398 12.8834 24.5798 13.0896 24.5798C13.5195 24.5798 13.9384 24.4093 14.2452 24.092L17.183 21.17H21.6115ZM16.3016 19.8208L13.1223 22.9828C13.1081 22.9975 13.0975 23.0085 13.0675 22.9954C13.0312 22.9806 13.0312 22.957 13.0312 22.9359V20.3807C13.0312 19.945 12.6781 19.5914 12.2419 19.5914H11.39C10.416 19.5914 9.62406 18.7989 9.62406 17.8254V11.0106C9.62406 10.0366 10.416 9.24463 11.39 9.24463H21.612C22.0825 9.24463 22.525 9.4288 22.8597 9.76294C23.1943 10.0976 23.378 10.5407 23.378 11.0106V17.8254C23.378 18.7994 22.5855 19.5914 21.612 19.5914H16.8583C16.6494 19.5914 16.4494 19.674 16.3016 19.8208Z"
        fill={color}
      />
      <path
        d="M12.6664 13.3789C12.0245 13.3789 11.502 13.902 11.502 14.5434C11.502 15.1848 12.025 15.7079 12.6664 15.7079C13.3089 15.7079 13.832 15.1848 13.832 14.5434C13.832 13.902 13.3095 13.3789 12.6664 13.3789Z"
        fill={color}
      />
      <path
        d="M16.5004 13.3789C15.8585 13.3789 15.3359 13.902 15.3359 14.5434C15.3359 15.1848 15.859 15.7079 16.5004 15.7079C17.1434 15.7079 17.666 15.1848 17.666 14.5434C17.666 13.902 17.1434 13.3789 16.5004 13.3789Z"
        fill={color}
      />
      <path
        d="M20.3344 13.3789C19.6924 13.3789 19.1699 13.902 19.1699 14.5434C19.1699 15.1848 19.693 15.7079 20.3344 15.7079C20.9769 15.7079 21.5 15.1848 21.5 14.5434C21.5 13.902 20.9769 13.3789 20.3344 13.3789Z"
        fill={color}
      />
    </svg>
  );
};
