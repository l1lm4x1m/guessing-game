import { init } from "@redux/actionsCreators";

export function createStore(rootReducer) {
    let state = rootReducer({}, init());
    const subscribers = [];

    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach((sub) => sub());
        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        },
    };
}
