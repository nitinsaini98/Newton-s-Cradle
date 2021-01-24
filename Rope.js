class Rope{
    constructor(body1,pointB){
        var options = {
            bodyA : body1,
           // bodyB : body2,
            pointB : pointB
        }
        this.pointB = pointB
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
        display(){
        var pointA = this.rope.bodyA.position;
       //var pointB = this.rope.bodyB.position;
        strokeWeight(2);

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y
        
        var Anchor2X = this.pointB.x 
        var Anchor2Y = this.pointB.y 

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        } 

}