import React from "react"; 

const Canvas = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M4 8C4 5.17157 4 3.75736 5.00421 2.87868C6.00841 2 7.62465 2 10.8571 2H13.1429C16.3753 2 17.9916 2 18.9958 2.87868C20 3.75736 20 5.17157 20 8V17H4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path opacity={0.4} d="M10.6987 5.56588C11.9289 5.38957 13.9674 5.4601 12.2803 7.15266C10.1715 9.26836 7.00837 14.0289 10.6987 12.4421C14.3891 10.8554 15.9709 11.9132 14.3893 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 22L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 22L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default Canvas;