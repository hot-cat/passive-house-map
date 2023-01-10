import { createStore } from "redux";

const initialState =
{
  value1: 0,
  value2: 0,
  result: 0
};

const Calc = (state = initialState, action) => {
  console.log(state);  

  switch (action.type) {
    case "ADD":
      {    
        var res = Number(state.value1) + Number(state.value2);
         return Object.assign({}, state, { result: res});
      }
      case "INPUT_CHANGE1":
      {
console.log("aaaa:" + state.value1);
        return Object.assign({}, state, { value1: action.value1 });
      }
      case "INPUT_CHANGE2":
      {
        return Object.assign({}, state, { value2: action.value2 });

      }
      case "FLY_TO":
        {
          
console.log(state.lat + ", " + state.lon);
return Object.assign({}, state, {lat: action.lat, lon: action.lon });
}
    default:
      return state;
  }
};

const CalcStore = createStore(Calc);

export default CalcStore;
