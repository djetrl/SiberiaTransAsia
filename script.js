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
      url: `${window.location.origin}/proxy.php`,
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
