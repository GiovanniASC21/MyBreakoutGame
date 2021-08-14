let userPoints = 0;

let ball;
let rectxPos = 180
let rectyPos = 490
 
let ballxPos = 250;
let ballyPos = 250;
 
let ballxSpeed = 3
let ballySpeed = 3;

let ballxDirection = 3;
let ballyDirection = 3;  


let rectLeft, rectRight, rectTop, rectBottom;
let ballLeft, ballRight, ballTop, ballBottom;

let bricks = [];


function setup(){
    createCanvas(500, 500);
    background(0, 0, 0); 
    fill(255)
    textSize( 40)
     text ( "CLICK TO PLAY!", 100, 250)
    let colors = [];
    colors.push(color(255,0 ,0))
    colors.push(color(155, 235, 222))
    colors.push(color(192, 211, 13))
    colors.push(color(200, 111, 211))
    colors.push(color(180, 97, 130))
    
    
    
    const bricksPerRow = 5
    const brickWidth = width / bricksPerRow
    for (let i = 0; i <bricksPerRow; i++){

    brick = new Brick (createVector(brickWidth  * i + 50, 0), brickWidth, 60, colors[floor(random(0, colors.length))])
    bricks.push(brick);
    }
    
}

function draw() {
  
  if (gameOn == true){
  
  
  
  
    background(0);



    




  
    
    
    
    
    fill(255, 0, 0);
  rectMode(CENTER)
    rect(rectxPos, rectyPos, 150, 25);
  
    // rectangle movement code
    if (keyIsDown(LEFT_ARROW)) {
        rectxPos -= 8;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        rectxPos += 8;
    }

    



// Ball Bouncing off the walls
if (ballxPos < 12.5 || ballxPos > (500 - 12.5)){
       let r = random(0, 255)
       let g = random (0, 255)
       let b = random (0, 255)
       
       fill(r, g, b)
       ballxDirection *= -1;
       
   }
   if (ballyPos < 25){
    let r = random(0,255)
    let g = random (0, 255)
    let b = random (0, 255)
    fill(r, g, b)
    ballyDirection *= -1;
   }
    if (ballyPos > 475){
      ballyDirection = 1
    }
    


    fill(0, 255, 0);

   ellipse(ballxPos, ballyPos, 25, 25);

   ballxPos = ballxPos + (ballxSpeed * ballxDirection);
   ballyPos = ballyPos + (ballySpeed * ballyDirection);



   rectLeft = rectxPos - 75;
   rectRight = rectxPos + 75;
   rectTop = rectyPos - 12.5;
   rectBottom = rectyPos + 12.5;
 
   ballLeft = ballxPos - 12.5;
   ballRight = ballxPos + 12.5;
   ballTop = ballyPos - 12.5;
   ballBottom = ballyPos + 12.5;

  
   if (rectLeft > ballRight || rectRight < ballLeft  || rectTop > ballBottom){
    console.log("your good");
    }
    
   if (rectRight > ballLeft && rectLeft < ballRight && rectTop < ballBottom){
        

    
    ballyPos = rectyPos - 35
    ballyDirection *= -1;
        
        }


        



//keep the bouncer on the screen

if (rectxPos < 75){
    rectxPos = 75;
}
if (width - rectxPos < 75){
   rectxPos = 425;
}

//Player's Score

// Brick Breaking + Point system
for (let i = bricks.length - 1; i >= 0; i--){
   
    const brick = bricks[i]
    brick.display();

   if (brick.isColliding(ball)) {
       
        ballyDirection * -1;
        bricks.splice(i, 1);
        userPoints = userPoints + 1;
    }

}
fill(255)
text(("Score: " + userPoints), width - 95, 20 );
textSize(15)

  }
   //Game lost code
   if (userPoints === 5 || ballyPos > width){
       gameOn = false
   }
    if (gameOn == false && userPoints < 5){
       
    
    background (0)
    fill (255);
    textSize(30);
     text("Better Luck Next Time!", 0, height / 2);
     text("Final Score: " + userPoints, width / 2 - 150, height / 2 + 50)
       }
       if (gameOn == false && userPoints === 5){
       
    
        background (0)
        fill (255);
        textSize(50);
         text("Nice Job!", width / 2 - 125, height / 2);
         text("Final Score: " + userPoints, width / 2 - 150, height / 2 + 50)
           }

 }
  

 let gameOn;

  

function mouseClicked() {
  
   ballxPos = rectxPos;
   ballyPos = rectyPos - 60;

   ballxSpeed = 4
   ballySpeed = 4

   ballxDirection = random(0, 3);
   ballyDirection = random(0, 3);  
 gameOn = true
}








