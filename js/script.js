//
//***exercise group name screen ***
//prevent duplicate group names
//
//******exercise enter screen********
//
//add cookies
//add way to go back, pull from exercise object
//
//
//******exercise group select screen********
//
//
//*****exercise section**********
//
//
//every success click:
//increment stored weight
//shift to next exercise
//
//every failure click:
//increment failure counter and check current stored weight
//if none stored:
//  store current weight, keep weight at same level
//
//if current weight is below stored weight:
//  store current weight, keep weight at same level, reset counter
// 
//if current weight equals stored weight:
//  if failure counter = 1:
//    keep weight at the same level
//  if failure counter = 2:
//    drop weight
//  if faiure counter = 3:
//    switch exercise, reset counter
//  
//if current weight is above stored weight:
//  store current weight, keep weight at same level

// number of exercises in a given group console.log(allExercises['group1']['exerciseArray'].length);
// grab group name given a groupNum console.log(allExercises['group'+groupNum]['name']);

var currentExerciseNum = 1;
    exerciseName = '';
    exerciseWeight = '';
    exerciseSets = '';
    exerciseReps = '';
    exerciseArray = [];
    groupName = '';
    groupNum = 0;
    allExercises = {};
    currentExercises = [];
    exerciseGroupNamer =
      '<div id=\'exercisegroupnamer\'> \
      <header>Please enter an exercise group name. This group will contain all exercises you \
      perform on a given day. You will be creating a group for each day of exercises you perform.</header> \
      <label for=\'inputgroupname\'>Group:</label> \
      <input type=\'text\' maxlength = 20 name=\'inputgroupname\' id=\'inputgroupname\' required> \
      <a href=\'#\' class=\'button namerproceed disabled\'>Proceed</a> \
      </div>'
    exerciseEnter =       
      '<div id=\'exerciseenter\' class=\'inview\'> \
      <header>Group: <span class=\'groupname\'></span></header> \
      <h1>#<span class=\'exercisenumber\'></span></h1> \
      <label for=\'exercisename\'>Exercise Name</label> \
      <input type=\'text\' name=\'exercisename\' id=\'exercisename\' required> \
      <label for=\'exerciseweight\'>Weight lifted (in lbs) *only numbers accepted</label> \
      <input type=\'number\' name=\'exerciseweight\' id=\'exerciseweight\' required> \
      <label for=\'exercisesets\'>Sets *only numbers accepted</label> \
      <input type=\'number\' name=\'exercisesets\' id=\'exercisesets\' required> \
      <label for=\'exercisereps\'>Reps per set *only numbers accepted</label> \
      <input type=\'number\' name=\'exercisereps\' id=\'exercisereps\' required> \
      <ul> \
        <li> \
      <a href=\'#\' class=\'button nextexercisegroup disabled\'>Next Group</a> \
      </li> \
      <li> \
      <a href=\'#\' class=\'button prevexercisebutton disabled\'>Prev Exercise</a> \
      </li> \
      <li> \
      <a href=\'#\' class=\'button nextexercisebutton disabled\'>Add Exercise</a> \
      </li> \
      <li> \
      <a href=\'#\' class=\'button donebutton disabled\'>Finished</a> \
      </li> \
      </ul> \
      </div>'
    exercisePicker =
      '<div id=\'exercisepicker\'> \
      <header>Your exercise groups:</header> \
      </div>'
    workout = 
      '<div id=\'workout\'> \
        <header id=\'workoutname\'></header> \
        <h1 id=\'workoutweight\'></h1> \
        <h1 id=\'workoutsets\'></h1> \
        <h1 id=\'workoutreps\'></h1> \
        <div id=\'resultbuttons\'> \
          <a href=\'#\' class=\'success\'></a> \
          <a href=\'#\' class=\'fail\'></a> \
        </div> \
        <div id=\'timer\'> \
          <h1 id=\'clock\'>02:00</h1> \
          <a href=\'#\' id=\'timerbutton\' class=\'start\'>Start</a> \
          </div> \
        </div> \
      </div> '



$('#exercisenumber').html(currentExerciseNum);

function addGroup(groupName, groupNum){
  allExercises['group'+groupNum] = {name: groupName, exerciseArray: []};
  return true;
}

function addExercise(name,weight,sets,reps){
  console.log(groupNum);
  allExercises['group'+groupNum]['exerciseArray'].push({name: name, weight: weight, sets: sets, reps:reps});
  return true;
}

function fieldValidation(){
  var empty = $(document).find('input').filter(function() {
    return this.value === '';
  });
  return empty.length;
}
//pull out field validation and confirm box, too many variations
//investigate if c variable is necessary, namerproceed may be able to just use the slide function
function nextScreen(clickedButton, appendDiv, slideInDiv, slideInDir, slideOutDiv, slideOutClasses){
  var c = "save";
  if(fieldValidation()>0) {
    if(clickedButton === '.namerproceed'){
      alert('Be sure to enter an exercise group name.');
      return false;
    }else if(clickedButton === '.nextexercisebutton'){
      alert('Please ensure all fields are filled out correctly.');
      return false;
    }else{
      c = confirm('Please ensure all fields are filled out correctly. If you would like to proceed without saving any information from this screen, click OK.');
    }
  }  
  if (c || c === "save"){
    screenSlide(appendDiv,slideInDiv,slideInDir,slideOutDiv,slideOutClasses,slideInDiv);
    setTimeout(function(){
      if(clickedButton === '.prevexercisebutton'){
        currentExerciseNum--;
      }
      if(clickedButton === '.nextexercisebutton'){
        currentExerciseNum++;
      }
      $('.exercisenumber').html(currentExerciseNum);
    },550); 
  }
  if(c ==="save" && clickedButton !== '.namerproceed'){
    exerciseName = $('#exercisename').val();
    exerciseWeight = $('#exerciseweight').val();
    exerciseSets = $('#exercisesets').val();
    exerciseReps = $('#exercisereps').val();
    addExercise(exerciseName, exerciseWeight, exerciseSets, exerciseReps);
  }
  $('.groupname').html(groupName); 
  $(document).find('input').keyup(function(){
  console.log(fieldValidation());
  if(!fieldValidation()){
    $(document).find('.button').removeClass('disabled');
  }else{
    $(document).find('.button').addClass('disabled');
  }
});
};

function screenSlide(appendDiv, slideInDiv, slideInDir, slideOutDiv, slideOutClasses){
      $('.container').append(appendDiv);
    $(slideInDiv).addClass(slideInDir);
    setTimeout(function(){
      $(slideOutDiv).attr('class',slideOutClasses);
      $(slideInDiv).addClass('slideIn');
      setTimeout(function(){
        $('.remove').remove();
      },1000);
    },1);
}

function exerciseEmpty(){
  for(var i = 1; i<=groupNum; i++){
    if(groupName == allExercises['group'+i]['name']){
      if(!allExercises['group'+i]['exerciseArray'].length){
        return 'Be sure to add an exercise before proceeding.';
      }
    }
  }
  return false;
}

function displaySaved(){
  console.log('Expand object to see all information currently stored:');
  console.log(allExercises); 
}

$(document).on('click', '.autofill', function(){
  screenSlide(exercisePicker, '#exercisepicker', 'right', '#exercisegroupnamer', 'remove slideOutLeft'); 
  allExercises = {group1: {name:'Tuesday', exerciseArray:
                          [{name:'DB Bench Press', weight: 65, sets:3, reps:6}, 
                           {name:'DB Incline Bench Press', weight: 40, sets:2, reps:10},
                           {name:'DB Military Press', weight: 35, sets:3, reps:6},
                           {name:'BB Lying Tricep Extensions', weight: 22.5, sets:3, reps:10}]},                                                          
                  group2: {name:'Thursday', exerciseArray:
                          [{name:'Pullups', weight: 5, sets:3, reps:10}, 
                           {name:'Bentover Rows', weight: 85, sets:3, reps:8},
                           {name:'DB Hammercurls', weight: 30, sets:2, reps:10},
                           {name:'Situps', weight: 20, sets:3, reps:10}]}  
                  };
  groupNum = 2;
  for (var i=1; i<=groupNum; i++){
      $('#exercisepicker').append('<a href=\'#\' class=\'groupbutton\' id='+allExercises['group'+i]['name']+'>'+allExercises['group'+i]['name']+'</a>');
    }
});

$(document).find('input').keyup(function(){
  console.log(fieldValidation());
  if(!fieldValidation()){
    $(document).find('.button').removeClass('disabled');
  }else{
    $(document).find('.button').addClass('disabled');
  }
});

$(document).on('click', '.namerproceed', function(){
  event.preventDefault();
  if ($(this).hasClass('disabled')){
    return false;
  }

  groupName = $('#inputgroupname').val();
  nextScreen('.namerproceed', exerciseEnter, '#exerciseenter', 'right', '#exercisegroupnamer', 'remove slideOutLeft');
  groupNum++;
  addGroup(groupName, groupNum);
  displaySaved();
});

$(document).on('click','.nextexercisegroup', function(){
  event.preventDefault();
    if ($(this).hasClass('disabled')){
    return false;
  }
  currentExerciseNum = 1;
  nextScreen('.nextexercisegroup', exerciseGroupNamer, '#exercisegroupnamer','left','#exerciseenter', 'remove slideOutRight');
  displaySaved();
});

$(document).on('click','.prevexercisebutton', function(){
  event.preventDefault();
  if(currentExerciseNum===1){
    alert("No previous exercises found for this group.");
    return false;
  }
  nextScreen('.prevexercisebutton', exerciseEnter, '.inview','left','#exerciseenter', 'remove slideOutRight');
  displaySaved();
});

$(document).on('click','.nextexercisebutton', function(){
  event.preventDefault();
  nextScreen('.nextexercisebutton', exerciseEnter, '.inview','right', '#exerciseenter','remove slideOutLeft');
  displaySaved()
});

$(document).on('click', '.donebutton', function(){
  event.preventDefault();
  if(exerciseEmpty() !== false){
    alert(exerciseEmpty());
    return false;
  }
  nextScreen('.donebutton', exercisePicker, '#exercisepicker','right', '#exerciseenter','remove slideOutLeft');
  displaySaved();
    for (var i=1; i<=groupNum; i++){
      $('#exercisepicker').append('<a href=\'#\' class=\'groupbutton\' id='+allExercises['group'+i]['name']+'>'+allExercises['group'+i]['name']+'</a>');
    }
});

$(document).on('click', '.groupbutton', function(){
  event.preventDefault();
  var groupClicked = this.id;
   for (var i=1; i<=groupNum; i++){
    if(groupClicked === allExercises['group'+i]['name']){
      currentExercises = allExercises['group'+i]['exerciseArray'];
      console.log("Expand objects below to view currently selected exercises: ");
      console.log(currentExercises);

    }
  }
  screenSlide(workout, '#workout', 'right', '#exercisepicker', 'remove slideOutLeft'); 
  $('#workoutname').html('Name: '+currentExercises[0]['name']);
  $('#workoutweight').html('Weight: '+currentExercises[0]['weight']+'lbs');
  $('#workoutsets').html('Sets: '+currentExercises[0]['sets']);
  $('#workoutreps').html('Reps: '+currentExercises[0]['reps']);
});


var startTime = 0;
var timeRunning = 0;



$('#timerbutton').click(function(){
  if(!timeRunning){
    timeRunning = 1;
      $( this ).removeClass('start');
      $( this ).addClass('stop');

    var totalTime = 120;
    startTime = new Date().getTime();
  
    
    
    $('#clock').html(timeFormat(totalTime));
  
      var countDown = setInterval(function(){
  
      //only subtract time when tab is showing
        if(showing()){
          totalTime=Math.ceil(120 - showing()); 
        }
        
        if(totalTime <= 0){
          $( '#timerbutton' ).removeClass('stop');
          $( '#timerbutton' ).addClass('start');
          $('#clock').html('02:00');
          totalTime=120;
          clearInterval(countDown);
          timeRunning = 0;
          alert('Done');
        }
  
          $('#clock').html(timeFormat(totalTime));
   
       },1000);

  }    
});

    var timeFormat = function(totalTime){
    
    
      var minutes = Math.floor(totalTime/60);
      var seconds = Math.round(totalTime % 60);
      var minutesStr='';
      var secondsStr='';
    
      if(minutes<10){
        minutesStr='0'+minutes;
      }else{
        minutesStr = minutes;
      }
      if(seconds<10){
        secondsStr='0'+seconds;
      }else{
        secondsStr = seconds;
      }
    
      return(minutesStr+':'+secondsStr);
    
    };
    
    function showing() {
      var timeDiff = 0;
        if (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden) {
          return false;
        
        } else  {
            return timeDiff = (Math.ceil(new Date().getTime() - startTime)/1000);
    
        }
        return false;
    }
    document.addEventListener('visibilitychange', showing);


