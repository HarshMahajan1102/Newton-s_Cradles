class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x : this.offsetX, y : this.offsetY},
            // stiffness: 0.04,
            // length: 100
        }
        //  this.pointB = pointB
        this.Rope = Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }
    display(){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.Rope.bodyB.position;

            strokeWeight(2);

            var Anchor1X = pointA.x
            var Anchor1Y = pointA.y

            var Anchor2X = pointB.x + this.offsetX
            var Anchor2Y = pointB.y + this.offsetY

            line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)

            //line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            //line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        }
    }    
