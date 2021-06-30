import ctl from "@netlify/classnames-template-literals";

export const HeadingB: React.FC = ({ children }) => {
  const rootClass: string = ctl(`
    pl-[30px]
    font-bold text-my-orange
    text-base lg:text-lg 
  `);
  const markerClass: string = ctl(`
    border-solid border-my-orange bg-lp-orange
    inline-block align-top relative top-[0.4em]
    mr-[12px] ml-[-30px]
    border-t-[18px] border-r-[18px] border-b-0 border-l-0
  `);
  return (
    <div className={rootClass}>
      <span className={markerClass}></span>
      <div className="inline-block align-top">{children}</div>
    </div>
  );
};