function BlockMap() {
    this.col = 12
    this.row = 20
    this.init();
}
BlockMap.prototype.init = function () {
    // console.log("start map");
    for (var i = 0; i < this.row; i++) {
        var $tr = $("<tr></tr>");
        for (var j = 0; j < this.col; j++) {
            var $td = $("<td></td>");
            $td.appendTo($tr);
        }
        $tr.appendTo($("#block").children("table"));// 因为display中也有table，这里得精确一点，如果用$("#block table")就都渲染了
    }
}
var block_map = new BlockMap;  // 实例化地图



blocks = { // 储存方块形状
    "Z": [
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    "S": [
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    "O": [
        [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    "T": [
        [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    "I": [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ],
    "J": [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ]
    ],
    "L": [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ]
}

block_types_matrx = ['T', 'L', 'J', 'S', 'Z', 'O', 'I']//用于随机生成



function Block(block_type, direction) {
    this.block_type = block_type; //  传入类型
    this.direction = direction; //  传入方向
    this.next_type = game.random_type;
    this.next_direction = parseInt(Math.random() * 4)//每个块都有四个方向，初始化中随机选择一个方向
    this.speed = 400;
    this.init();
}
Block.prototype.init = function () {
    this.row = 0;
    this.col = 4;//初始显示时应该为居中显示
    this.setColor();
}

Block.prototype.removeColor = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (game.matrx[block.row + i][block.col + j + 1] == 0) {//判断矩阵中是否已经有方块了
                var pix = $("#block tr").eq(i + this.row).children("td").eq(j + this.col)
                pix.removeClass(this.block_type)//去掉样式，这里让样式和block_type同名，非常好用
            }
        }
    }
}
Block.prototype.setColor = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var pix = $("#block tr").eq(i + this.row).children("td").eq(j + this.col)
            if (blocks[this.block_type][this.direction][i][j] == 1) {
                pix.addClass(this.block_type)//加上样式，这里让样式和block_type同名，非常好用
            }
        }
    }
}
Block.prototype.rotate = function () {
    this.removeColor();
    if (this.direction < 3) {
        this.direction += 1;//向右选装90°
    } else {
        this.direction = 0
    }
    this.setColor();
}
Block.prototype.moveLeft = function () {
    this.removeColor();
    this.col -= 1;
    this.setColor();
}
Block.prototype.moveRight = function () {
    this.removeColor();
    this.col += 1;
    this.setColor();
}
Block.prototype.fall = function () {
    this.removeColor();
    this.row += 1;
    this.setColor();
}
Block.prototype.fallFast = function () {
    // 停止下落计时器，因为要马上落到底部
    clearInterval(game.interval);
    // 开启一个特别快的定时器，尽力而为
    var fast_interval = setInterval(function () {
        if (game.safeCheck(block.row + 1, block.col, block.direction)) {//如果下降安全的话就下降
            block.fall();
        } else {//到底部了就停掉这个定时器
            clearInterval(fast_interval)
        }
    }, 0);
    // 开启正常下落定时器
    game.timer();
}




function Game() {
    this.score = 0;
    this.matrx = [] //存放计算矩阵
    this.init();
    this.interval = 1;
}
Game.prototype.init = function () {
    // 这里是规则的核心，创建一个全零矩阵，与地图每个格子相对应，外围包上一圈1，0为空白，1为墙壁或者块
    // 块矩阵在内部运动，相应的位置相加，相加后小于2（0或1），则可以运动，等于2，则表示撞墙或者撞块
    // 这样一个循环就能看出这个块对象能不能移动、转动和下落
    // 每下落一个块就更新以下该矩阵，再加一个循环可判断出是否应该消行，消行就直接在矩阵上改正，一行1改为一行0
    for (var j = 0; j < block_map.row; j++) {
        var temp_row = []
        temp_row.push(1);// 围墙左边
        for (var i = 0; i < block_map.col; i++) {
            temp_row.push(0)
        }
        temp_row.push(1);// 围墙右边
        temp_row.push(1);// 围墙右边，右边转向可能伸出两层，所以这里围墙围两层

        this.matrx.push(temp_row);
    }
    var temp_bottom = []
    for (var k = 0; k < block_map.col + 3; k++) {//左面一层，右面两层，一共三层
        temp_bottom.push(1)
    }
    this.matrx.push(temp_bottom)// 围墙底部(2层，防止计算出错)
    this.matrx.push(temp_bottom)
    this.matrx.push(temp_bottom)

    this.random_type = this.randomType();
    block = new Block(this.random_type, 0);  // 实例化方块，第一次方向直接为0就行了（因为没有写随机化的函数），后面会通过随机化语句实现
    this.displayNextBlock();//显示下一个
}
Game.prototype.randomType = function () {
    return block_types_matrx[parseInt(Math.random() * block_types_matrx.length)]
}
Game.prototype.safeCheck = function (block_row, block_col, block_direction) {
    //这里将三个位置属性利用变量的形式传进来，即保证了实时变化，有保证了不会改变原有方块位置属性的值
    var safe_or_not = true;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var check = this.matrx[block_row + i][block_col + j + 1] + blocks[block.block_type][block_direction][i][j]
            if (check > 1) {
                safe_or_not = false;
                break;
            }
        }
    }
    return safe_or_not
}
Game.prototype.update_matrx = function () {
    // 将块对象矩阵放上去
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            this.matrx[block.row + i][block.col + j + 1] += blocks[block.block_type][block.direction][i][j];//记录已经落下的方块位置，并将矩阵中对应的位置从0变1
        }
    }

    // 判断是否得分
    var score_i = [];//记录得分的行
    for (var i = 0; i < block_map.row; i++) {
        var sum = 0;
        for (var j = 0; j < block_map.col; j++) {
            sum += this.matrx[i][j + 1];
        }

        // console.log(sum,this.matrx[i].length)
        if (sum + 3 == this.matrx[i].length) {  // 如果求和为数组长度，那间接说明全为1，这里sum+3是因为矩阵中还有两面围墙且右面两层
            score_i.push(i);//记录得分的行
            console.log("score！");
        }
    }

    // 如果得分，更改矩阵，更新颜色
    if (score_i.length != 0) {//表示得分
        this.score += score_i.length;  // 更新得分
        block.speed /= 1.5;  // 更新速度
        console.log("分数为", this.score)
        $("#block span").text(this.score)
        this.score_update_matrx(score_i);
    }
}
Game.prototype.score_update_matrx = function (score_i) {
    console.log(score_i)
    for (var i = 0; i < score_i.length; i++) {//如果为多行得分，score_i中记录的行号是从小到大的
        //对于每一个得分
        // console.log("开始改造矩阵")
        for (var j = 0; j < score_i[i]; j++) {//score_i[i]即使其中记录的某一行的行号，是从0开始计数的
            //对于自身及以上的行，只需要将上一行数值赋给下一行，把上一行颜色赋给下一行
            //第0行不用赋，而且要从第i行还是赋值，否则就乱了
            //比如score_i[i]=18，也即是第18行消失，首先要让17行代替18行
            // console.log(this.matrx[score_i[i] - j],this.matrx[score_i[i] - j - 1])
            this.matrx[score_i[i] - j] = this.matrx[score_i[i] - j - 1]//改造矩阵
        }
        console.log(this.matrx)
        console.log("开始改造界面")
        // 改造界面应用了另一种方法，直接剔除那一行，再加一行空白就行了，比改造矩阵简单
        $("#block tr").eq(i + score_i[score_i.length - 1 - i]).remove();//这里也是要从大行号开始剔除
        console.log("第", score_i[i], "行已经剔除")

        var $tr_append = $("<tr></tr>");
        for (var k = 0; k < block_map.col; k++) {
            var $td_append = $("<td></td>");
            $td_append.appendTo($tr_append);
        }
        $tr_append.prependTo($("#block").children("table"));// 因为display中也有table，这里得精确一点，如果用$("#block table")就都渲染了
    }
}
Game.prototype.timer = function () {
    clearInterval(game.interval);//防止多次按下开启多个定时器
    game.interval = setInterval(function () {//这里只能用game.interval,不能用this.interval真是费解
        if (game.safeCheck(block.row + 1, block.col, block.direction)) {//如果下降安全的话就下降
            block.fall();
        } else {
            // console.log("到底了，新的来了")
            game.update_matrx();//更新矩阵
            block = new Block(block.next_type, block.next_direction);//重新创建方块对象
            game.displayNextBlock();//产生展示下一个方块
        }
    }, block.speed)
}
Game.prototype.removeTimer = function () {
    // console.log(game.interval,game.score)
    clearInterval(game.interval);
}
Game.prototype.displayNextBlock = function () {
    block.next_type = this.randomType();//取得下一个类型
    block.next_direction = parseInt(Math.random() * 4);// 取得下一个形状
    // 渲染形状
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var pix = $("#block .next_block tr").eq(i).children("td").eq(j);
            if (blocks[block.next_type][block.next_direction][i][j] == 1) {
                pix.removeClass();//形状之内的，先清除原有的，这里的处理有别于主界面
                pix.addClass(block.next_type)//加上样式，这里让样式和block_type同名，非常好用
            } else {
                pix.removeClass();//形状之外的当然也要清除
            }
        }
    }
}

var block = null; // 用于存放对象
var game = new Game()  // 实例化游戏规则，游戏初始化


$(document).keydown(function (e) { // 按键绑定,注意是绑在document上
    // console.log(e.which)
    if (e.which > 36 && e.which < 41) {
        e.preventDefault();//去掉方向键默认事件
    }
    if (e.which == 32) {
        e.preventDefault();//去掉空格键默认事件
    }
    switch (e.which) {
        case 38:
            if (block.direction < 3) {
                if (game.safeCheck(block.row, block.col, block.direction + 1)) {//如果转向还safe就转
                    block.rotate();
                }
            } else {
                if (game.safeCheck(block.row, block.col, 0)) {//以为方向只有四个方向，3不能再加了
                    block.rotate();
                }
            }
            break;
        case 37:
            if (game.safeCheck(block.row, block.col - 1, block.direction)) {//如果向左安全的话就向左
                block.moveLeft();
            }
            break;
        case 39:
            if ((game.safeCheck(block.row, block.col + 1, block.direction))) {//如果向右安全的话就向右
                block.moveRight();
            }
            break;
        case 40:
            if ((game.safeCheck(block.row + 1, block.col, block.direction))) {//如果向右安全的话就向右
                block.fall();
            }
            break;
        case 32:  // 空格
            if ((game.safeCheck(block.row + 1, block.col, block.direction))) {//如果向右安全的话就向右
                block.fallFast();
            }
            break;
    }
})

$("#block button").eq(1).click(game.timer)//绑定开始按钮
$("#block button").eq(0).click(game.removeTimer)//绑定暂停按钮