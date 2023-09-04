import { store } from "../index";

export class Component {
    #html;
    #selector;
    #deps;
    _HTMLElement;
    constructor(html, selector, deps = []) {
        this.#html = html;
        this.#selector = selector;
        this.#deps = deps;

        this.#createElement();
        this.#subscribe();
    }

    #createElement() {
        const template = document.createElement("template");
        template.innerHTML = this.#html;
        this._HTMLElement = template.content.querySelector(this.#selector);
    }

    #subscribe() {
        const isContentElement = ["DIV", "FORM"].includes(this._HTMLElement.tagName);
        const isButtonElement = this._HTMLElement.tagName === "BUTTON";
        const isUnstableElement = this._HTMLElement.tagName === "FORM";
        const isRootElement = this._HTMLElement.id === "root";

        if (isContentElement) {
            store.subscribe(() => {
                const { gameState } = store.getState();

                this.#deps.forEach((dep) => {
                    const depValue = gameState[dep];
                    const element = this._HTMLElement.querySelector(`.dep-${dep}`);

                    if (depValue !== undefined && element) {
                        element.innerHTML = depValue;
                    } else {
                        throw new Error(`Uncorrected dep for ${this._HTMLElement.className}`);
                    }
                });
            });
        }
        if (isButtonElement) {
            store.subscribe(() => {
                const { gameState } = store.getState();
                const { disabledButtonsMap } = gameState;

                this.#deps.forEach((dep) => {
                    const depValue = disabledButtonsMap[dep];

                    if (depValue !== undefined) {
                        this._HTMLElement.disabled = depValue;
                    } else {
                        throw new Error(`Uncorrected dep for ${this._HTMLElement.className}`);
                    }
                });
            });
        }
        if (isUnstableElement) {
            store.subscribe(() => {
                const { gameState } = store.getState();
                const { isHiddenForm } = gameState;

                this._HTMLElement.classList.toggle("form_hidden", isHiddenForm);
            });
        }
        if (isRootElement) {
            store.subscribe(() => {
                const { gameState } = store.getState();
                const { themeState } = store.getState();
                const { isWin } = gameState;
                const { color } = themeState;

                this._HTMLElement.classList.toggle("win", isWin);
                if (color === "light") this._HTMLElement.setAttribute("theme", "light");
                else this._HTMLElement.removeAttribute("theme");
            });
        }
    }

    render() {
        return this._HTMLElement;
    }
}
