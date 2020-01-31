var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plans button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector('.toggle-button');
var mobile = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    /*modal.style.display = 'block';
    backdrop.style.display = 'block';*/
    modal.classList.add('open');
    backdrop.classList.add('open');

  })
}
backdrop.addEventListener('click', function () {
  /*mobile.style.display = 'none';*/
  mobile.classList.remove('open');
  closeModal();
})
if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}
function closeModal() {
  /*backdrop.style.display = "none";
  modal.style.display = "none";*/
  if (modal) {
    modal.classList.remove('open');
  }

  backdrop.classList.remove('open');
}
toggleButton.addEventListener('click', function () {
  /*mobile.style.display = 'block';
  backdrop.style.display = 'block';*/
  mobile.classList.add('open');
  backdrop.classList.add('open');
}
)

