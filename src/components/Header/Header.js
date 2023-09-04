import "./Header.css";
import { Component } from "@utils/Component";
import { Button } from "@components/Button/Button";
import { restartGame } from "@redux/actionsCreators";

export class Header extends Component {
    #restartGameButton;
    #nextLevelButton;
    constructor() {
        super(
            `
            <header class="header">
                <div class="container header__container"></div>
            </header>
        `,
            ".header",
        );

        this.#restartGameButton = new Button(
            "restart game",
            "header__restart-game-button",
            ["restartGame"],
            "restartGame",
        );
        this.#nextLevelButton = new Button("next level", "header__next-level-button", ["nextLevel"], "nextLevel");
    }

    render() {
        this._HTMLElement
            .querySelector(".header__container")
            .append(this.#restartGameButton.render(), this.#nextLevelButton.render());

        return this._HTMLElement;
    }
}
