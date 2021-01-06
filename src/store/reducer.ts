import { LOGINMODALSTATUS } from './actionType';
const defaultState: StateType = {
  loginModalStatus: false,
};

const reducer = (state = defaultState, action: ActionType): StateType => {
  if (action.type === LOGINMODALSTATUS) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.loginModalStatus = action.value;
    return newState;
  }
  return state;
};

export default reducer;
