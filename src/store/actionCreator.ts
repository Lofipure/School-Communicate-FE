import * as ActionType from './actionType';

const loginModalStatusActionCreator = (value: boolean) => ({
  type: ActionType.LOGINMODALSTATUS,
  value,
});

export { loginModalStatusActionCreator };
