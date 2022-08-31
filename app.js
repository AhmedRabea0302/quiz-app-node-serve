const express = require('express');
const cors = require('cors');
const testData = require('./data/TestData.json');
const app = express();
app.use(cors());

/** 
* get-random-words
* get-random-words edge gets us a new list of 10 different words 
*/

app.get('/api/get-random-words', (req, res) => {
    const answersArray = ['noun', 'verb', 'adverb', 'adjective'];

    // To Get A new Random word list every time we hit the end-point
    // That consists of 10 words
    const getNewRandomWorsdList = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    // Check if the random list of words contains all posible types of words
    // It's a simple recursion functon that will call itslf whenever the array is not
    // have the four words types
    function getRandomListOfAllAnswersTypes() {
        const wordsRandomList = getNewRandomWorsdList(testData?.wordList, 10);
        const checkWordsDiversity = answersArray.every(
            answer => wordsRandomList.some(word => word.pos === answer)
        );

        if(checkWordsDiversity) {
            res.send(wordsRandomList);
        } else {
            getRandomListOfAllAnswersTypes();
        }
    }

    getRandomListOfAllAnswersTypes();    
});

/**
 * Returns x raised to the n-th power.
 * Calculate rank edge gets us the final rank of a user accordig to his final score 
 * @param {number} x The Final Score.
 */

app.get('/api/calculate-rank/:score', (req, res) => {
    let counter = 0;
    const score = req.params.score;

    const getRankAccordingToScore = () => {
        testData?.scoresList.forEach(n => (n < score ? counter++ : ''));
    }

    getRankAccordingToScore();

    const rank = ((counter/30) * 100).toFixed(2);
    res.send(rank);
});

// Assign Port Number if not existed
const port = process.env.PORT || 3000;

// Start Listening
app.listen(port, () => {
    console.log(`Listening On Port ${port}`);
})