const checkNumber = (n: number) => {
  if (n > 255 || n < 0) {
    console.log(
      BgColor(9)(` Error `) +
        Color(9)(
          ` Invalid number: ${n}\n\n   Number must be between 0 and 255\n`
        )
    );
    return false;
  }
  return true;
};

const Reset = "\x1b[0m";

export const Color = (c: number) => {
  if (!checkNumber(c)) return (txt: unknown) => `${txt}`;
  return (txt: unknown) => `\x1b[38;5;${c}m${txt}${Reset}`;
};

export const BgColor = (c: number) => {
  if (!checkNumber(c)) return (txt: unknown) => `${txt}`;
  return (txt: unknown) => `\x1b[48;5;${c}m${txt}${Reset}`;
};
