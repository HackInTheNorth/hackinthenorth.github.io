$(document).ready(function() {
    $('.faqelem').click(function() {
      var faqElement = $(this);
      var question = faqElement.find('.question');
      var answer = faqElement.find('.answer');
      if (!answer.hasClass('activeanswer')) {
        question.addClass('flipButton');
        // answer.css('max-height', 'none');
        // answer.css('max-height', answer.css("height"));
        answer.addClass('activeanswer');
      }
      else if (answer.hasClass('activeanswer')) {
        question.removeClass('flipButton');
        // answer.css('max-height', 0);
        answer.removeClass('activeanswer');
      }
  });
});