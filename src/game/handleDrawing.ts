export default class HandleDrawing
{
    private c: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor()
    {
        this.c = document.querySelector('#myCanvas');
        this.ctx = this.c.getContext('2d');
    }

    draw = (): void =>
    {
        requestAnimationFrame(this.draw);
        
        this.drawBackground();
    }

    drawBackground(): void
    {
        this.c.width = this.c.offsetWidth;
        this.c.height = this.c.offsetHeight;

        this.ctx.fillStyle = "lightgreen";
        
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        this.ctx.fillRect(0, 0, this.c.width, this.c.height);
    }
}