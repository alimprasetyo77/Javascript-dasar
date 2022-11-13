class Shape{
    paint(){
        console.info('print Shape')
    }
}

class Circle extends Shape{
    paint(){
        super.paint();
        console.info('print Circle');
    }
}

const circle = new Circle();
circle.paint();

