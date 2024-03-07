let brown1;

let brown2;

function setup() {
    createCanvas(innerWidth, innerHeight)
    angleMode(DEGREES)
    noLoop()
    //smooth the stroke joins
    strokeJoin(ROUND)
    // tree trunk colours
    brown1 = color("#827157")
    brown2 = color("#69583f")

}

function draw() {
    translate(width / 2, height)
    branch(200)
}

function branch(len) {
    // len = length of branch to draw
    // max angle of the next branch
    let maxAngle = 45
    // relate len to branch thickness
    strokeWeight(map(len, 20, 200, 1, 10));
    // mix two colours for the branch
    stroke(lerpColor(brown1, brown2, random(0.1, 0.7)))
    // draw the line
    line(0, 0, 0, -len)
    // immediately translate the drawing context to the end of the line
    translate(0, -len)
    if (len > 20) {
        if (len < 50) {
            // draw leaves
            // generate semi-random colour
            let r = 200 + random(-20, 20)
            let g = 20 + random(-20, 20)
            let b = 40 + random(-20, 20)
            fill(r, g, b, 100)
            // semi random leaf size
            let size = 15 + random(15)
            noStroke()
            // simple leaves
            // triangle(-size/2, 0, size/2, 0, 0, -size)
            // advanced leaves
            beginShape()
            let radius = random(10, 30)
            // draw part of a circle
            for(let i = 45; i < 135; i++){
                let x = radius * cos(i)
                let y = radius * sin(i)
                // add a vertex for each position
                vertex(x, y)
            }
            // draw opposite part of the circle
            for(let i = 135; i > 45; i--){
                let x = radius * cos(i)
                let y = radius * sin(-i)
                vertex(x, y)
            }
            // join the points together
            endShape(CLOSE)


        } else {
            // branch 1
            // save the current drawing context
            push()
            // rotate the whole canvas
            rotate(random(-maxAngle, maxAngle))
            // create new branch slightly smaller than current
            branch(len * 0.8)
            // restore the drawing context post-rotation
            pop()
            // branch 2
            push()
            rotate(random(-maxAngle, maxAngle))
            branch(len * 0.5)
            pop()
            // branch 3
            push()
            rotate(random(-maxAngle, maxAngle))
            branch(len * 0.75)
            pop()
        }
    }
}
