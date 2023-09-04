import "./Form.css";
import { Component } from "@utils/Component";
import { InfoBlock } from "@components/InfoBlock/InfoBlock";
import { Button } from "@components/Button/Button";
import { store } from "../../index";
import { checkWin } from "@redux/actionsCreators";

export class Form extends Component {
    #infoBlock;
    #checkButton;
    constructor() {
        super(
            `
            <form class="form">
                <div class="form__input-row">
                    <label for="secret" class="form__label dep-labelContent"></label>
                    <input type="text" class="form__input" id="secret" name="secret" />
                    <span class="form__error-message dep-errorMessage"></span>
                </div>
                <div class="form__submit-row"></div>
            </form>
        `,
            ".form",
            ["labelContent", "errorMessage"],
        );

        this.#checkButton = new Button("check", "form__check-button", ["check"]);
        this.#infoBlock = new InfoBlock();
    }

    render() {
        this._HTMLElement
            .querySelector(".form__submit-row")
            .append(this.#checkButton.render(), this.#infoBlock.render());

        this._HTMLElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const { gameState } = store.getState();
            const { level, tryCounts, secretNumber } = gameState;
            const userValue = Number(event.currentTarget.secret.value);

            if (userValue) store.dispatch(checkWin(level, tryCounts, userValue, secretNumber));
            event.currentTarget.secret.value = "";
        });

        return this._HTMLElement;
    }
}
