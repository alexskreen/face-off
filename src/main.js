
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FakeCat } from './fakeCat-service';
import { Game } from './game';
import { RealCat } from './trueCat-service';



$(document).ready(function () {
    let game = new Game
      $('#start').click(()=>{
        (async () => {
            game.catArray = [];
            let fakeCat = new FakeCat();
            let realCat = new RealCat()
            await fakeCat.getFakeCat()
            await realCat.getRealCat()
            game.addFake(fakeCat.cat)
            game.addReal(realCat.cat)
            let rand = Math.round(Math.random());
            console.log(rand);
            console.log(game.catArray);
            
            $('#fake').attr('src', game.catArray[rand])
           })()
           
           
           //   $('#real').attr('src', game.realCat)
           
           
           
        })
               $('#startButton').click(() => {
                   console.log("button works!")
                   $('.game').removeClass('hidden');
                   $('.startingScreen').addClass('hidden');
               });


    })