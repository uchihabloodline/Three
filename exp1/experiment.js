var mySceneTLX;
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;

var flag;
var flag2;
var flag2U;
var flag2D;


var line1X1;
var line1Y1;
var delta1X1;
var delta1Y1;
var line1X2;
var line1X2;

var line2X1;
var line2Y1;
var delta2X1;
var delta2Y1;
var line2X2;
var line2X2;



var line1X1U;
var line1Y1U;
var delta1X1U;
var delta1Y1U;
var line1X2U;
var line1X2U;

var line2X1U;
var line2Y1U;
var delta2X1U;
var delta2Y1U;
var line2X2U;
var line2X2U;


var line1X1D;
var line1Y1D;
var delta1X1D;
var delta1Y1D;
var line1X2D;
var line1X2D;

var line2X1D;
var line2Y1D;
var delta2X1D;
var delta2Y1D;
var line2X2D;
var line2X2D;



var ray;
var l1;
var l2;
var l3;

var l1U;
var l2U;
var l3U;

var l1D;
var l2D;
var l3D;

var t1;
var sign;

var image;
var fire;
var fireBox;
var a;
var b;
var c;
var d;

var Xdefault;
var Xstep;
var Xmin;
var Xmax;
var XminU;
var XmaxU;
var XminD;
var XmaxD;

var centerXM;
var centerYM;
var mirrorL;

var perMX;
var perMY;
var perL;
var per;
var perMXF;
var perMYF;

var perMXU;
var perMYU;
var perU;
var perMXFU;
var perMYFU;


var perMXD;
var perMYD;
var perD;
var perMXFD;
var perMYFD;



var myBackp;

var first;
var angle;
var angleU;
var angleD;



var myBack;
var geometry;
var material;
//update
var theta;
var dtheta;
var time;
var flag;

//for making matchsticks var

var geometry1;
var geometry2;

//center mirror
var line1;
var line2;
var mirror;
var mirrorb;
var centerXM;
var centerYM;

var mirrorL;



//upper mirror
var line1U;
var line2U;
var mirrorU;
var mirrorbU;
var centerXM;
var centerYM;



//lower mirror
var line1D;
var line2D;
var mirrorD;
var mirrorbD;
var centerXMD;
var centerYMD;



var helpContent;
function initialiseHelp(){
  helpContent="<h2>Simple Reflection at mirror help</h2>";
  helpContent=helpContent+"<p>You can drag the slider in input panel or drag the mirror to change the angle of mirrors.</p>";
  helpContent=helpContent+"<p>If all three ray of light will fall on ship then the ship will catch fire</p>"
  helpContent=helpContent+"<p>To see how ray are reflected,press start to see the animation.</p>"
  helpContent=helpContent+"<h2>Happy learning</h2>"
    //helpContent +=n 90 degrees</p><h3>Obtuse</h3><p>ees</p><h3>Right Angle</h3><p>Angle is said to be if it is equal to 90 degrees</p><h3>Strainght</h3><p>Angle is said to be if it is equal to 180 degrees</p>";
  PIEupdateHelp(helpContent);
}


var infoContent;
function initialiseInfo(){
  infoContent ="<h2>Simple reflection at mirror concepts</h2>";
  infoContent =infoContent+"<p> Greek inventor Archimedes used a giant mirror, or set of mirrors, to set fire to Roman ships attacking his home city of Syracuse in 212 B.C.</p>";
  //infoContent =infoContent+"<p>When a pendulum is displaced sideways from its resting, equilibrium position, it is subject to a restoring force due to gravity that will accelerate it back toward the equilibrium position.</p>";
  //nfoContent =infoContent+"<p>When released, the restoring force combined with the pendulum's mass causes it to oscillate about the equilibrium position, swinging back and forth.</p>"
  //infoContent =infoContent+"<p>Position M shows pendulum's mean position. When pendulum is released after taking one side it begins to move to and fro.</p>";
  //infoContent =infoContent+"<p>A and B positions are extreme position of pendulum. Pendulum is said to have completed one oscilation when it travels from one extreme to other extreme and back to that extreme.</p>"
  PIEupdateInfo(infoContent);

}
function findAngle(p0x,p0y,p1x,p1y,p2x,p2y) {
  var a = Math.pow(p1x-p0x,2) + Math.pow(p1y-p0y,2),
      b = Math.pow(p1x-p2x,2) + Math.pow(p1y-p2y,2),
      c = Math.pow(p2x-p0x,2) + Math.pow(p2y-p0y,2);
  return Math.acos( (a+b-c) / Math.sqrt(4*a*b) );
}

function initialiseSceneVariables() {
  /* Initialise Scene Variables */
  l1=false;
  l2=false;
  l3=false;

  l1U=false;
  l2U=false;
  l3U=false;

  l1D=false;
  l2D=true;
  l3D=false;

  flag=false;
  flag2=false;
  flag2U=false;
  flag2D=false;


  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 4.0;
  mySceneBRY = 0.0;
  mySceneW   = (mySceneBRX - mySceneTLX);
  mySceneH   = (mySceneTLY - mySceneBRY);
  myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
  myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
  Xdefault=0;
  Xstep=0.1;
  Xmin=-10;
  Xmax=10;
  XminU=-16;
  XmaxU=12;
  XminD=-10;
  XmaxD=10;

  centerXM=myCenterX+1;
  centerYM=myCenterY+0.5;
  mirrorL=0.5;
  centerYMD=centerYM-0.5;
  centerYMU=centerYM+0.5;

  ray=3;


  perL=0.5;
  perMX=centerXM-perL;
  perMY=centerYM;

  perMXD=centerXM-perL;
  perMYD=centerYMD;

  perMXU=centerXM-perL;
  perMYU=centerYMU;

  t1=0;
  sign=1;

  changeAng=0;




}






function drawMatchStick(x,y,x2,y2,col,width){
  var material;
  material = new THREE.LineBasicMaterial({color: col,  linewidth: width});

  geometry1 = new THREE.Geometry();
  geometry1.vertices.push(
    new THREE.Vector3( x, y, -0.1),
    new THREE.Vector3( x2,y2, -0.1)
  );
  line = new THREE.Line( geometry1, material );





return line;

}


function textBox(text){



  var geometryA = new THREE.BoxGeometry( mySceneW/14, mySceneH/10, 0);
  var materialA = new THREE.MeshBasicMaterial({map: image,transparent:true ,color: 0xFDF6D5} );
  var tex = new THREE.Mesh( geometryA, materialA );
  return tex;

}

function changeColor(element,color){

  element.material.color.setHex(color);

}

function setFire(){

  if(l1 && l1U && l1D)fireBox.position.set(b.position.x, b.position.y, 0);
  else if(l2 && l2U && l2D)fireBox.position.set(c.position.x, c.position.y, 0);
  else if(l3 && l3U && l3D)fireBox.position.set(d.position.x, d.position.y, 0);
  else fireBox.position.set(d.position.x, d.position.y, -10);

  console.log(fireBox.position.z);


}

function changeAngleMirrorD(num){
  t1=num;
  var th=(Math.PI/180)*2;
  var ang=th*num;
  var newX=centerXM+(mirrorL/2)*(Math.sin(ang));
  var newY=centerYMD+(mirrorL/2)*(Math.cos(ang));
  var newX2=centerXM-(mirrorL/2)*(Math.sin(ang));;
  var newY2=centerYMD-(mirrorL/2)*(Math.cos(ang));

 if(ang<th*12.01 && ang >-th*12.01){
  mirrorD.geometry.vertices[0].x=newX;
  mirrorD.geometry.vertices[0].y=newY;
  mirrorD.geometry.vertices[1].x=newX2;
  mirrorD.geometry.vertices[1].y=newY2;
  mirrorD.geometry.verticesNeedUpdate = true;
  mirrorbD.geometry.vertices[0].x=newX+0.02;
  mirrorbD.geometry.vertices[0].y=newY;
  mirrorbD.geometry.vertices[1].x=newX2+0.02;
  mirrorbD.geometry.vertices[1].y=newY2;
  mirrorbD.geometry.verticesNeedUpdate = true;




  line2D.geometry.vertices[1].y=centerYMD+(centerXM-myCenterX/2)*(Math.tan(angleD+2*ang));
  line2D.geometry.vertices[1].x=myCenterX/2;
  line2D.geometry.verticesNeedUpdate = true;


  perMXD=centerXM-perL*Math.cos(ang);
  perMYD=centerYMD+perL*Math.sin(ang);

  perD.geometry.vertices[1].x=perMXD;
  perD.geometry.vertices[1].y=perMYD;
  perD.geometry.verticesNeedUpdate = true;
}

  if(line2D.geometry.vertices[1].y>=b.position.y-0.16 && line2D.geometry.vertices[1].y<=b.position.y+0.16){
  l1D=true;

  }
  else {
    l1D=false;
  }

//  if(line2D.geometry.vertices[1].y<=(a.position.y+0.16) && line2D.geometry.vertices[1].y>=(a.position.y-0.16))changeColor(a,'0xffff00');
  //else changeColor(a,'0xFDF6D5');

  if(line2D.geometry.vertices[1].y>=c.position.y-0.16 && line2D.geometry.vertices[1].y<=c.position.y+0.16)l2D=true;
  else l2D=false;

  if(line2D.geometry.vertices[1].y>=d.position.y-0.16 && line2D.geometry.vertices[1].y<=d.position.y+0.16)l3D=true;
  else l3D=false;

  setFire();

  PIErender();


}


function changeAngleMirror(num){
  t1=num;
  var th=(Math.PI/180)*2;
  var ang=th*num;
  var newX=centerXM+(mirrorL/2)*(Math.sin(ang));
  var newY=centerYM+(mirrorL/2)*(Math.cos(ang));
  var newX2=centerXM-(mirrorL/2)*(Math.sin(ang));;
  var newY2=centerYM-(mirrorL/2)*(Math.cos(ang));

  if(ang<th*10.01 && ang >-th*10.01){
  mirror.geometry.vertices[0].x=newX;
  mirror.geometry.vertices[0].y=newY;
  mirror.geometry.vertices[1].x=newX2;
  mirror.geometry.vertices[1].y=newY2;
  mirror.geometry.verticesNeedUpdate = true;
  mirrorb.geometry.vertices[0].x=newX+0.02;
  mirrorb.geometry.vertices[0].y=newY;
  mirrorb.geometry.vertices[1].x=newX2+0.02;
  mirrorb.geometry.vertices[1].y=newY2;
  mirrorb.geometry.verticesNeedUpdate = true;




  line2.geometry.vertices[1].y=centerYM+(centerXM-myCenterX/2)*(Math.tan(angle+2*ang));
  line2.geometry.vertices[1].x=myCenterX/2;
  line2.geometry.verticesNeedUpdate = true;


  perMX=centerXM-perL*Math.cos(ang);
  perMY=centerYM+perL*Math.sin(ang);

  per.geometry.vertices[1].x=perMX;
  per.geometry.vertices[1].y=perMY;
  per.geometry.verticesNeedUpdate = true;
}

  if(line2.geometry.vertices[1].y>=b.position.y-0.16 && line2.geometry.vertices[1].y<=b.position.y+0.16)l1=true;
  else l1=false;


  if(line2.geometry.vertices[1].y>=c.position.y-0.16 && line2.geometry.vertices[1].y<=c.position.y+0.16)l2=true;
  else l2=false;

  if(line2.geometry.vertices[1].y>=d.position.y-0.16 && line2.geometry.vertices[1].y<=d.position.y+0.16)l3=true;
  else l3=false;

  setFire();



  PIErender();


}



function changeAngleMirrorU(num){
  t1=num;
  var th=(Math.PI/180)*2;
  var ang=th*num;
  var newX=centerXM+(mirrorL/2)*(Math.sin(ang));
  var newY=centerYMU+(mirrorL/2)*(Math.cos(ang));
  var newX2=centerXM-(mirrorL/2)*(Math.sin(ang));;
  var newY2=centerYMU-(mirrorL/2)*(Math.cos(ang));

  if(ang<th*12.01 && ang >-th*16.01){
  mirrorU.geometry.vertices[0].x=newX;
  mirrorU.geometry.vertices[0].y=newY;
  mirrorU.geometry.vertices[1].x=newX2;
  mirrorU.geometry.vertices[1].y=newY2;
  mirrorU.geometry.verticesNeedUpdate = true;
  mirrorbU.geometry.vertices[0].x=newX+0.02;
  mirrorbU.geometry.vertices[0].y=newY;
  mirrorbU.geometry.vertices[1].x=newX2+0.02;
  mirrorbU.geometry.vertices[1].y=newY2;
  mirrorbU.geometry.verticesNeedUpdate = true;


  line2U.geometry.vertices[1].y=centerYMU+(centerXM-myCenterX/2)*(Math.tan((angleU+2*ang)));
  line2U.geometry.vertices[1].x=myCenterX/2;
  line2U.geometry.verticesNeedUpdate = true;

  perMXU=centerXM-perL*Math.cos(ang);
  perMYU=centerYMU+perL*Math.sin(ang);

  perU.geometry.vertices[1].x=perMXU;
  perU.geometry.vertices[1].y=perMYU;
  perU.geometry.verticesNeedUpdate = true;
}



  if(line2U.geometry.vertices[1].y>=b.position.y-0.16 && line2U.geometry.vertices[1].y<=b.position.y+0.16)l1U=true;
  else l1U=false;



  if(line2U.geometry.vertices[1].y>=c.position.y-0.16 && line2U.geometry.vertices[1].y<=c.position.y+0.16)l2U=true;
  else l2U=false;

  if(line2U.geometry.vertices[1].y>=d.position.y-0.16 && line2U.geometry.vertices[1].y<=d.position.y+0.16)l3U=true;
  else l3U=false;

setFire();

  PIErender();


}



function myDrag(element,pos){

  changeAngleMirror(pos.x*10);


  PIErender();

}

function myDragU(element,pos){

  changeAngleMirrorU(2*pos.x*10);


  PIErender();

}

function myDragD(element,pos){

  changeAngleMirrorD(pos.x*10);


  PIErender();

}





function handleX(newValue)
{

  changeAngleMirror(newValue);


}
function handleU(newValue)
{

  changeAngleMirrorU(newValue);


}
function handleD(newValue)
{

  changeAngleMirrorD(newValue);


}


function loadExperimentElements() {

  PIEsetDeveloperName("Akshit Soni");
  PIEsetExperimentTitle("Archimedes mirrors");
  initialiseSceneVariables();
  initialiseHelp();
  initialiseInfo();




  PIEaddInputSlider("Upper Mirror", Xdefault, handleU, XminU, XmaxU, Xstep);
  PIEaddInputSlider("Center Mirror", Xdefault, handleX, Xmin, Xmax, Xstep);
  PIEaddInputSlider("Lower Mirror", Xdefault, handleD, XminD, XmaxD, Xstep);

  fire = THREE.ImageUtils.loadTexture('fire.png', {}, function() {
  PIErender();});
  var geometryA = new THREE.BoxGeometry( mySceneW/14, mySceneH/10, 0);
  var materialA = new THREE.MeshBasicMaterial({map: fire,transparent:true} );

  fireBox = new THREE.Mesh( geometryA, materialA );
  fireBox.position.set(myCenterX/2, myCenterY+0.4, -10);

  PIEaddElement(fireBox);

  image = THREE.ImageUtils.loadTexture('pirate.png', {}, function() {
    b.position.set(myCenterX/2, myCenterY+0.4, -0.15);
    PIEaddElement(b);
    c.position.set(myCenterX/2, myCenterY+0.8, -0.15);
    PIEaddElement(c);
    d.position.set(myCenterX/2, myCenterY+1.2, -0.15);
    PIEaddElement(d);

  PIErender();});

  geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, 0);
  material = new THREE.MeshBasicMaterial({color: 0xbbdefb} );
  myBack = new THREE.Mesh( geometry, material );
  myBack.position.set(myCenterX, myCenterY, -0.15);
  PIEaddElement(myBack);

  var texture = THREE.ImageUtils.loadTexture('torch.png', {}, function() {
    myBackp.position.set(myCenterX/2-0.22, myCenterY/2-0.05, -0.09);
  PIErender();});

  var geometryp = new THREE.BoxGeometry( mySceneW/5, mySceneH/5, 0);
  materialp = new THREE.MeshBasicMaterial({map: texture ,transparent: true} );
  myBackp = new THREE.Mesh( geometryp, materialp );
  myBackp.position.set(myCenterX/2, myCenterY/2, -0.2);

  PIEaddElement(myBackp);

  line1=drawMatchStick(myCenterX/2, myCenterY/2,myCenterX+1,centerYM,'#ffff00',ray);
  mirror=drawMatchStick(centerXM, centerYM+mirrorL/2,centerXM,centerYM-mirrorL/2,"#808080",10);
  mirrorb=drawMatchStick(myCenterX+1+0.02, centerYM+mirrorL/2,centerXM+0.02,centerYM-mirrorL/2,"#000000",3);
  PIEaddElement(mirror);
  PIEaddElement(mirrorb);

  PIEdragElement(mirror);
  PIEsetDrag(mirror, myDrag);


  line1U=drawMatchStick(myCenterX/2, myCenterY/2,centerXM,centerYMU,'#ffff00',ray);
  mirrorU=drawMatchStick(centerXM, centerYMU+mirrorL/2,centerXM,centerYMU-mirrorL/2,"#808080",10);
  mirrorbU=drawMatchStick(myCenterX+1+0.02, centerYMU+mirrorL/2,centerXM+0.02,centerYMU-mirrorL/2,"#000000",3);
  PIEaddElement(mirrorU);
  PIEaddElement(mirrorbU);
  PIEaddElement(line1U);
  PIEdragElement(mirrorU);
  PIEsetDrag(mirrorU, myDragU);

  line1D=drawMatchStick(myCenterX/2, myCenterY/2,centerXM,centerYMD,'#ffff00',ray);
  mirrorD=drawMatchStick(centerXM, centerYMD+mirrorL/2,centerXM,centerYMD-mirrorL/2,"#808080",10);
  mirrorbD=drawMatchStick(myCenterX+1+0.02, centerYMD+mirrorL/2,centerXM+0.02,centerYMD-mirrorL/2,"#000000",3);
  PIEaddElement(mirrorD);
  PIEaddElement(mirrorbD);
  PIEaddElement(line1D);
  PIEdragElement(mirrorD);
  PIEsetDrag(mirrorD, myDragD);




  //center mirror
  angle =findAngle(line1.geometry.vertices[0].x,line1.geometry.vertices[0].y,centerXM,centerYM,perMX,perMY);
  line2=drawMatchStick(centerXM,centerYM,myCenterX/2,centerYM+(centerXM-(myCenterX/2))*Math.tan(angle),'#ffff00',ray);
  PIEaddElement(line1);

  PIEaddElement(line2);

  per=drawMatchStick(centerXM,centerYM,perMX,perMY,'#000000',1);
  PIEaddElement(per);

  //upper mirror
  angleU =findAngle(line1U.geometry.vertices[0].x,line1U.geometry.vertices[0].y,centerXM,centerYMU,perMXU,perMYU);
  line2U=drawMatchStick(centerXM,centerYMU,myCenterX/2,centerYMU+(centerXM-(myCenterX/2))*Math.tan(angleU),'#ffff00',ray);

  PIEaddElement(line2U);

  perU=drawMatchStick(centerXM,centerYMU,perMXU,perMYU,'#000000',1);
  PIEaddElement(perU);
  console.log("main Uaa");
  console.log(angleU);

  //lower mirror
  angleD =findAngle(line1D.geometry.vertices[0].x,line1D.geometry.vertices[0].y,centerXM,centerYMD,perMXD,perMYD);
  line2D=drawMatchStick(centerXM,centerYMD,myCenterX/2,centerYMD+(centerXM-(myCenterX/2))*Math.tan(angleD),'#ffff00',ray);
  //console.log("main d");
  //console.log(angleD);
  PIEaddElement(line2D);

  perD=drawMatchStick(centerXM,centerYMD,perMXD,perMYD,'#000000',1);
  PIEaddElement(perD);






  b = textBox("B");
  c = textBox("C");
  d = textBox("D");

  changeAngleMirror(changeAng);

  resetExperiment();
  PIErender();


  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);

}


function resetExperiment(){

   initialiseSceneVariables();


   line1.geometry.vertices[1].x=centerXM;
   line1.geometry.vertices[1].y=centerYM;
   line1U.geometry.vertices[1].x=centerXM;
   line1U.geometry.vertices[1].y=centerYMU;
   line1D.geometry.vertices[1].x=centerXM;
   line1D.geometry.vertices[1].y=centerYMD;
   line1.geometry.verticesNeedUpdate=true;
   line1U.geometry.verticesNeedUpdate=true;
   line1D.geometry.verticesNeedUpdate=true;
   changeAngleMirror(0);
   changeAngleMirrorU(0);
   changeAngleMirrorD(0);
   PIEchangeInputSlider("Upper Mirror",Xdefault);
   PIEchangeInputSlider("Center Mirror",Xdefault);
   PIEchangeInputSlider("Lower Mirror",Xdefault);
   PIErender();
   l2D=true;



}


function updateExperimentElements(t,dt){

  // if(t1>10)sign=-1;
  // if(t1<-10)sign=1;
  // t1=t1+(sign*dt/100)
  // changeAngleMirror(t1);
  if(t>0){
  if(!flag){

    line1X1=line1.geometry.vertices[0].x;
    line1Y1=line1.geometry.vertices[0].y;
    line1X2=line1.geometry.vertices[1].x;
    line1Y2=line1.geometry.vertices[1].y;
    delta1X1=-(line1.geometry.vertices[0].x-line1.geometry.vertices[1].x)/100;
     delta1Y1=-(line1.geometry.vertices[0].y-line1.geometry.vertices[1].y)/100;



     line2X1=line2.geometry.vertices[0].x;
     line2Y1=line2.geometry.vertices[0].y;
     line2X2=line2.geometry.vertices[1].x;
     line2Y2=line2.geometry.vertices[1].y;
     delta2X1=-(line2.geometry.vertices[0].x-line2.geometry.vertices[1].x)/1000;
      delta2Y1=-(line2.geometry.vertices[0].y-line2.geometry.vertices[1].y)/1000;
      flag=true;

      line1X1U=line1U.geometry.vertices[0].x;
      line1Y1U=line1U.geometry.vertices[0].y;
      line1X2U=line1U.geometry.vertices[1].x;
      line1Y2U=line1U.geometry.vertices[1].y;
      delta1X1U=-(line1U.geometry.vertices[0].x-line1U.geometry.vertices[1].x)/100;
       delta1Y1U=-(line1U.geometry.vertices[0].y-line1U.geometry.vertices[1].y)/100;



       line2X1U=line2U.geometry.vertices[0].x;
       line2Y1U=line2U.geometry.vertices[0].y;
       line2X2U=line2U.geometry.vertices[1].x;
       line2Y2U=line2U.geometry.vertices[1].y;
       delta2X1U=-(line2U.geometry.vertices[0].x-line2U.geometry.vertices[1].x)/1000;
        delta2Y1U=-(line2U.geometry.vertices[0].y-line2U.geometry.vertices[1].y)/1000;



        line1X1D=line1D.geometry.vertices[0].x;
        line1Y1D=line1D.geometry.vertices[0].y;
        line1X2D=line1D.geometry.vertices[1].x;
        line1Y2D=line1D.geometry.vertices[1].y;
        delta1X1D=-(line1D.geometry.vertices[0].x-line1D.geometry.vertices[1].x)/100;
         delta1Y1D=-(line1U.geometry.vertices[0].y-line1D.geometry.vertices[1].y)/100;



         line2X1D=line2D.geometry.vertices[0].x;
         line2Y1D=line2D.geometry.vertices[0].y;
         line2X2D=line2D.geometry.vertices[1].x;
         line2Y2D=line2D.geometry.vertices[1].y;
         delta2X1D=-(line2D.geometry.vertices[0].x-line2D.geometry.vertices[1].x)/1000;
          delta2Y1D=-(line2D.geometry.vertices[0].y-line2D.geometry.vertices[1].y)/1000;




          line2.geometry.vertices[1].x=line2X1;
          line2.geometry.vertices[1].y=line2Y1;
          line2U.geometry.vertices[1].x=line2X1U;
          line2U.geometry.vertices[1].y=line2Y1U;
          line2D.geometry.vertices[1].x=line2X1D;
          line2D.geometry.vertices[1].y=line2Y1D;
          line2.geometry.verticesNeedUpdate=true;
          line2U.geometry.verticesNeedUpdate=true;
          line2D.geometry.verticesNeedUpdate=true;
          fireBox.position.set(d.position.x, d.position.y, -10);




}
  if(flag){
    //console.log(t);
    //middle line
   if(line1X2>line1X1){

    line1.geometry.vertices[1].x=line1X1+(dt/20)*delta1X1;
    line1.geometry.vertices[1].y=line1Y1+(dt/20)*delta1Y1;
    line1X1=line1.geometry.vertices[1].x;
    line1Y1=line1.geometry.vertices[1].y;
    line1.geometry.verticesNeedUpdate=true;


  }
  else flag2=true;

if(line2X2<line2X1 && flag2){
  line2.geometry.vertices[1].x=line2X1+(dt/10)*delta2X1;
  line2.geometry.vertices[1].y=line2Y1+(dt/10)*delta2Y1;
  line2X1=line2.geometry.vertices[1].x;
  line2Y1=line2.geometry.vertices[1].y;
  line2.geometry.verticesNeedUpdate=true;

}

  //console.log(t);
  //middle line
 if(line1X2U>line1X1U ){

  line1U.geometry.vertices[1].x=line1X1U+(dt/20)*delta1X1U;
  line1U.geometry.vertices[1].y=line1Y1U+(dt/20)*delta1Y1U;
  line1X1U=line1U.geometry.vertices[1].x;
  line1Y1U=line1U.geometry.vertices[1].y;
  line1U.geometry.verticesNeedUpdate=true;


}
else flag2U=true;

if(line2X2U<line2X1U && flag2U){
line2U.geometry.vertices[1].x=line2X1U+(dt/10)*delta2X1U;
line2U.geometry.vertices[1].y=line2Y1U+(dt/10)*delta2Y1U;
line2X1U=line2U.geometry.vertices[1].x;
line2Y1U=line2U.geometry.vertices[1].y;
line2U.geometry.verticesNeedUpdate=true;

}


if(line1X2D>line1X1D ){

 line1D.geometry.vertices[1].x=line1X1D+(dt/20)*delta1X1D;
 line1D.geometry.vertices[1].y=line1Y1D+(dt/20)*delta1Y1D;
 line1X1D=line1D.geometry.vertices[1].x;
 line1Y1D=line1D.geometry.vertices[1].y;
 line1D.geometry.verticesNeedUpdate=true;


}
else flag2D=true;

if(line2X2D<line2X1D && flag2D){
line2D.geometry.vertices[1].x=line2X1D+(dt/10)*delta2X1D;
line2D.geometry.vertices[1].y=line2Y1D+(dt/10)*delta2Y1D;
line2X1D=line2D.geometry.vertices[1].x;
line2Y1D=line2D.geometry.vertices[1].y;
line2D.geometry.verticesNeedUpdate=true;

}
else if(flag2D==true)setFire();


  }

}


  }
