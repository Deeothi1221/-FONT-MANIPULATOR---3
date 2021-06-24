noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(400, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function draw() {
    background("#11ff00");
    document.getElementById("square_sides").innerHTML = "Font size will be = " + difference + "px";
    fill("#ff0000");
    stroke("#ff0000");
    textSize(difference);
    text("Gyan", 50, 200)
}

function gotPoses(result) {
    if (result.length > 0);
    console.log(result);
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;

    rightWrist = result[0].pose.rightWrist.x;
    leftWrist = result[0].pose.leftWrist.x;
    difference = floor(leftWrist - rightWrist);
}
