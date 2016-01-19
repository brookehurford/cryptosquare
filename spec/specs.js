describe ("stripText", function() {
  it ("Removes spaces from a string", function(){
    expect (stripText("Hi it's Epicodus")).to.equal("Hiit'sEpicodus");
  });
});
