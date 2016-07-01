$(document).ready(function() {
  var k;
  var counter = 1;
  var difficulty = '';

  var begin = function() {
    k = new Keyboard();
    
    $("#do1, #re, #mi, #fa, #sol, #la, #ti, #do2").on("click", function() {
      k.playSound($(this).attr('id'));
    });
    
    k.dailyDo();
    
    $("#do1, #re, #mi, #fa, #sol, #la, #ti, #do2").on("click", function() {
      this.buttonPush = $(this).attr('id');
      k.updateOut(this.buttonPush)
      k.recordInput(this.buttonPush);
      k.compareAnswers();
    });

  }

  $(".btn").on("click", function() {
    difficulty = $(this).attr("id");
    begin();
  });

  $("#do2, #ti, #la, #sol, #fa, #mi, #re, #do1").mouseover(function() {

    $("#" + $(this).attr('id') + "Hand").css({
      "visibility": "visible",
      "height": "70px"
    });
  });

  $("#do2, #ti, #la, #sol, #fa, #mi, #re, #do1").mouseout(function() {
    $("#" + $(this).attr('id') + "Hand").css({
      "visibility": "hidden",
      "height": "28px"
    });
  });

  function Keyboard() {
    this.difficulty = difficulty;
    $(".progress-bar").css('width', (counter/41)*100 +'%').html(counter + "/41");
    this.arr = [];
    this.inputArr = [];
    this.subAnswer = [];

    this.do2 = new Audio("https://www.dropbox.com/s/s64umbiv1lpanvv/C3.wav?raw=1");

    this.ti = new Audio("https://www.dropbox.com/s/vqtfv449hr57tmd/B.wav?raw=1");

    this.la = new Audio("https://www.dropbox.com/s/j87c7zpomt30utj/A.wav?raw=1");

    this.sol = new Audio("https://www.dropbox.com/s/84kbgf7fx8tmup0/G.wav?raw=1");

    this.fa = new Audio("https://www.dropbox.com/s/e356zdzhooi1eu6/F.wav?raw=1");

    this.mi = new Audio("https://www.dropbox.com/s/jqliyke530k9rxm/E.wav?raw=1");

    this.re = new Audio("https://www.dropbox.com/s/ahjidk50cw1t71b/D.wav?raw=1");

    this.do1 = new Audio("https://www.dropbox.com/s/unjs6c8tbnfp64e/C.wav?raw=1");

    function go() {
      laTimed = window.setTimeout(function() {
        begin();
      }, 2000);
    }

    function aiDo2(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('do2');
        k.updateOut('do');
      }, time);
    }

    function aiTi(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('ti');
        k.updateOut('ti');
      }, time);
    }

    function aiLa(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('la');
        k.updateOut('la');
      }, time);
    }

    function aiSol(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('sol');
        k.updateOut('sol');
      }, time);
    }

    function aiFa(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('fa');
        k.updateOut('fa');
      }, time);
    }

    function aiMi(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('mi');
        k.updateOut('mi');
      }, time);
    }

    function aiRe(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('re');
        k.updateOut('re');
      }, time);
    }

    function aiDo1(time) {
      laTimed = window.setTimeout(function(time) {
        k.playSound('do1');
        k.updateOut('do');
      }, time);
    }

    this.updateOut = function(newText) {
      $("#out").html(newText);
    }

    this.dailyDo = function() {
      if (counter > 0) {
        aiSol(1000);
      }
      if (counter > 1) {
        aiMi(2000);
      }
      if (counter > 2) {
        aiSol(3000);
      }
      if (counter > 3) {
        aiMi(4000);
      }
      if (counter > 4) {
        aiSol(5000);
      }
      if (counter > 5) {
        aiLa(6000);
      }
      if (counter > 6) {
        aiSol(7000);
      }
      if (counter > 7) {
        aiMi(8000);
      }
      if (counter > 8) {
        aiDo1(9000);
      }
      if (counter > 9) {
        aiMi(10000);
      }
      if (counter > 10) {
        aiSol(11000);
      }
      if (counter > 11) {
        aiMi(12000);
      }
      if (counter > 12) {
        aiDo1(13000);
      }
      if (counter > 13) {
        aiRe(14000);
      }
      if (counter > 14) {
        aiMi(15000);
      }
      if (counter > 15) {
        aiFa(16000);
      }
      if (counter > 16) {
        aiSol(17000);
      }
      if (counter > 17) {
        aiLa(18000);
      }
      if (counter > 18) {
        aiTi(19000);
      }
      if (counter > 19) {
        aiDo2(20000);
      }
      if (counter > 20) {
        aiTi(21000);
      }
      if (counter > 21) {
        aiLa(22000);
      }
      if (counter > 22) {
        aiSol(23000);
      }
      if (counter > 23) {
        aiFa(24000);
      }
      if (counter > 24) {
        aiMi(25000);
      }
      if (counter > 25) {
        aiRe(26000);
      }
      if (counter > 26) {
        aiDo1(27000);
      }
      if (counter > 27) {
        aiRe(28000);
      }
      if (counter > 28) {
        aiDo1(29000);
      }
      if (counter > 29) {
        aiMi(30000);
      }
      if (counter > 30) {
        aiDo1(31000);
      }
      if (counter > 31) {
        aiFa(32000);
      }
      if (counter > 32) {
        aiDo1(33000);
      }
      if (counter > 33) {
        aiSol(34000);
      }
      if (counter > 34) {
        aiDo1(35000);
      }
      if (counter > 35) {
        aiLa(36000);
      }
      if (counter > 36) {
        aiDo1(37000);
      }
      if (counter > 37) {
        aiTi(38000);
      }
      if (counter > 38) {
        aiDo1(39000);
      }
      if (counter > 39) {
        aiDo2(40000);
      }
      if (counter > 40) {
        aiDo1(41000);
      }

    }

    this.recordInput = function(input) {
      this.inputArr.push(input);
      console.log(this.inputArr)

    }

    this.eraseInput = function() {
      this.arr = [];
    }

    this.compareAnswers = function() {
      this.answer = ["sol", "mi", "sol", "mi", "sol", "la", "sol", "mi", "do1", "mi", "sol", "me", "do1", "re", "mi", "fa", "sol", "la", "ti", "do2", "ti", "la", "sol", "fa", "mi", "re", "do1", "re", "do1", "mi", "do1", "fa", "do1", "sol", "do1", "la", "do1", "ti", "do1"];
      for (var i = 0; i < counter; i++) {

        this.subAnswer[i] = this.answer[i];
      }
      console.log(this.subAnswer + " and " + this.inputArr)
      if (this.inputArr.toString() === this.subAnswer.toString()) {
        counter++;
        console.log('equal')
        $("#out").html("nice!");
        k.reset();

      } else if (this.inputArr[this.inputArr.length-1] !== this.subAnswer[this.inputArr.length-1]) {
        $("#out").html("oops!");
        console.log(this.difficulty)
        if (this.difficulty === 'hard'){
          counter = 1;
        } else if (counter > 1) {
          counter--;
        }
        k.reset()
      }

    }
    
    this.reset = function() {
      this.inputArr = [];
        $("#do1, #re, #mi, #fa, #sol, #la, #ti, #do2").unbind('click');
        go();
    }
    
    this.playSound = function(key) {
      this.key = key;
      if (key === 'do2') {
        this.do2.play();
      } else if (key === 'ti') {
        this.ti.play();
      } else if (key === 'la') {
        this.la.play();
      } else if (key === 'sol') {
        this.sol.play();
      } else if (key === 'fa') {
        this.fa.play();
      } else if (key === 'mi') {
        this.mi.play();
      } else if (key === 're') {
        this.re.play();
      } else if (key === 'do1') {
        this.do1.play();
      }
    }

  }

});