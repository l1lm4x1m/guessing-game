import { INIT, RESTART_GAME, NEXT_LEVEL, CHECK_WIN, CHANGE_THEME } from "@redux/actionsTypes";

export const init = () => ({
    type: INIT,
});

export const restartGame = () => ({
    type: RESTART_GAME,
});

export const nextLevel = (level, tryCounts) => ({
    type: NEXT_LEVEL,
    payload: {
        level: level + 1,
        tryCounts: tryCounts + 1,
    },
});

export const checkWin = (level, tryCounts, userValue, secretNumber) => {
    if (userValue !== secretNumber) {
        return {
            type: CHECK_WIN,
            payload: {
                level,
                tryCounts: tryCounts - 1,
                userValue,
                secretNumber,
            },
        };
    }

    return {
        type: CHECK_WIN,
        payload: {
            level,
            tryCounts,
            userValue,
            secretNumber,
        },
    };
};

export const changeTheme = (color) => ({
    type: CHANGE_THEME,
    payload: color,
});
