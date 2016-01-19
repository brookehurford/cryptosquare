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
