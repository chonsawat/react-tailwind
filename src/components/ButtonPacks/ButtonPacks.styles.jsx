import tw, { styled, css } from "twin.macro";

export const ButtonBlack = styled.button(() => [
  css`
    border: 2px solid #1a1a1a;
    border-radius: 15px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;

    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    padding: 16px 24px;
    text-decoration: none;
  `,
  tw`inline-block m-5 w-[25%] bg-black border-black border-solid hover:bg-white hover:text-black`,
  tw`hover:-translate-y-1 active:-translate-x-1`,
]);

export const ButtonWhite = tw(
  ButtonBlack
)`bg-white text-gray-900 hover:bg-cyan-400 hover:text-white`;
