import "./InfoBlock.css";
import { Component } from "@utils/Component";
import { store } from "../../index";
import { changeTheme } from "@redux/actionsCreators";

export class InfoBlock extends Component {
    constructor() {
        super(
            `
            <div class="info-block">
                <div class="info-block__level-row">
                    Level: <span class="info-block__level dep-level"></span>
                </div>
                <div class="info-block__try-counts-row">
                    Try counts: <span class="info-block__try-counts dep-tryCounts"></span>
                </div>
                <div class="info-block__theme-row">
                    <label for="theme">Theme</label>
                    <select 
                        name="theme" 
                        id="theme" 
                        class="info-block__theme"
                    >
                        <option value="dark" class="info-block__dark-mode">dark</option>
                        <option value="light" class="info-block__light-mode">light</option>
                    </select>
                </div>
            </div>
        `,
            ".info-block",
            ["level", "tryCounts"],
        );
    }

    render() {
        this._HTMLElement.querySelector(".info-block__theme").addEventListener("change", (event) => {
            const { value } = event.target;

            store.dispatch(changeTheme(value));
        });

        return this._HTMLElement;
    }
}
