describe ("stripText", function() {
  it ("Removes spaces from a string", function(){
    expect (stripText(" ")).to.equal("");
  });

  it ("Removes punctuations from string", function(){
    expect (stripText("!'")).to.equal("");
  });

  it ("Makes all characters lowercase", function(){
    expect (stripText("HiI")).to.equal("hii");
  });
});

describe ("length", function() {
  it ("count the characters in the stripped text", function(){
    expect (length("helloworld")).to.equal(10);
  });
});

describe ("columns", function() {
  it ("establish number of columns", function(){
    expect (columns("hasthewholeworldgonecrazyamitheonlyonearoundherewhogivesashitabouttherulesmarkitzero")).to.equal(10);
  });
});

describe ("array", function() {
  it ("puts string into an array", function(){
    expect (array("has")).to.eql(["h", "a", "s"]);
  });
});

describe ("slice", function() {
  it ("slices array into multiple arrays", function(){
    expect (slice(["h", "a", "s"])).to.eql(["h", "a"]);
  });
});
