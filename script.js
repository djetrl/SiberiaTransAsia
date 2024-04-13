if (window.jQuery) { 
  console.log('jQuery enable');
} else {

}

$(document).ready(function(){
  const quotesBtn = $('.quotes_btn');
  console.log(quotesBtn);
  const quotesList = document.querySelector('.quotes_list');
  $(quotesBtn).click(function () {
    $.ajax({
      jsonp: "jsonp",
      dataType: "jsonp",
      url: "http://api.forismatic.com/api/1.0/",
      contentType: "application/jsonp",
      data: {
        lang: "ru",
        method: "getQuote",
        format: 'jsonp'
      },
      success: function({quoteAuthor, quoteText}) { 
        const demoQuote = document.querySelector('#demoQuote')
        if(demoQuote){
          demoQuote.parentNode.removeChild(demoQuote);

        }
        let newQuote = `
          <li class="quotes_item">
            <quote class="quote">
              <quoteText class="quote_text">${quoteText}</quoteText>
              ${quoteAuthor && `<quoteAuthor class="quote_signature">© ${quoteAuthor}</quoteAuthor>`}
            </quote>
          </li>
        `; 
        $(newQuote).hide(0).prependTo(quotesList).slideDown(300); 
        window.scrollIntoView(quotesList)
      }
  }); 

});

});
