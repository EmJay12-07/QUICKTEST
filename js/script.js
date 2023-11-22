function done() {
    var a = 0;
    var q1 = document.test.quiz1.value;
    var q2 = document.test.quiz2.value;
    var q3 = document.test.quiz3.value;
    var q4 = document.test.quiz4.value;
    var q5 = document.test.quiz5.value;
    var feed = document.getElementById('feed');
    var score = document.getElementById('score');
    var comment = document.getElementById('comment');
    var test = document.getElementById('test');


    if (q1=="ES6") {a++}
    if (q2=="1995") {a++}
    if (q3=="Prompt") {a++}
    if (q4=="Netscape") {a++}
    if (q5=="Input") {a++}

    let b = a * 20;

    test.style.display = "none";
    score.textContent = 'Your Score is:';
    feed.textContent = b + '%';
    
    if (b > 80) {
        comment.textContent = 'Excellently  Passed. Hit me up for a cup of coffee';

    }
    else if (b >= 50) {
        comment.textContent = 'Fairly Done. You can do better. A retest wont bite';
    }
    else {
        comment.textContent = 'Poorly done. Kindly retake the test';
    }

}