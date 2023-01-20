function preload(){
    mustache=loadImage("https://i.postimg.cc/fTq1gtWc/m.png")
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,receive);
    poseNet.on('pose',gotPoses)
}
function receive(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x ="+results[0].pose.nose);
        console.log("nose y ="+results[0].pose.nose);
    }
}

function draw(){
    image(video,0,0,300,300);
    circle(noseX,noseY,20);
    fill(255,0,0);
    stroke(255,0,0);
    image(mustache,noseX,noseY,30,30);
}

function receive(){
    save('myFilterImaage.png')
}