export class GameState {
    level;
    tryCounts;
    userValue;
    secretNumber;
    isWin;
    isGameOver;
    isHiddenForm;
    disabledButtonsMap;
    heroContent;
    labelContent;
    errorMessage;

    constructor(level = 1, tryCounts = 1, userValue, secretNumber) {
        this.level = level;
        this.tryCounts = tryCounts;
        this.userValue = userValue;
        this.secretNumber = secretNumber || this.#getSecretNumber();
        this.isWin = this.#getWinState();
        this.isGameOver = this.#getGameOverState();
        this.isHiddenForm = this.#getHiddenFormState();
        this.disabledButtonsMap = this.#getDisabledButtonsMap();

        this.heroContent = this.#getHeroContent();
        this.labelContent = this.#getLabelContent();
        this.errorMessage = this.#getErrorMessage();
    }

    #getSecretNumber(min = 1, max = this.level + 1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    #getWinState() {
        return (this.userValue && this.userValue === this.secretNumber) || false;
    }

    #getGameOverState() {
        if (!this.isWin && this.tryCounts === 0) return true;
        if (this.isWin && this.level === 10) return true;

        return false;
    }

    #getHiddenFormState() {
        return this.isGameOver || false;
    }

    #getDisabledButtonsMap() {
        return {
            restartGame: false,
            nextLevel: !this.isWin || this.isGameOver,
            check: this.isWin || this.isGameOver,
        };
    }

    #getHeroContent() {
        switch (this.isGameOver) {
            case true: {
                if (this.isWin)
                    return `
                        <h1 class="hero__secret-number">${this.secretNumber}</h1>
                        <h2 class="hero__game-condition-info">game over you win</h2>
                    `;
                else
                    return `
                        <h1 class="hero__secret-number">${this.secretNumber}</h1>
                        <h2 class="hero__game-condition-info">game over you lose</h2>
                    `;
            }
            case false: {
                if (this.isWin)
                    return `
                        <h1 class="hero__secret-number">${this.secretNumber}</h1>
                    `;
                else
                    return `
                        <h1 class="hero__secret-number">???</h1>
                    `;
            }
            default:
                break;
        }
    }

    #getLabelContent() {
        return `Enter number from 1 to ${this.level + 1}`;
    }

    #getErrorMessage() {
        if (this.userValue && this.userValue > this.secretNumber) return "too much";
        if (this.userValue && this.userValue < this.secretNumber) return "too little";

        return "";
    }
}
