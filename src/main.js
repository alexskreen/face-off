
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FakeCat } from './fakeCat-service';
import { Game } from './game';
import { RealCat } from './trueCat-service';
import { CatFact } from './catFacts-service';
 let storedLeaderBoard = JSON.parse(localStorage.getItem('storedLeaderBoard')|| "[]");
 function getCatFact(fact){
   console.log(fact);
   
   $(".catFact").html(fact);
 }
  
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
        $('.game').addClass('hidden');
        $('btn-ans').addClass('hidden');
      }
      $('#score').text(game.score)
      game.catArray = [];
      let fakeCat = new FakeCat();
      let realCat = new RealCat();
      let catFact = new CatFact();
      await fakeCat.getFakeCat();
      await realCat.getRealCat();
      await catFact.getCatFact();
      setTimeout(()=>{
        $("#right").addClass('hidden')
        game.addFake(fakeCat.cat);
        game.addReal(realCat.cat);
        rand = Math.round(Math.random());
        $('#fake').attr('src', game.catArray[rand]);   
      }, 250)
      getCatFact(catFact.fact);
    })();
                
  });
  $('#startButton').click(() => {
    (async () => {
      game.catArray = [];
      let fakeCat = new FakeCat();
      let realCat = new RealCat();
      let catFact = new CatFact();
      await fakeCat.getFakeCat();
      await realCat.getRealCat();
       await catFact.getCatFact();
      game.addFake(fakeCat.cat);
      game.addReal(realCat.cat);
     getCatFact(catFact.fact);
      

            
      $('#fake').attr('src', game.catArray[rand]);
    })();
    $('.game').removeClass('hidden');
    $('.startingScreen').addClass('hidden');
    $('#pure-stupidity').addClass('hidden');
  });

  $(".user-info-form").submit(event=>{
    event.preventDefault();
    let initials = $("input#userInput").val()
    $('.game').removeClass('hidden');
    $('btn-ans').removeClass('hidden');
    $('#wrong').addClass('hidden');
    
    localStorage.setItem('storedLeaderBoard', JSON.stringify(game.leaderBoard))
    storedLeaderBoard.push({initials, score: game.score})
    console.log(game.score);
    storedLeaderBoard.sort(function(a, b){return b.score-a.score})
    localStorage.setItem('storedLeaderBoard', JSON.stringify(storedLeaderBoard))
    game.addScore(name);


    $('.leader-cont').removeClass('hidden')
    $('ol#scoreBoard').empty();
    // $('ol.leaderboard').empty();
    
    storedLeaderBoard.forEach(element => {
      $('ol#scoreBoard').append(`<li> ${element.initials} score: ${element.score}</li>`);
      // $('ol#leaderboard').append(`<li> ${element.initials} score: ${element.score}</li>`);

    });
    $('.userInfo').addClass('hidden');
    $('#score').text(game.score)
  })
});
