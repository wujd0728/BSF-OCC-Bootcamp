class Shape {
    constructor(width, height){
        this.width = width;
        this. height = height;
    }
    calculateArea(){
        throw new Error("Method not implemented.")
    }
}

class Rectangle extends Shape {
    displayFormula(){
        console.log("the area = width * height");
    }
    calculateArea(){
        
        console.log(`The area is: ${this.width * this.height}.`);
    }

}

const shape1 = new Rectangle(3,5);
shape1.displayFormula();
shape1.calculateArea();