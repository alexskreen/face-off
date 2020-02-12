export class RealCat {
  constructor() {
    this.cat = '';
  }
  
  async getRealCat() {
    try {
      let response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=1ae12692-f73b-4770-83a3-ca15557bafa7`);
      let body = await response.json();  
      if(body.length === 1){
        this.cat = body[0].url;
      }else{
        console.error("ERROR ERROR! The Api DIDNT send a cat " )
      }
    } catch (error) {
      console.error("ERROR ERROR!" + error.message);
    }
  }
  
}
//api_key=1ae12692-f73b-4770-83a3-ca15557bafa7