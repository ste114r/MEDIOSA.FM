$(document).ready(function () {
    // Only keep the hover effect for visual feedback
    $('.card').mouseenter(function (item) {
        $('.card').removeClass('card-selected');
        item.currentTarget.classList.add('card-selected');
    });
});