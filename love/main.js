// You can change global variables here:
var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
var bgMusicControls = true; // Show UI music control



// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

const openBtn = document.getElementById("openCard");
const popup = document.getElementById("popup");
const textEl = document.getElementById("typing");
const nextBtn = document.getElementById("nextPageBtn");

const textContent = `
Hari ini aku mau bilang sesuatu yang sederhana,
selamat ulang tahun ya sayangnya aku.
Semoga hari ini kamu ngerasa cukup dirayakan,
meski mungkin tidak dengan cara yang lengkap.
Aku cuma mau kamu tau,
di hari lahirmu ini ada aku yang benar-benar senang
karena kamu masih ada, masih bertumbuh,
dan masih jadi kamu yang aku kenal.

Jarak memang bikin banyak hal jadi ditahan,
mulai dari rindu sampai ingin bertemu.
Tapi anehnya, kamu tetap jadi orang
yang paling sering kepikiran tanpa sengaja.
Di sela-sela aktipitas,
di tengah capek,
atau sebelum tidur. 
Wow kamu selalu hadir di waktu kapanpun itu di dalam pikiran aku.
Makanya, di ulang tahunmu ini
aku cuma berharap hal-hal baik terus datang ke hidupmu.
Semoga kamu diberi umur yang panjang, lebih sehat,
dan selalu punya tenaga buat ngejar apa pun yang lagi kamu perjuangkan.

Sayangnya aku......
meski kita tidak selalu bareng secara fisik,
kamu tetap jadi bagian penting di hidupku.
Aku harap jarak ini nggak pernah bikin kamu ngerasa sendirian,
karena di sini ada aku
yang selalu peduli dengan caraku sendiri.
Mungkin nggak selalu kelihatan,
tapi rasanya ada dan nyata.
ya karna ldr jadi agak terbatass.

Terima kasih ya sayangnya aku....
sudah hadir dan bertahan sejauh ini.
Sudah jadi orang yang bisa bikin aku tenang
cukup dari satu pesan singkat,
atau kabar kecil bahwa kamu baik-baik saja.
Kamu nggak perlu jadi siapa-siapa,
cukup jadi diri kamu yang sekarang aja
itu sudah bikin aku merasa cukup.

Aku doakan semoga ke mana pun kamu melangkah,
jalanmu dimudahkan,
rezekimu dilancarkan,
dan hatimu tetap ringan.
Semoga hidupmu panjang,
cukup panjang buat menikmati hasil dari semua usaha kamu,
dan cukup lama buat tahu
kalau kamu dicintai, termasuk oleh aku haha jangan besar kepala.

Dan kalau Tuhan mengizinkan,
aku pengin terus ada di samping kamu.
Lewat jarak yang kita jalani pelan-pelan,
lewat rindu yang kadang datang tiba-tiba,
dan lewat hubungan yang kita jaga bareng-bareng.
Nggak harus terlalu gimana-gimana,
yang penting tulus dan bertahan.

Sayangnya aku......
selamat bertambah usia.
Semoga hari-harimu ke depan lebih ringan,
lebih banyak senyum, 
lebih banyak diketemui dengan orang-orang yang baik ya sayang
dan semoga aku masih bisa jadi bagian kecil
dari cerita hidup kamu 
Hidup Lebih Lama Yaaaa Sayangnya Akuuuu🤍
`;

let index = 0;

function typeText(){
    if(index < textContent.length){
        textEl.innerHTML += textContent.charAt(index);
        index++;
        textEl.scrollTop = textEl.scrollHeight; // auto scroll
        setTimeout(typeText, 155); // kecepatan ngetik
    }
}

openBtn.onclick = () => {
    popup.classList.add("show");
    textEl.innerHTML = "";
    index = 0;
    setTimeout(typeText, 1200); // mulai ngetik setelah card muncul
};
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3500); // ganti tiap 3.5 detik

function typeEffect(){
    if(i < text.length){
        typingTarget.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }else{
        document.getElementById("nextPageBtn").style.opacity = "1";
    }
}
/* pindah halaman */
nextBtn.addEventListener("click", ()=>{
    window.location.href = "../index1.html";
});

function launchConfetti(){
    const wrapper = document.getElementById('confetti-wrapper');
    if(!wrapper) return;

    for(let i = 0; i < 80; i++){
        const confetti = document.createElement('div');

        const colors = ['pink','yellow','purple','blue'];
        confetti.className = 'confetti ' + colors[Math.floor(Math.random()*colors.length)];

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = 3 + Math.random() * 3 + 's';

        wrapper.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },6000);
    }
}

document.getElementById('openCard').addEventListener('click',()=>{
    popup.classList.add('show');
    launchConfetti(); // 🎉 WAJIB ADA
});

function startAutoConfetti(){
    const wrapper = document.getElementById('confetti-auto');
    if(!wrapper) return;

    setInterval(()=>{
        // confetti kotak
        const confetti = document.createElement('div');
        const colors = ['pink','gold','blue','purple'];

        confetti.className = 'auto-confetti ' + colors[Math.floor(Math.random()*colors.length)];
        confetti.style.left = Math.random()*100 + 'vw';
        confetti.style.animationDuration = 6 + Math.random()*4 + 's';

        wrapper.appendChild(confetti);

        setTimeout(()=>confetti.remove(),10000);

        // love confetti (lebih jarang)
        if(Math.random() < 0.3){
            const love = document.createElement('div');
            love.className = 'love-confetti';
            love.innerHTML = '❤';
            love.style.left = Math.random()*100 + 'vw';
            love.style.animationDuration = 7 + Math.random()*3 + 's';

            wrapper.appendChild(love);
            setTimeout(()=>love.remove(),10000);
        }
    }, 800); // interval aman & halus
}
document.addEventListener('DOMContentLoaded',()=>{

    const layer = document.getElementById('party-layer');

    /* 💗 LOVE GLOW */
    setInterval(()=>{
        const love = document.createElement('div');
        love.className = 'love-glow';
        love.innerHTML = '❤';
        love.style.left = Math.random()*100+'vw';
        love.style.animationDuration = 6+Math.random()*4+'s';
        layer.appendChild(love);
        setTimeout(()=>love.remove(),10000);
    },700);

    /* ✨ SPARKLE */
    setInterval(()=>{
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random()*100+'vw';
        s.style.top  = Math.random()*100+'vh';
        layer.appendChild(s);
        setTimeout(()=>s.remove(),3000);
    },900);

    /* 🎈 BALLOON */
    setInterval(()=>{
        const b = document.createElement('div');
        b.className = 'balloon';
        b.style.left = Math.random()*100+'vw';
        b.style.bottom = '-40px';
        b.style.animationDuration = 8+Math.random()*4+'s';
        layer.appendChild(b);
        setTimeout(()=>b.remove(),12000);
    },4000);

    /* 🎆 PETASAN RINGAN */
    setInterval(()=>{
        for(let i=0;i<10;i++){
            const f = document.createElement('div');
            f.className = 'fire-dot';
            f.style.left='50vw';
            f.style.top ='40vh';
            f.style.setProperty('--x',(Math.random()*200-100)+'px');
            f.style.setProperty('--y',(Math.random()*200-100)+'px');
            layer.appendChild(f);
            setTimeout(()=>f.remove(),1500);
        }
    },5000);

});
const closeCard = document.getElementById("closeCard");
closeCard.addEventListener("click", () => {
    popup.classList.remove("show");
    popup.classList.add("hide");

    setTimeout(()=>{
        popup.classList.remove("hide");
    },900);
});

closeCard.addEventListener("click", () => {
    popup.classList.remove("show");

    // reset typing (opsional)
    if (typeof resetTyping === "function") {
        resetTyping();
    }
});


if(index === text.length){
    birthdayFireworks(24);
    showNextButton();
}























var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize the GL context
var gl = canvas.getContext('webgl');
if(!gl){
  console.error("Unable to initialize WebGL.");
}

//Time
var time = 0.0;

//************** Shader sources **************

var vertexSource = `
attribute vec2 position;
void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}
`;

var fragmentSource = `
precision highp float;

uniform float width;
uniform float height;
vec2 resolution = vec2(width, height);

uniform float time;

#define POINT_COUNT 8

vec2 points[POINT_COUNT];
const float speed = -0.5;
const float len = 0.25;
float intensity = 1.3;
float radius = 0.008;

//https://www.shadertoy.com/view/MlKcDD
//Signed distance to a quadratic bezier
float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C){    
	vec2 a = B - A;
	vec2 b = A - 2.0*B + C;
	vec2 c = a * 2.0;
	vec2 d = A - pos;

	float kk = 1.0 / dot(b,b);
	float kx = kk * dot(a,b);
	float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;
	float kz = kk * dot(d,a);      

	float res = 0.0;

	float p = ky - kx*kx;
	float p3 = p*p*p;
	float q = kx*(2.0*kx*kx - 3.0*ky) + kz;
	float h = q*q + 4.0*p3;

	if(h >= 0.0){ 
		h = sqrt(h);
		vec2 x = (vec2(h, -h) - q) / 2.0;
		vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));
		float t = uv.x + uv.y - kx;
		t = clamp( t, 0.0, 1.0 );

		// 1 root
		vec2 qos = d + (c + b*t)*t;
		res = length(qos);
	}else{
		float z = sqrt(-p);
		float v = acos( q/(p*z*2.0) ) / 3.0;
		float m = cos(v);
		float n = sin(v)*1.732050808;
		vec3 t = vec3(m + m, -n - m, n - m) * z - kx;
		t = clamp( t, 0.0, 1.0 );

		// 3 roots
		vec2 qos = d + (c + b*t.x)*t.x;
		float dis = dot(qos,qos);
        
		res = dis;

		qos = d + (c + b*t.y)*t.y;
		dis = dot(qos,qos);
		res = min(res,dis);
		
		qos = d + (c + b*t.z)*t.z;
		dis = dot(qos,qos);
		res = min(res,dis);

		res = sqrt( res );
	}
    
	return res;
}


//http://mathworld.wolfram.com/HeartCurve.html
vec2 getHeartPosition(float t){
	return vec2(16.0 * sin(t) * sin(t) * sin(t),
							-(13.0 * cos(t) - 5.0 * cos(2.0*t)
							- 2.0 * cos(3.0*t) - cos(4.0*t)));
}

//https://www.shadertoy.com/view/3s3GDn
float getGlow(float dist, float radius, float intensity){
	return pow(radius/dist, intensity);
}

float getSegment(float t, vec2 pos, float offset, float scale){
	for(int i = 0; i < POINT_COUNT; i++){
		points[i] = getHeartPosition(offset + float(i)*len + fract(speed * t) * 6.28);
	}
    
	vec2 c = (points[0] + points[1]) / 2.0;
	vec2 c_prev;
	float dist = 10000.0;
    
	for(int i = 0; i < POINT_COUNT-1; i++){
		//https://tinyurl.com/y2htbwkm
		c_prev = c;
		c = (points[i] + points[i+1]) / 2.0;
		dist = min(dist, sdBezier(pos, scale * c_prev, scale * points[i], scale * c));
	}
	return max(0.0, dist);
}

void main(){
	vec2 uv = gl_FragCoord.xy/resolution.xy;
	float widthHeightRatio = resolution.x/resolution.y;
	vec2 centre = vec2(0.5, 0.5);
	vec2 pos = centre - uv;
	pos.y /= widthHeightRatio;
	//Shift upwards to centre heart
	pos.y += 0.02;
	float scale = 0.000015 * height;
	
	float t = time;
    
	//Get first segment
  float dist = getSegment(t, pos, 0.0, scale);
  float glow = getGlow(dist, radius, intensity);
  
  vec3 col = vec3(0.0);

	//White core
  col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
  //Pink glow
  col += glow * vec3(1.0,0.05,0.3);
  
  //Get second segment
  dist = getSegment(t, pos, 3.4, scale);
  glow = getGlow(dist, radius, intensity);
  
  //White core
  col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
  //Blue glow
  col += glow * vec3(0.1,0.4,1.0);
        
	//Tone mapping
	col = 1.0 - exp(-col);

	//Gamma
	col = pow(col, vec3(0.4545));

	//Output to screen
 	gl_FragColor = vec4(col,1.0);
}
`;

//************** Utility functions **************

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
	gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform1f(widthHandle, window.innerWidth);
  gl.uniform1f(heightHandle, window.innerHeight);
}


//Compile shader and combine with source
function compileShader(shaderSource, shaderType){
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
  	throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
  }
  return shader;
}

//From https://codepen.io/jlfwong/pen/GqmroZ
//Utility to complain loudly if we fail to find the attribute/uniform
function getAttribLocation(program, name) {
  var attributeLocation = gl.getAttribLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find attribute ' + name + '.';
  }
  return attributeLocation;
}

function getUniformLocation(program, name) {
  var attributeLocation = gl.getUniformLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find uniform ' + name + '.';
  }
  return attributeLocation;
}

//************** Create shaders **************

//Create vertex and fragment shaders
var vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
var fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

//Create shader programs
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);

//Set up rectangle covering entire canvas 
var vertexData = new Float32Array([
  -1.0,  1.0, 	// top left
  -1.0, -1.0, 	// bottom left
   1.0,  1.0, 	// top right
   1.0, -1.0, 	// bottom right
]);

//Create vertex buffer
var vertexDataBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

// Layout of our data in the vertex buffer
var positionHandle = getAttribLocation(program, 'position');

gl.enableVertexAttribArray(positionHandle);
gl.vertexAttribPointer(positionHandle,
  2, 				// position is a vec2 (2 values per component)
  gl.FLOAT, // each component is a float
  false, 		// don't normalize values
  2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
  0 				// how many bytes inside the buffer to start from
  );

//Set uniform handle
var timeHandle = getUniformLocation(program, 'time');
var widthHandle = getUniformLocation(program, 'width');
var heightHandle = getUniformLocation(program, 'height');

gl.uniform1f(widthHandle, window.innerWidth);
gl.uniform1f(heightHandle, window.innerHeight);

var lastFrame = Date.now();
var thisFrame;

function draw(){
	
  //Update time
	thisFrame = Date.now();
  time += (thisFrame - lastFrame)/1000;	
	lastFrame = thisFrame;

	//Send uniforms to program
  gl.uniform1f(timeHandle, time);
  //Draw a triangle strip connecting vertices 0-4
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  requestAnimationFrame(draw);
}

draw();