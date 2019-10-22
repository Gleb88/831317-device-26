var link = document.querySelector(".write-us-btn");
var feedback = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackLogin = feedback.querySelector(".feedback-input-name");
var feedbackEmail = document.querySelector(".feedback-input-email");
var feedbackText = document.querySelector(".feedback-textarea");
var feedbackForm = document.querySelector(".feedback__form");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
    feedbackLogin.focus();
  });


feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
  });    
  
  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackLogin.value || !passfeedbackEmailword.value || !feedbackText.value) {
      evt.preventDefault();
      feedback.classList.remove("modal-error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("modal-error");
    }
  });  

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("modal-show")) {
        feedback.classList.remove("modal-show");
        feedback.classList.remove("modal-error");
      }
    }
  });