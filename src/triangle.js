export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  notTriangle() {
    if(((this.side1 + this.side2) <= this.side3) || ((this.side1 + this.side3) <= this.side2) || ((this.side3 + this.side2) <= this.side2)){
      return true;
    } else {
      return false;
    }
  }

  equalTriangle() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return true;
    } else {
      return false;
    }
  }

  isoscelesTriangle() {
    if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side3 === this.side2)) {
      return true;
    } else {
      return false;
    }
  }
}
