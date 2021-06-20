import HandleEvents from "./handleEvents";
import HandleDrawing from "./handleDrawing";
import State, {states} from "./state";

export default class Game
{
    private handleEvents: HandleEvents;
    private handleDrawing: HandleDrawing;
    private state: State;

    constructor()
    {
        this.handleEvents = new HandleEvents(this);
        this.handleDrawing = new HandleDrawing();
        this.state = new State();
    }

    initialize(): void
    {
        this.handleDrawing.draw();
        this.handleEvents.addEventListeners();
    }

    getState(): State
    {
        return this.state;
    }
}