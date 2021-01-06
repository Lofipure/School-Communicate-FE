import * as ActionType from './actionType';

const loginModalStatusActionCreator = (value: boolean): ActionType => ({
  type: ActionType.LOGINMODALSTATUS,
  value,
});

export { loginModalStatusActionCreator };
