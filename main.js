let nosex=0;
let nosey=0;

function preload() {
    mache = loadImage('mustache.png');;
}

function setup() {
    canvas = createCanvas(1080, 720);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(1080, 720);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        console.log(results[0].pose.nose.x + " " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function modelLoaded() {
    console.log("modelLoaded");
}


function draw() {
    image(video, 0 , 0, 1080, 720);
    image(mache, nosex - 80, nosey - 8, 160, 90);
}

function take_snapshot() {
    save('myFilterImage.png');
}