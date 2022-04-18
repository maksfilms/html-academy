let reviews = document.querySelectorAll('.review');
let button = document.querySelector('.submit-button');
let error= document.querySelector('.error');

for (let review of reviews) {
    review.onchange = function () {
        if (review.dataset.evaluation === 'bad') {
            button.disabled = true;
            error.classList.add('shown');
        } else {
            button.disabled = false;
            error.classList.remove('shown');
          }
      }
  }