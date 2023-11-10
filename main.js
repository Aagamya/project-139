function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canavs.parent('canvas');
	
	instializeInSetup(mario);
}

function draw() {
	game()
}






