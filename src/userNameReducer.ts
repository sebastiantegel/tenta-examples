interface IAction {
  type: string;
  payload: string;
}

export const userNameReducer = (userName: string, action: IAction) => {
  switch (action.type) {
    case "ADDED":
      return action.payload;

    default:
      return userName;
  }
};
