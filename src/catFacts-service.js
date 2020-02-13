export class CatFact {
    constructor() {
        this.fact = '';
    }
    
    async getCatFact() {
        try {
            let response = await fetch('https://cat-fact.herokuapp.com/facts/random');
            let body = await response.json();
            // console.log(body);
            if (body.used === true) {
                console.error("ERROR ERROR! The Api DIDNT send a cat fact")
            } else if (!body.used) {
                this.fact = body.text;
                // console.log(this.CatFact);
                
            }
        }
        catch (error) {
            console.error("ERROR ERROR!" + error.message)
        }
    }
}