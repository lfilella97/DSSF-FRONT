import wrapper from "../../mocks/Wrapper";
import { renderHook } from "@testing-library/react";
import useStructures from "./useStructures";
import { store } from "../../store/store";

const spyDispatch = jest.spyOn(store, "dispatch");
beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given the createStructure function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch three times", async () => {
      const {
        result: {
          current: { createStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });

      global.fetch = jest.fn().mockReturnValue(JSON.stringify({ ok: true }));
      const newStructure = new FormData();

      await createStructure(newStructure);

      expect(spyDispatch).toBeCalledTimes(3);
    });
  });

  describe("When it is called with wrong form data", () => {
    test("Then it should dispatch three times", async () => {
      const {
        result: {
          current: { createStructure },
        },
      } = renderHook(() => useStructures(), { wrapper });

      await createStructure(new FormData());

      expect(spyDispatch).toBeCalledTimes(3);
    });
  });
});
