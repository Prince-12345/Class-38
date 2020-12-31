var hypball , database , position;

function setup(){
createCanvas(500,500);

database = firebase.database();
console.log(database);

hypball = createSprite(100,100,20,20);
hypball.shapeColor="green";

//.ref is used to locate where the database is;
var hypballRef = database.ref("ball/position");
hypballRef.on("value", readPosition, showError );
//1st argument = at what event you want to read the data;
//2nd and 3rd arguments are callback functions;
//2nd = this callback function will be executed when the "value" event is fired;
//2nd = this callback function get called when there is some error while reading the data;




}


function draw(){
    background(255);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();


}

function readPosition(data){

position = data.val();
hypball.x = position.x;
hypball.y = position.y;
console.log(position.x);
console.log(position.y);

}

function showError(){
console.log("Error in writing to the database");
    
}
function writePosition(x,y){
var hypballRef = database.ref("ball/position");
hypballRef.set({
    'x': position.x + x,
    'y': position.y + y
});


}
