// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

// const changeState = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   }
// }

let plant = { soil: 0, light: 0, water: 0 }

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil")
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

const goodWater = changeState("water")(5)


const storeState = () => {
  let currentState = { soil: 0, light: 0, water: 0 };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const stateControl = storeState()
const fedPlant = stateControl(blueFood)
const plantFedAgain = stateControl(greenFood)
const wateredPlant = stateControl(goodWater)
const siccPlant = stateControl(yuckyFood)