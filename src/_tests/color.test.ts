import { expect, test, describe } from "bun:test";
import { Color, BgColor } from "../colors";

describe("Color and BgColor functions", () => {
  describe("Valid numbers", () => {
    test("should return the colored text for a valid color number", () => {
      const result = Color(100)("Hello");
      expect(result).toEqual("\x1b[38;5;100mHello\x1b[0m");
    });

    test("should return the background-colored text for a valid color number", () => {
      const result = BgColor(200)("World");
      expect(result).toEqual("\x1b[48;5;200mWorld\x1b[0m");
    });
  });

  describe("Invalid numbers", () => {
    test("should return the text as-is for an invalid color number in Color", () => {
      const result = Color(-10)("Invalid");
      expect(result).toEqual("Invalid");
    });

    test("should return the text as-is for an invalid color number in BgColor", () => {
      const result = BgColor(300)("Invalid");
      expect(result).toEqual("Invalid");
    });
  });
});
