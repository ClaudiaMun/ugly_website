//calculator
var displayValue = '0';
  $('#result').text(displayValue);

  $('.key').each(function(index, key){
      $(this).click(function(e){
          if(displayValue == '0') displayValue = '';
          if($(this).text() == 'C')
          {
              displayValue = '0';
              $('#result').text(displayValue);
          }
          else if($(this).text() == '=')
          {
              try
              {
                  displayValue = eval(displayValue);
                  $('#result').text(displayValue);
                  displayValue = '0';
              }
              catch (e)
              {
                  displayValue = '0';
                  $('#result').text('ERROR');
              }
          }
          else
          {
              displayValue += $(this).text();
              $('#result').text(displayValue);
          }
          e.preventDefault()
      })
  })


//candy
  const nextNext = document.getElementById('next-next')
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  const testimonial1 = document.querySelector('.candy1');
  const testimonial2 = document.querySelector('.candy2');
  const testimonial3 = document.querySelector('.candy3')

  const tests = document.querySelector('.tests');

  let nextNextInt = window.setInterval(function() {
    if (tests.classList.contains('second')) {
      tests.classList.remove('second');

      tests.classList.add('third');
    }

  }, 4000)


  let nextint = window.setInterval(function() {
    if (tests.classList.contains('first')) {
      tests.classList.remove('first');

      tests.classList.add('second');
    }

  }, 8000)

  let prevint = window.setInterval(function() {

    if (tests.classList.contains('third')) {
      tests.classList.remove('third');

      tests.classList.add('first');
    }
  }, 16000)

  function dotClick(oldClassOne, oldClassTwo, newClass) {
    if (tests.classList.contains(oldClassOne)) {
      tests.classList.remove(oldClassOne);
    }

    if (tests.classList.contains(oldClassTwo)) {
      tests.classList.remove(oldClassTwo)
    }

    window.clearInterval(nextNextInt);
    window.clearInterval(nextint);
    window.clearInterval(prevint);
    tests.classList.add(newClass);
  }

  nextNext.addEventListener("click", function() {

    dotClick('second', 'first', 'third');

  })



  next.addEventListener("click", function() {

    dotClick('first', 'third', 'second');

  })

  prev.addEventListener("click", function() {

    dotClick('second', 'third', 'first');

  })
