
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    // Replace 'your-cv-filename.pdf' with the actual filename of your CV
    var downloadLink = document.createElement('a');
    downloadLink.href = 'assets/cv.pdf';
    downloadLink.download = 'cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});