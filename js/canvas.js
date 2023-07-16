var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

/**
 * CIELO
 */

var grd = ctx.createLinearGradient(0,0,0,500);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"rgba(255,255,255,1)");
ctx.fillStyle=grd;
ctx.fillRect(0,0,1000,500);

/**
 * OCEANO
 */

var grd2 = ctx.createLinearGradient(0,400,0,500);
grd2.addColorStop(0,"rgba(0,180,255,1)");
grd2.addColorStop(1,"white");
ctx.fillStyle=grd2;
ctx.fillRect(0,400,1000,100);

//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//


/**
 * MONTAÑAS
 */

/**
 * MONTAÑA 1
 */
ctx.beginPath();
ctx.fillStyle = 'rgba(100,0,255,1)';
ctx.moveTo(0,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();
/**
 * MONTAÑA 2
 */
ctx.beginPath();
ctx.fillStyle = 'rgba(50,0,255,1)';
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();
/**
 * MONTAÑA 3
 */
ctx.beginPath();
ctx.fillStyle = 'rgba(100,0,255,1)';
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();
/**
 * MONTAÑA 4
 */
ctx.beginPath();
ctx.fillStyle = 'rgba(50,0,255,1)';
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();


//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//

/*
 * NIEVE MONTAÑA 1
 */
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,1)";
ctx.moveTo(133,200);
ctx.lineTo(200,100);
ctx.lineTo(200,300);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,1)";
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(267,200);
ctx.fill();
/*
 * NIEVE MONTAÑA 2
 */
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,1)";
ctx.moveTo(400,100);
ctx.lineTo(333,200);
ctx.lineTo(400,300);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,1)";
ctx.moveTo(400,100);
ctx.lineTo(467,200);
ctx.lineTo(400,300);
ctx.fill();
/*
 * NIEVE MONTAÑA 3
 */
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,1)";
ctx.moveTo(600,100);
ctx.lineTo(533,200);
ctx.lineTo(600,300);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,1)";
ctx.moveTo(600,100);
ctx.lineTo(667,200);
ctx.lineTo(600,300);
ctx.fill();
/*
 * NIEVE MONTAÑA 4
 */
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,1)";
ctx.moveTo(800,100);
ctx.lineTo(733,200);
ctx.lineTo(800,300);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,1)";
ctx.moveTo(800,100);
ctx.lineTo(867,200);
ctx.lineTo(800,300);
ctx.fill();

//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//


/**
 * COLINAS
 */


//COLINA 1

ctx.beginPath();
ctx.fillStyle = "rgba(10,0,150,1)";
ctx.moveTo(0,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(10,0,100,1)";
ctx.moveTo(200,300);
ctx.lineTo(400,400);
ctx.lineTo(200,450);
ctx.fill();

//COLINA 2

ctx.beginPath();
ctx.fillStyle = "rgba(10,0,150,1)";
ctx.moveTo(600,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(10,0,100,1)";
ctx.moveTo(800,300);
ctx.lineTo(1000,400);
ctx.lineTo(800,450);
ctx.fill();

//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//

/**
 * ARBOLES
 */

//ARBOL 1

ctx.fillStyle = "rgba(100,0,20,1)";
ctx.fillRect(100,200,20,150);

ctx.beginPath();
ctx.fillStyle = "rgba(0,140,25,1)";
ctx.arc(150,220,40,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,110,25,1)";
ctx.arc(60,220,30,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,80,25,1)";
ctx.arc(110,200,50,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(100,240,40,0,2*Math.PI);
ctx.fill();

//ARBOL 2

ctx.fillStyle = "rgba(100,0,20,1)";
ctx.fillRect(900,200,20,150);

ctx.beginPath();
ctx.fillStyle = "rgba(0,140,25,1)";
ctx.arc(950,220,40,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,110,25,1)";
ctx.arc(860,220,30,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,80,25,1)";
ctx.arc(910,200,50,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(900,240,40,0,2*Math.PI);
ctx.fill();

//ARBOL 3

ctx.fillStyle = "rgba(100,0,20,1)";
ctx.fillRect(800,200,20,150);

ctx.beginPath();
ctx.fillStyle = "rgba(0,140,25,1)";
ctx.moveTo(750,300);
ctx.lineTo(810,200);
ctx.lineTo(870,300);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,110,25,1)";
ctx.moveTo(750,275);
ctx.lineTo(810,175);
ctx.lineTo(870,275);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,80,25,1)";
ctx.moveTo(750,250);
ctx.lineTo(810,150);
ctx.lineTo(870,250);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.moveTo(750,225);
ctx.lineTo(810,125);
ctx.lineTo(870,225);
ctx.fill();

//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//


/**
 * TIERRAS
 */


//TIERRA 1

ctx.beginPath();
ctx.fillStyle = "rgba(0,120,10,1)";
ctx.arc(105,600,250,3.15,2*Math.PI);
ctx.fill();

//TIERRA 2

ctx.beginPath();
ctx.fillStyle = "rgba(0,120,10,1)";
ctx.arc(850,580,250,3.15,2*Math.PI);
ctx.fill();


ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(0,500,50,3.15,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(100,500,50,3.15,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(200,500,50,3.15,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(300,500,50,3.15,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(700,500,50,3.15,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(800,500,50,3.15,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(900,500,50,3.15,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,25,1)";
ctx.arc(1000,500,50,3.15,2*Math.PI);
ctx.fill();