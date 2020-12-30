class Paper {
    constructor(x,y,t) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,t,options);
        this.radius = 2*t;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}