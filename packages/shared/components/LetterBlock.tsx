import { css } from "@emotion/css";
import tw, { theme } from "twin.macro";

const styles = {
  container: css`
    ${tw`font-serif text-my-black`}
    background: rgb(181, 181, 182);
    background: linear-gradient(
      128deg,
      rgba(181, 181, 182, 1) 0%,
      rgba(230, 230, 230, 1) 22%,
      rgba(230, 230, 230, 1) 80%,
      rgba(181, 181, 182, 1) 100%
    );
    padding: 20px 15px 20px;
    @media (min-width: ${theme`screens.md`}) {
      padding: 35px 35px 35px;
    }
    @media (min-width: ${theme`screens.lg`}) {
      padding: 50px 60px 50px;
    }
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  `,
  letter: css`
    background-image: repeating-linear-gradient(
      ${theme`colors.my-transparent`} 0px,
      ${theme`colors.my-transparent`} 39px,
      ${theme`colors.my-black`} 40px
    );
    background-position: 0 -8px;
    margin-top: -10px;
    ${tw`bg-repeat`}
    @media (min-width: ${theme`screens.lg`}) {
      ${tw`tracking-wider`}
      margin-top: -20px;
      background-image: repeating-linear-gradient(
        ${theme`colors.my-transparent`} 0px,
        ${theme`colors.my-transparent`} 79px,
        ${theme`colors.my-black`} 80px
      );
      background-position: 0 -15px;
      margin-top: -20px;
    }
    &::after {
      content: "";
      margin-top: -8px;
      ${tw`block lg:mt-[-15px]`}
    }
  `,
  letterInner: css`
    margin: 0 -5px 0 0;
    font-size: 0;
    line-height: 0;
    li {
      ${tw`inline whitespace-nowrap`}
      font-size: 17px;
      line-height: 40px;
      @media (min-width: ${theme`screens.lg`}) {
        font-size: 32px;
        line-height: 80px;
      }
    }
  `,
};

interface ILetterBlockProps {
  html?: string;
}
const fixHtml = (html: string): string => {
  // safari needs whitespace between li elements
  // to allow line break
  return html.replace(/<li>/gi, " <li>");
};
export const LetterBlock: React.FC<ILetterBlockProps> = ({ html }) => (
  <div className={styles.container}>
    <div className={styles.letter}>
      <div
        className={styles.letterInner}
        dangerouslySetInnerHTML={{ __html: fixHtml(html) }}
      ></div>
    </div>
  </div>
);
