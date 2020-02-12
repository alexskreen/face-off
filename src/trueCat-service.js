export class RealCat {
    constructor(id) {
      this.cat = '';
      this.id = 'real';
    }
  
    async getRealCat() {
      try {
        let response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=1ae12692-f73b-4770-83a3-ca15557bafa7`);
        let body = await response.json();        
       this.cat = body[0].url
      } catch (error) {
        console.error("ERROR ERROR!" + error.message);
      }
    }
  
  }
//api_key=1ae12692-f73b-4770-83a3-ca15557bafa7