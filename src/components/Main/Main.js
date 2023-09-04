import "./Main.css";
import { Component } from "@utils/Component";
import { Hero } from "@components/Hero/Hero";
import { Form } from "@components/Form/Form";

export class Main extends Component {
    #hero;
    #form;
    constructor() {
        super(
            `
            <main class="main">
                <div class="container main__container"></div>
            </main>
        `,
            ".main",
        );

        this.#hero = new Hero();
        this.#form = new Form();
    }

    render() {
        this._HTMLElement.querySelector(".main__container").append(this.#hero.render(), this.#form.render());

        return this._HTMLElement;
    }
}
