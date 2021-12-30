//test function getFullName with different types of parameters
import { getFullName } from "../utils/functions";

describe("getFullName", () => {
  it("should return full name when a player as a firstName and lastName", () => {
    const numero14 = {
      firstName: "Sidney",
      lastName: "Govou",
    };
    expect(getFullName(numero14)).toBe("Sidney Govou");
  });
  it("should return only the lastName when a player as only a lastName", () => {
    const freekickMaster = {
      lastName: "Juninho",
    };
    expect(getFullName(freekickMaster)).toBe("Juninho");
  });
  it("should return only the firstName when a player as only a firstName", () => {
    const giveMeAGoodPass = {
      firstName: "Memphis",
    };
    expect(getFullName(giveMeAGoodPass)).toBe("Memphis");
  });
});
