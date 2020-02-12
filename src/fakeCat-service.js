
export class FakeCat{
    constructor(id) {
      this.cat = '';
      this.id = 'fake';
    }
  
    async getFakeCat() {
      try {
        let response = await fetch(`https://thiscatdoesnotexist.com/`);
        let {url} = await response;
        this.cat = url
      } catch (error) {
        console.error("ERROR ERROR!" + error.message);
      }
    }
  
  }
