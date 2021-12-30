import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import { Results } from "../src/components/Results";

describe("should be aware of singular and plurals", () => {
  it("renders résultat without s when there is no result", () => {
    const { getByText } = render(<Results results={0} />);
    expect(getByText("(L1) 0 résultat")).toBeTruthy();
  });
  it("renders résultat without s when there is 1 result", () => {
    const { getAllByText, queryByText } = render(<Results results={1} />);
    const plural = queryByText(/résultats/i);
    const singular = getAllByText(/résultat/i);
    expect(singular.length > 0).toBe(true);
    expect(plural).toBeNull();
  });
  it("renders résultat with an s when there is more than 1 results", () => {
    const { getByText } = render(<Results results={232} />);
    expect(getByText("(L1) 232 résultats")).toBeTruthy();
  });
});
