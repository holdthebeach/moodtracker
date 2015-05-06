$(function(){

//===========================================
//============================= Confirm Input
//===========================================    
    
    var valid = []; //setting the input's initial state


    var optionCallback = function(optionId){
          return  function(){
                valid[optionId] = false; //at the start of the function, start with the input as false
                var Options = $(optionId); //select the options of the trigger menu

                for(var index=0;index < Options.length; index++){ //triggerOptions is an obj, so use trad for-loop to not get add'l attribooties
                    if($(Options[index]).val() == $(this).val()){ //if input val = the val of options array item
                    valid[optionId] = true; //reset the state to true
                    break; //leave loop but don't end function
                    }
                }
                $(this).css('color', valid[optionId] ? 'green' : 'red'); //if state true, change css properties
                refreshButton();//call refreshButton function
            };
    }
    
//+++++++ Listen for Change & Keyup on Mood Text Input
//+++++++++++++++++++++++++++++++++++++++++++    
    
    var moodInput = $('#mood-input');//select the input that user types in
        
    //listening for a keyup event in the mood's input box
    moodInput.on('change', optionCallback('#mood-menu option'));// mood input on event END
    moodInput.on('keyup', optionCallback('#mood-menu option'));
    
//+++++++++ Listen for Change & Keyup on Trigger Input
//+++++++++++++++++++++++++++++++++++++++++++
    
    var triggerInput = $('#trigger-input');//select the input that the user types in
    
    //listen for a keyup event in the trigger input field
    triggerInput.on('change', optionCallback('#trigger-menu option'))//trigger input on event END
    triggerInput.on('keyup', optionCallback('#trigger-menu option'))
    
//++++++++++++++++++++++ Enable Submit Button
//+++++++++++++++++++++++++++++++++++++++++++
    
    function refreshButton(){
    //if the state of both validMood and validTrigger are true, enable the button, othwerwise disable
    if( !! valid['#mood-menu option'] && !! valid['#trigger-menu option']){
        $('button').prop('disabled', false);
    } else {
        $('button').prop('disabled', true);// button disabled
    }
    }
    
    
});

//+++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++
    
    function outputUpdate(input) {
        document.querySelector('#level').value = input;
    };

