
canvas = document.getElementById("myCanvas");


function load_img() {
	function images_2() {
		myCanvas = new Image();
		myCanvas.src = Grass.jpg;
	}
	
	
	block_image_width = 5;
	block_image_height = 5;

function new_image() {
	function images() {
		myCanvas = new Image();
		myCanvas.src = ball.png;
	}
	
	
	block_image_width = 5;
	block_image_height = 5;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

}

	function up() {
		if (can_y >= 0) {
			can_y = can_y - 10;
			console.log("when up arrow pressed; x is: " + can_x + "y is: " + can_y);
			load_img();
			new_image();
		}
	
	}
	
	function down() {
		if (can_y <= 500) {
			can_y = can_y + 10;
			console.log("when down arrow pressed; x is: " + can_x + "y is: " + can_y);
			load_img();
			new_image();
		}
	
	}
	
	function left() {
		if (can_x >= 0) {
			can_x = can_x - 10;
			console.log("when left arrow pressed; x is: " + can_x + "y is: " + can_y);
			load_img();
			new_image();
		}
	
	}
	
	function right() {
		if (rover_x <= 700) {
			rover_x = rover_x + 10;
			console.log("when right arrow pressed; x is: " + rover_x + "y is: " + rover_y);
			load_img();
			new_image();
		}
}
