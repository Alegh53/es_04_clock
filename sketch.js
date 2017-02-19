  var secondi = second();
  var minuti = minute();
  var ore = abs(hour()-12);

function setup() {
  createCanvas(600,600)
  angleMode(DEGREES)

}

function draw() {
  background("#8CC7A1")
  translate(width/2,height/2)
 
  noStroke();
  
  fill(0)
  ellipse(0,0,12)
  

  // seconds
  drawNendle(second(),60,1,200,["#020887"])
  
  //minutes
  drawNendle(minute(),60,3,150,[20])
  
  //hours
  if(hour()>12){
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
  drawNendle(hour12,12,5,90,[0])
  
}

function drawNendle(needlevalue,needlerange,needleweight,needleradius,needlecol){
  var angle = map(needlevalue,0,needlerange,-90,270)
  stroke(needlecol)
  strokeWeight(needleweight)
  line(0,0,needleradius*cos(angle),needleradius*sin(angle))
}