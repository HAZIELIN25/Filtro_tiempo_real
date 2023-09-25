nosex=0;
nosey=0;

function preload(){
    mostache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("el modelo posenet ha sido inicializado");
}

function gotPoses(results){
    if (results.lenght>0){
        console.log(results);
        nosex=results[0].pose.nose.x-40;
        nosey=results[0].pose.nose.y;
}
}

function draw(){
    image(video,0,0,300,300);
    image(mostache,nosex,nosey,80,35);
}

function take_snapshot(){
    save('filtro.png');
}
