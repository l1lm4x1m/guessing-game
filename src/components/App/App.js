import "./App.css";
import { Component } from "@utils/Component";
import { Header } from "@components/Header/Header";
import { Main } from "@components/Main/Main";
import { store } from "../../index";

export class App extends Component {
    #header;
    #main;
    constructor() {
        super(
            `
            <div id="root"></div>
        `,
            "#root",
        );

        this.#header = new Header();
        this.#main = new Main();
    }

    render() {
        this._HTMLElement.append(this.#header.render(), this.#main.render());
        store.dispatch({ type: "START" });

        return this._HTMLElement;
    }
}
