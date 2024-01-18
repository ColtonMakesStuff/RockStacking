let canvas = document.getElementById('myCanvas');
let c = canvas.getContext('2d');


c.fillStyle = '#FFFFFF'; // Set the fill color to white
c.fillRect(0, 0, canvas.width, canvas.height); // Draw a rectangle covering the entire canvas

let background
let gravityAcceleration = .8
let objects 


class Object {
    constructor({x, y, width, height, color, materialDensity }) {
        this.position= {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = width
        this.height = height
        this.color = color
        this.volume = width * height
        this.mass = this.volume * materialDensity
        this.bounces = 0
       
    }
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw();
        this.velocity.y += gravityAcceleration;
        this.position.y += this.velocity.y;
        this.velocity.y += .5;
        this.momentum = {
            x: this.velocity.x * this.mass,
            y: this.velocity.y * this.mass
        };
        if (this.velocity.y > 6) {
        }
        this.checkCollision();
     }
     
     checkCollision() {
        if (this.position.y + this.height > canvas.height) {
            this.position.y = canvas.height - this.height;
        }
        for (let i = 0; i < objects.length; i++) {
            if (objects[i] === this) continue; // Skip checking collision with self

            // i need to adjust this next if statement to see if it is actually on top of the object as well as if it is colliding with the object
            if (this.position.y + this.height >= objects[i].position.y && 
                this.position.y <= objects[i].position.y + objects[i].height
                && this.position.x + this.width >= objects[i].position.x &&
                this.position.x <= objects[i].position.x + objects[i].width) 
                
                
                {
                this.position.y = objects[i].position.y - this.height - .1;
                this.velocity.y = 0;
            }
        }
     }
     
     
    
}

let firstRock = {
    x: 170,
    y: 1,
    width: 200,
    height: 50,
    materialDensity: .008,
    color: "blue",
   
}
const rock = new Object(firstRock)

let secondRock = {
    x: 200,
    y: 100,
    width: 50,
    height: 50,
    materialDensity: .008,
    color: "red",
   
}
const rock2 = new Object(secondRock)

let landingSurface = {
    x: 0,
    y: canvas.height - 50, // Place the surface near the bottom of the canvas
    width: canvas.width,
    height: 50,
    color: "#000000", // Black color for visibility
    materialDensity: 1 // Assuming it's a solid object
 };
 const surface = new Object(landingSurface);
 
objects = [rock, surface, rock2]; // Add more objects to this array as needed


window.onload = function() {
console.log("starting game")  
    
animate()

}

const animate = () => {
    window.requestAnimationFrame(animate)

    c.fillStyle = '#FFFFFF'; // Set the fill color to white
    c.fillRect(0, 0, canvas.width, canvas.height); // Draw a rectangle covering the entire canvas

surface.draw()
surface.update()

rock.draw()
rock.update()

rock2.draw()
rock2.update()

}
