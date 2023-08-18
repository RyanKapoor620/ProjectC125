function setup(){
    canvas=createCanvas(400,400);
    canvas.position(700,200);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(200,200);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("Model is loaded");
}
function draw(){
    background("white");
    textSize(difference);
    fill("purple");
    text("Ryan Kapoor",135,200);
    document.getElementById("text_size").innerHTML="Text size: "+difference+"px";
}
rightWristX=0;
leftWristX=0;
difference=0;
function gotposes(results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("Right Wrist X = "+rightWristX+" Left Wrist X = "+leftWristX+" Difference = "+difference);
    }
}