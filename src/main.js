
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FakeCat } from './fakeCat-service';
import { Game } from './game';
import { RealCat } from './trueCat-service';



$(document).ready(function () {
  let game = new Game;
  let rand = Math.round(Math.random());
  $('.btn').click(event=>{
    (async () => {
                      
      if (rand === 0 && event.target.id === 'fake'){
        game.score += 1;
        
      } else if(rand === 1 && event.target.id === 'real'){
        game.score += 1;
      }
      $('#score').text(game.score)
     
      game.catArray = [];
      let fakeCat = new FakeCat();
      let realCat = new RealCat();
      await fakeCat.getFakeCat();
      await realCat.getRealCat();
      game.addFake(fakeCat.cat);
      game.addReal(realCat.cat);
      rand = Math.round(Math.random());
      $('#fake').attr('src', game.catArray[rand]);
     
            
      
    })();
                
  });
  $('#startButton').click(() => {
    (async () => {
      game.catArray = [];
      let fakeCat = new FakeCat();
      let realCat = new RealCat();
      await fakeCat.getFakeCat();
      await realCat.getRealCat();
      game.addFake(fakeCat.cat);
      game.addReal(realCat.cat);
            
      $('#fake').attr('src', game.catArray[rand]);
    })();
    $('.game').removeClass('hidden');
    $('.startingScreen').addClass('hidden');
  });


});