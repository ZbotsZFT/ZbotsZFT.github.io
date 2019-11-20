$('.input-number').each(function (index) {

    var inputElement = this;

    var minus = $(this).prev()
    var plus = $(this).next();

    var max = $(this).prop('max');
    var min = $(this).prop('min');

    var formula = Number($(this).attr('formula'));

    var result = 0;

    $(minus).click(function () {
        var value =  $(inputElement).val();
        if (isNaN(value)) {
            $(inputElement).val(0);
            return;
        }
        value--;

        if(!min || value >= min) {
            $(inputElement).val(value);
            result = value * formula;
            $('#result'+index).text(result);
            
            getTotalPrice();
          }
       
    });

    $(plus).click(function () {
        var value =  $(inputElement).val();
        if (isNaN(value)) {
            $(inputElement).val(0);
            return;
        }
        value++;

        if(!max || value <= max) {
            $(inputElement).val(value);
            result = value * formula;
            $('#result'+index).text(result);
            getTotalPrice();
          }
          
    });

    $('#result'+index).text(result);
});


$('.input-number').each(function (index) {
        $(this).change(function() {
            var result;
            var formula = Number($(this).attr('formula'));
            var value = $(this).val()
        
            result = value * formula;
            $('#result'+index).text(result);
            getTotalPrice();
        });
    });





var getTotalPrice = function () {

    var totalPrice = 0;

    $('.calc-cell').find('span').each(
        function(){
            totalPrice += Number($(this).text());
            console.log(totalPrice)
            $('#price').text(totalPrice);
        }
    );
};