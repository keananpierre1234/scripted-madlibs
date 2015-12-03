function generateMadlib() {
  
  // This is the starting story
  var story = "Welcome to ScriptEd! Our mascot is the PLURAL_NOUN.  We love to VERB! We love to VERB-1! ";
  

  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  inputValue = document.getElementById("verb-1").value;
  story = story.replace("VERB-1", inputValue);
  
 inputValue = document.getElementbyId("place").value;
  story = story.replace("place", inputValue);
  
 inputValue = document.getElementbyId("noun").value;
 story = story.replace("noun", inputValue);
 
 inputValue = document.getElementbyId("verb").value;
 
 
 
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}