import { CHANGE_THEME, INIT } from "@redux/actionsTypes";
import { ThemeState } from "@utils/ThemeState";

export function themeStateReducer(state, action) {
    switch (action.type) {
        case INIT:
            return new ThemeState("dark");
        case CHANGE_THEME:
            return new ThemeState(action.payload);
        default:
            return {
                ...state,
            };
    }
}
