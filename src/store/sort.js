import { createStore } from "redux";

const initialState =
{
  text: ''
};

const sorter = (state = initialState, action) => {

  switch (action.type) {
    case "SORT":
      {
        var res = state.text.split(" ");
        res.sort((a, b) => a - b);
        return Object.assign({}, state, { text: res });
      }
      case "REVERSE":
      {
        var newString = "";
        for (var i = state.text.length - 1; i >= 0; i--) {
            newString += state.text[i];
        }
      return Object.assign({}, state, { text: newString });
      }
    case "INPUT_CHANGE":
      {
        return Object.assign({}, state, { text: action.text });
      }
    default:
      return state;
  }
};

const store2 = createStore(sorter);

export default store2;
