import { storeState } from "../src/main";

describe("storeState", () => {

  it(`should create an instance of plant`, () => {
    const plantOne = storeState()
    expect(plantOne()).toMatchObject({});
  })
})



