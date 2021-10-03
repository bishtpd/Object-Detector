sttus = "";
xaxis = "";
yaxis = "";
height = "";
width = "";
axaxis = "";
ayaxis = "";
aheight = "";
awidth = "";
objects = [];
r = 0;
g = 0;
b = 0;
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    //myvideo = createCapture();
    //myvideo.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Model is detecting possible matches, please stand by.";
}
function preload(){
imag = loadImage("plsworkthistime.jpg");

}
function draw(){
image(imag, 0, 0, 500, 400);
r = random(255);
g = random(255);
b = random(255);
document.getElementById("status").innerHTML = "Model has detected "+ objects.length + " matches";
objectDetector.detect(imag , gotResult);

for(i = 0; i < objects.length; i++){

percent = floor(objects[i].confidence * 100);
fill(r, g, b);
textSize(20);
text(objects[i].label +  percent + "%", objects[i].x + 10,  objects[i].y + 50);
noFill();
stroke(r, g, b);
rect(objects[i].x - 50, objects[i].y, objects[i].width - 100, objects[i].height - 100);



}
}
function modelLoaded(){
    console.log("Model Loaded");
    sttus = true;
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        objects = result;
        
    }
}
function goback(){
    window.location = "index.html";

}