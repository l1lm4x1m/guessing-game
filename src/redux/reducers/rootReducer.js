import { gameStateReducer } from "@redux/reducers/gameStateReducer";
import { themeStateReducer } from "@redux/reducers/themeStateReducer";

function combineReducers(reducersMap) {
    return function (state, action) {
        const combineState = {};

        Object.entries(reducersMap).forEach(([key, reducer]) => {
            combineState[key] = reducer(state[key], action);
        });

        return combineState;
    };
}

export const rootReducer = combineReducers({ gameState: gameStateReducer, themeState: themeStateReducer });
