class Polygon {
    constructor(x,y,radius){
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});
    }
    display(){
        imageMode(CENTER)
        image(polygon-image.png, polygon.position.x,polygon.position.y,40,40);
    }
}