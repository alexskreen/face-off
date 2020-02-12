
export class FakeCat{
  constructor() {
    this.cat = '';
  
  }
  
  async getFakeCat() {
    try {
      let response = await fetch(`https://thiscatdoesnotexist.com/`);
      let {url} = await response;
      if(url === 'https://thiscatdoesnotexist.com/'){
        this.cat = url;
      }else{
        console.error("ERROR ERROR! The Api DIDNT send a cat " )
      }
     
    } catch (error) {
      console.error("ERROR ERROR!" + error.message);
    }
  }
  
}
