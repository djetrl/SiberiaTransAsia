if (window.jQuery) { 
  console.log('jQuery enable');
} else {

}

$(document).ready(function(){
  const quotesBtn = $('.quotes_btn');
  console.log(quotesBtn);
  const quotesList = document.querySelector('.quotes_list');
  $(quotesBtn).click(function () {
    console.log('click');
    $.ajax({
      url: "http://127.0.0.1:5500/proxy.php",
      method: "GET",
      dataType: 'json',
      success: function (data) {
        console.log(data);
      },
      error: function (xhr, status, error) {
        console.error(error);
      }
    });

  }); 

});