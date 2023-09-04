import "./Button.css";
import { Component } from "@utils/Component";
import { store } from "../../index";
import { nextLevel, restartGame } from "@redux/actionsCreators";

export class Button extends Component {
    #actionType;
    constructor(content, className, deps, actionType) {
        super(
            `
                <button class="button ${className}">${content}</button>
            `,
            ".button",
            deps,
        );

        this.#actionType = actionType;
    }

    render() {
        if (!this.#actionType) return super.render();

        this._HTMLElement.addEventListener("click", () => {
            switch (this.#actionType) {
                case "restartGame": {
                    store.dispatch(restartGame());
                    break;
                }
                case "nextLevel": {
                    const { gameState } = store.getState();
                    const { level, tryCounts } = gameState;
                    store.dispatch(nextLevel(level, tryCounts));
                    break;
                }
                default:
                    break;
            }
        });

        return this._HTMLElement;
    }
}
