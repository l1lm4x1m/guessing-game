import "./Hero.css";
import { Component } from "@utils/Component";

export class Hero extends Component {
    constructor() {
        super(
            `
            <div class="hero">
                <div class="hero__content dep-heroContent"></div>
            </div>
        `,
            ".hero",
            ["heroContent"],
        );
    }
}
