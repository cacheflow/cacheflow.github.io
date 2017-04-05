/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
let openedModal = {}

function dynamicallyOpenModals() {
  let searchParams = window.location.search

  if(searchParams) {
    let searchParamName = searchParams.split('?')[1]
    let modals = Array.from(document.getElementsByClassName('portfolio-modal'))
    let foundModal = modals.filter(modal => modal.id == searchParamName)[0]
    changeDomStylesToOpenModal(foundModal)
  }
  return false
}

function changeDomStylesToOpenModal(el) {
  document.querySelector('body').classList.add('modal-open')
  el.classList.add('in')
  el.style.display = "block"
  openedModal.modal = el
}

function closeModalviaClick() {
  let el = openedModal.modal
  let body = document.querySelector('body').classList
  if ( Array.from(body).includes('modal-open') ) {
      body.remove('modal-open')
      el.classList.remove('in')
      el.style.display = "none"
  }
}

let modals = Array.from(document.getElementsByClassName('modal'))
modals.forEach(modal => modal.addEventListener('click', closeModalviaClick))

dynamicallyOpenModals()
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
