console.log('开始执行JavaScript程序！')

$(document).ready(function(){
    $("#greedysnake_start").bind("click",snakeGameStart)
});

function snakeGameStart(){

    var snake = $('.snake');
    var food = $('.food')[0];
    snake[0].speed = 375;
    var score = snake.length;
    $('.score')[0].innerHTML = '得分为：' + score;

    // snake_head
    snake[0].drc_by_keybord = 0; // direction, 0 for right, 1 for up, 2 for left, 3 for down
    snake[0].drc = 0; // direction, 0 for right, 1 for up, 2 for left, 3 for down

    // check the snake is safe or not
    snake[0].safeCheck = function(){
        var heat_wall = false; // check if the head heat the wall
        if(parseInt(snake[0].style.top)<500&&parseInt(snake[0].style.top)>-10){
            if(parseInt(snake[0].style.left)<500&&parseInt(snake[0].style.left)>-10){
            }else{
                heat_wall = true;
                console.log('the snake heat the wall');
            }
        }else{
            heat_wall = true;
            console.log('the snake heat the wall');
        }

        var heat_body = false; // check if the head heat the body
        for(i=0;i<snake.length-1;i++){
            if(snake[0].style.left == snake[i+1].style.left){
                if(snake[0].style.top == snake[i+1].style.top){
                    heat_body = true;
                    console.log('the snake heat its body');
                }
            }
        }

        if(!heat_wall&&!heat_body){
            return true
        }else{
            return false
        }
    }

    // check the snake ate the food or not
    snake[0].checkFoodEat = function(){
        if(snake[0].style.left==food.style.left&&snake[0].style.top==food.style.top){
            return true
        }else{
            return false
        }   
    }

    // change the direction of snake head by the key you press
    snake[0].keyPressCheck = function(){
        let keycode = window.event.keyCode;
        // change drc
        switch(keycode){
            case 37: // left
                console.log('left')
                snake[0].drc_by_keybord = 2;
                break
            case 38: // up
                console.log('up')
                snake[0].drc_by_keybord = 1;
                break
            case 39: // right
                console.log('right')
                snake[0].drc_by_keybord = 0;
                break
            case 40: // down
                console.log('down')
                snake[0].drc_by_keybord = 3;
                break
        }
    }

    // move head by the direction
    snake[0].headMove = function(){
        // move the head by direction
        snake_head_left = parseInt(snake[0].style.left);
        snake_head_top = parseInt(snake[0].style.top);
        switch(snake[0].drc){
            case 0:
                snake[0].style.left = snake_head_left + 10;
                break;
            case 1:
                snake[0].style.top = snake_head_top - 10;
                break;
            case 2:
                snake[0].style.left = snake_head_left - 10;
                break;
            case 3:
                snake[0].style.top = snake_head_top + 10;
            }
    }

    // define the body move function
    for(i=0;i<snake.length-1;i++){
        snake[i+1].bodyMove = function(j){// define the function
            snake[j].style.left = snake[j-1].style.left;
            snake[j].style.top = snake[j-1].style.top;
        }
        // console.log(snake[i+1].bodyMove);
    }

    // band keyPressCheck to keydown event
    document.addEventListener('keydown' , snake[0].keyPressCheck, false)


    function snakeMove(){
        if(snake[0].safeCheck()){// if the snake is safe
            if(!(snake[0].drc%2 == snake[0].drc_by_keybord%2)){// check the key_press and make it a direction
                snake[0].drc = snake[0].drc_by_keybord;
            }
            // move!!!
            for(i=0;i<snake.length-1;i++){ // body move
                snake[snake.length-1-i].bodyMove(snake.length-1-i);
            }
            snake[0].headMove(); // head move  
        }else{
            clearInterval(interval);
            alert('game over!');
        }
    }

    function snakeExtend(){
        var extend_part = document.createElement('div');
        extend_part.className = "snake";
        var gamebox = document.getElementsByClassName('gamebox')[0];
        gamebox.appendChild(extend_part);
        // define the new body's move function
        snake[snake.length-1].bodyMove = function(j){
            snake[j].style.left = snake[j-1].style.left;
            snake[j].style.top = snake[j-1].style.top;
        }
    }

    function refreshScore(){
        score = snake.length;
        document.getElementsByClassName('score')[0].innerHTML = '得分为：' + score;
    }

    function refreshSpeed(){
        snake[0].speed = 3000/score;
    }

    function startGame(){
        if(snake[0].checkFoodEat()){ // check the snake ate the food or not
            snakeExtend();// extend the snake body

            refreshScore();
            refreshSpeed();

            // because the speed changed, interval should be restarted
            clearInterval(interval);
            interval = setInterval(startGame,snake[0].speed);//restart the INTERVAL
            console.log(snake[0].speed);

            // replace the food
            food.style.left = parseInt(Math.random()*50)*10
            food.style.top = parseInt(Math.random()*50)*10
        }
        snakeMove();
    }


    // put them in the right place
    initGame(snake, food);

    // move
    var interval = setInterval(startGame,snake[0].speed)
}

function initGame(snake, food){
    // put the snake in right place
    console.log(snake)
    snake[0].style.top = "250px";
    snake[0].style.left = "250px";
    for(i=0;i<snake.length-1;i++){
        snake[i+1].style.left = (parseInt(snake[i].style.left) - 10)+"px";
        snake[i+1].style.top = (parseInt(snake[i].style.top))+"px";
    }
    // put the food in random place
    food.style.left = (parseInt(Math.random()*50)*10)+"px"
    food.style.top = (parseInt(Math.random()*50)*10)+"px"
    console.log('init complete!')
}
