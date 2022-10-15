const ratings = document.querySelectorAll('.rating');
const sendButton = document.getElementById('send');
const ratingContainer = document.querySelector('.rating-container');
let selectedRating = 0;

ratings.forEach((rating) =>
  rating.addEventListener('click', (e) => {
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.innerHTML;
  })
);

sendButton.addEventListener('click', () => {
  console.log(anyRatingActive());
  if (anyRatingActive() == true) {
    ratingContainer.classList.remove('start');
    ratingContainer.classList.add('end');
    ratingContainer.innerHTML = `
    <img class="end" src="./images/illustration-thank-you.svg" alt="" />
    <p class="selected-rating">You selected ${selectedRating} out of 5</p>
    <h1 class="end">Thank you!</h1>
    <p class="we-appreciate">We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!</p>
    `;
  } else {
    console.log('yo, whats up');
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

function anyRatingActive() {
  for (const rating of ratings) {
    {
      if (rating.classList.contains('active')) {
        return true;
      }
    }
  }
}
