export enum states {
    playing = 0,
    pause,
    menu,
}

export default class State
{
    constructor(private state: states = states.menu)
    {}

    public getState(): states
    {
        return this.state;
    }

    public setState(state: states): void
    {
        switch(state)
        {
            case states.playing:
                break;
            case states.menu:
                break;
            case states.pause:
                break;
        }
    }
}