/**
 * Created by sameer on 11/5/14.
 */
scotchTodo.factory('class1', function ($localstorage) {
    var name="abdul Aziz";
    var addQuestion=[];
    var quizs=[];
    function updateData(){
        $localstorage.setObject('user2',{quizs:quizs});
    }





    if(!localStorage.user)
        $localstorage.setObject('user2',{quizs:quizs});
    else
    if ($localstorage.getObject('user2').quizs)
        quizs=$localstorage.getObject('user2').quizs;


    var makeQuizTaker=
    {
        'addPages': [],
        addQuiz: [

        ],
        addQuestion: [

        ],
        'addLater': []


    };

    function setQuizs(a) {


        quizs.push(a);
        updateData();

    }
    function getQuizs() {

        updateData();
        return quizs;

    }

    function setAddQuestion(a) {

        addQuestion.push(a);


    }
    function getAddQuestion(){

        return addQuestion;
    }
//console.log(selectedCourseFromJoinedCourses);
    function upDate() {
    }


    return {
       name:name
    }

});