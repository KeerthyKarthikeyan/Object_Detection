img="";
object=[];
status="";

function preload(){
img=loadImage('bed.jpg');

}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
  // objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('status').innerHTML="status : Detecting objects"
}

function modelloaded(){
console.log('Model Loaded');
status=true;
objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
if(error){
    console.log(error);
}
console.log(results);
object=results;

}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Lamp",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,400,150);

    fill("#ff0000");
    text("Cat",320,120);
    noFill();
    stroke("#ff0000");
    rect(290,100,270,320);
    
}