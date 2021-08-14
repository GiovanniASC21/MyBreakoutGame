class Brick {
    constructor(position, width, height, color){
        this.position = position
        this.width = width 
        this.points = 1
        this.height = height
        this.color = color
    }
display(){
    fill(this.color)
    rect(this.position.x, this.position.y, this.width, this.height)
    }


isColliding(ball){
    if(ballyPos - 12.5 <= this.position.y + 30 &&
        ballyPos + 12.5 >= this.position.y - 30 &&
        ballxPos + 12.5 >= this.position.x - 50 &&
        ballxPos - 12.5 <= this.position.x + 50){
            return true
        } 
    }
}
