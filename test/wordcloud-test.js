var tape = require("tape"),
    wordcloud = require("../");

tape("wordcloud() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(wordcloud.wordcloud(), 42);
  test.end();
});
