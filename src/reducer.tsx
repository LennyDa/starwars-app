import {ACTIONS} from "./actions/types.tsx";

export const reducer = (items, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DATA:
            return action.payload;
        case ACTIONS.RESET:
            return {};

            default:
                return items
    }
}