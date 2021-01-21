// Grade Calculator
var submit = document.getElementById("calc");

submit.addEventListener("click", function () {
    var assign = (((document.getElementById("Ass").value)/100) * .5);
    var groupProject = (((document.getElementById("GP").value)/ 100) * .1);
    var quizzes = (((document.getElementById("Quiz").value)/ 100) * .1);
    var exams = (((document.getElementById("Exams").value)/ 100) * .2);
    var intex = (((document.getElementById("Intex").value)/ 100) * .1);

    var sum = (assign + groupProject + quizzes + exams + intex)
    sum.toFixed(2)
    alert(sum + " %")
})