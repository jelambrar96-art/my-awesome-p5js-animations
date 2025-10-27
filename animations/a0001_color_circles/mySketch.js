class Circle {
  constructor(x, y, diameter, color) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
    this.transparency = 100; // Transparencia inicial
  }

  draw() {
    // Dibujar el borde ligeramente más oscuro
    strokeWeight(2);
    stroke(color(hue(this.color), saturation(this.color), brightness(this.color) * 0.8, this.transparency));
    fill(color(hue(this.color), saturation(this.color), brightness(this.color), this.transparency));
    ellipse(this.x, this.y, this.diameter);
  }

  increaseTransparency() {
    this.transparency -= 1; // Incrementar transparencia
  }

  isFullyTransparent() {
    return this.transparency <= 0; // Verificar si es completamente transparente
  }
}

let list_circles = [];

function setup() {
  // Configurar el tamaño del canvas al tamaño de la ventana
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 0, 0.1); // Fondo negro con leve transparencia para efecto de desvanecimiento
}

function draw() {
  background(0, 0, 0, 0.1); // Fondo negro con leve transparencia para efecto de desvanecimiento

  // Cada 30 frames, generar un nuevo círculo
  if (frameCount % 10 === 0) {
    let x = random(width);
    let y = random(height);
    let diameter = random(height / 10, height / 3);
    let circleColor = color(random(360), 80, 100); // Color aleatorio en modo HSB
    let newCircle = new Circle(x, y, diameter, circleColor);
    list_circles.push(newCircle);
  }

  // Dibujar todos los círculos
  for (let circle of list_circles) {
    circle.draw();
    circle.increaseTransparency();
  }

  // Eliminar los círculos completamente transparentes
  list_circles = list_circles.filter(circle => !circle.isFullyTransparent());
}
