import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const plantOne = storeState();
const plantTwo = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

// const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

// const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const sunLight = changeState("light")(3)

$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feed').click(function () {
    const newState = plantOne(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#superHydrate').click(function () {
    const newState = plantOne(superWater);
    $('#water-value').text(`Water: ${newState.water}`)
  })

  $('#solarPower').click(function () {
    const newState = plantOne(sunLight);
    $('#light-value').text(`Light: ${newState.light}`)
  })

  $('#feed2').click(function () {
    const newState = plantTwo(blueFood);
    $('#soil-value2').text(`Soil: ${newState.soil}`);
  });
  $('#superHydrate2').click(function () {
    const newState = plantTwo(superWater);
    $('#water-value2').text(`Water: ${newState.water}`)
  })
  $('#solarPower2').click(function () {
    const newState = plantTwo(sunLight);
    $('#light-value2').text(`Light: ${newState.light}`)
  })

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function () {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = plantOne();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
    $('#light-value').text(`Light: ${currentState.light}`);
  });
  $('#show-state2').click(function () {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = plantTwo();
    $('#soil-value2').text(`Soil: ${currentState.soil}`);
    $('#water-value2').text(`Water: ${currentState.water}`);
    $('#light-value2').text(`Light: ${currentState.light}`);
  });
});