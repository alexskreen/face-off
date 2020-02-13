
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FakeCat } from './fakeCat-service';
import { Game } from './game';
import { RealCat } from './trueCat-service';
 let storedLeaderBoard = JSON.parse(localStorage.getItem('storedLeaderBoard')|| "[]");
 
  
$(document).ready(function () {
  let game = new Game;
  let rand = Math.round(Math.random());
  $('.btn-ans').click(event=>{
    (async () => {              
      if (rand === 0 && event.target.id === 'fake'){
        game.score += 1;
        $('#right').removeClass('hidden');
      } else if(rand === 1 && event.target.id === 'real'){
        game.score += 1;
        $('#right').removeClass('hidden');
      }else{
        $('#wrong').removeClass('hidden');
        $('.userInfo').removeClass('hidden');
      }
      $('#score').text(game.score)
      game.catArray = [];
      let fakeCat = new FakeCat();
      let realCat = new RealCat();
      await fakeCat.getFakeCat();
      await realCat.getRealCat();
      setTimeout(()=>{
        $(".stamp").addClass('hidden')
        game.addFake(fakeCat.cat);
        game.addReal(realCat.cat);
        rand = Math.round(Math.random());
        $('#fake').attr('src', game.catArray[rand]);   
      }, 250)
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
    $('#pure-stupidity').addClass('hidden');
  });

  $(".user-info-form").submit(event=>{
    event.preventDefault();
    let initials = $("input#userInput").val()
    game.addScore(name);
    console.log(game.leaderBoard);
    
    localStorage.setItem('storedLeaderBoard', JSON.stringify(game.leaderBoard))
    storedLeaderBoard.push({initials, score: game.score})
    localStorage.setItem('storedLeaderBoard', JSON.stringify(storedLeaderBoard))



    $('ol#scoreBoard').empty();
    
    storedLeaderBoard.forEach(element => {
      $('ol#scoreBoard').append(`<li> ${element.initials} score: ${element.score}</li>`);
    });
    $('.userInfo').addClass('hidden');
    $('#score').text(game.score)
  })
});
