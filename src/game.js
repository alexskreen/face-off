
// Create base values for user
export class Game {
  constructor() {
   this.realCat = '';
   this.fakeCat = '';
   this.catArray=[];
   this.score = 0;

  }
  addFake(cat){
    this.fakeCat = cat
    this.catArray.push(cat)
  }
  addReal(cat){
    this.realCat = cat
    this.catArray.push(cat)
  }
}