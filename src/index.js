// console.log(qqq);
// import render from './templates/friends.hbs';
import './css/styles.css';

function createReview(item) {
    let templateFn = require('./templates/message-template.hbs');
    return templateFn({
        item: item
    });
}