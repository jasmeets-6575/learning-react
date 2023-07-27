import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { data } from "../../data";

interface PersonType {
  id: number;
  name: string;
}

export interface State {
  people: PersonType[];
}

export interface ClearListAction {
  type: typeof CLEAR_LIST;
  payload?: PersonType;
}

export interface ResetListAction {
  type: typeof RESET_LIST;
  payload?: PersonType;
}

export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: {
    id: number;
  };
}

// Union of all possible action types
export type Action = ClearListAction | ResetListAction | RemoveItemAction;

const reducer = (state: State, action: Action): State => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => {
      if (action.payload) {
        return person.id !== action.payload.id;
      }
    });

    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
