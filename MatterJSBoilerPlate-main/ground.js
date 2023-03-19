class Ground{
   constructor(x,y,w,h){
    var groundoptions = {
      isStatic : true
     }
     this.Body = Bodies.rectangle(x,y,w,h,groundoptions)
     World.add(world, this.Body)
     this.width = w
     this.height = h
   }
   display() {
    push()
    fill("yellow")
    stroke("yellow")
    rectMode (CENTER)
    rect(this.Body.position.x, this.Body.position.y, this.width, this.height)
    pop()
   }
}