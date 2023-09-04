import { CHECK_WIN, INIT, NEXT_LEVEL, RESTART_GAME } from "@redux/actionsTypes";
import { GameState } from "@utils/GameState";

export function gameStateReducer(state, action) {
    switch (action.type) {
        case INIT:
        case RESTART_GAME:
            return new GameState();
        case NEXT_LEVEL:
            return new GameState(action.payload.level, action.payload.tryCounts);
        case CHECK_WIN:
            return new GameState(
                action.payload.level,
                action.payload.tryCounts,
                action.payload.userValue,
                action.payload.secretNumber,
            );
        default:
            return {
                ...state,
            };
    }
}
