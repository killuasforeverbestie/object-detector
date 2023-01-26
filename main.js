img="";
status="";
objects=[];
objectDetector=""
function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(380, 380);
canvas.position(900, 300);
video=createCapture(VIDEO)
video.size(380, 380)
video.hide()
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="status: detectingobject"
    }

function modelloaded(){
    console.log("modelloaded")
    status=true
    
    }
function gotresult(error,results){
    if(error){
    console.log(error)
    }
    console.log(results)
    objects=results
    }
    
function draw(){
image(video,0,0,380,380);
if(status != ""){
r=random(255)
g=random(255)
b=random(255)
objectDetector.detect(video,gotresult)
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:objectdetected"
document.getElementById("Numberofobjects").innerHTML="Numberofobjectsdetectedare: "+objects.length;fill
fill(r,g,b)
percent=floor(objects[i].confidence*100)
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
noFill()
stroke(r,g,b)
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}
}

