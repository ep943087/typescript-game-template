import Game from "./game";
import {states} from './state';

export default class HandleEvents
{
    private canvas: HTMLCanvasElement;
    private playButton: HTMLButtonElement;
    private resumeButton: HTMLButtonElement;
    private pauseButton: HTMLButtonElement;
    private menu: HTMLDivElement;

    constructor(private game: Game)
    {
        this.canvas = document.querySelector("#myCanvas");
        this.pauseButton = document.querySelector('.pause-button');
        this.resumeButton = document.querySelector(".resume-button");
        this.playButton = document.querySelector(".play-button");
        this.menu = document.querySelector(".canvas-menu");
    }

    addEventListeners(): void
    {
        this.playButton.addEventListener('click',this.handlePauseButtonClicked);
    }

    handlePauseButtonClicked = (e: Event): void =>
    {
        if(this.game.getState().getState() !== states.playing)
        {
            this.game.getState().setState(states.playing);
            this.menu.classList.add('hide');
        }
    }
}