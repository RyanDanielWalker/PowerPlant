import { storeState } from "../src/main";
import { changeState } from "../src/main";

describe("storeState", () => {

  it(`should create an instance of plant`, () => {
    const plantOne = storeState()
    expect(plantOne()).toMatchObject({});
  })
})

describe('changeState', () => {
  it('should change the current state of plant', () => {
    const plantOne = storeState()
    const blueFood = changeState("soil")(5)
    const newState = plantOne(blueFood)
    expect(newState).toEqual({ soil: 5 })
  });
});



