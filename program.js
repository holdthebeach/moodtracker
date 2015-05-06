$(document).ready(function(){
    $('form').on('submit', function(event){
        event.preventDefault();
        $.ajax('/record', {
            type: 'POST',
            data: $('form').serialize(),
            success: function(){
                $('#confirmation').show();
            },
            error: function(){
                alert('Error');
            }
        });
    });
    });