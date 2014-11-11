var scotchTodo = angular.module('scotchTodo', [])

.controller('MainCtrl',['$scope', '$http',function($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
//    $http.get('/api/todos')
//        .success(function(data) {
//            $scope.todos = data;
//        })
//        .error(function(data) {
//            console.log('Error: ' + data);
//        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


}])
.controller('signUpCtrl',['$scope', '$http','$location',function($scope, $http,$location,class2) {
   // $scope.formData = '';
    // when landing on the page, get all todos and show them

  //$scope.name=class2.name;
    alert($scope.name);
   $scope.signUp=function(){var data=$scope.obj;
       console.log(data);

if($scope.obj.userName=="admin" && $scope.obj.password=="admin"){
     $location.path('/signIn');}
       else{
           $location.path('/');
       }
   };
    // when submitting the add form, send the text to the node API



}])
.controller('signInCtrl',['$scope', '$http','$location' ,function($scope, $http,$location) {
    // $scope.formData = '';
    // when landing on the page, get all todos and show them
alert("dfd");
    $scope.signIn=function(){
       // var data=$scope.obj;
      //  $scope.courses=['HTML5','JAVASCRIPT','ANGULARJS','NODE.JS','MONGODB','ANDROID','JAVA','SWIFT'];

      //  console.log(data);
        $location.path('/classes');

    }
    // when submitting the add form, send the text to the node API


}])
.controller('classesCtrl',['$scope', '$http','$location',function($scope, $http,$location) {
    // $scope.formData = '';
    // when landing on the page, get all todos and show them

    //var length= studentClass1.getStudent;
    console.log(length);
    $scope.addClass1=function(){
    alert("fgfd");
        if(10<11){alert(length);
        var data=$scope.obj;
        $scope.courses=['HTML5','JAVASCRIPT','ANGULARJS','NODE.JS','MONGODB','ANDROID','JAVA','SWIFT'];
            $scope.classes=
            //console.log(data);
        $location.path('/studentData');}

    }
    // when submitting the add form, send the text to the node API


}])
.controller('studentInfoCtrl',['$scope', '$http','$location',function($scope, $http,$location,studentClass1) {
    // $scope.formData = '';
    // when landing on the page, get all todos and show them
    $scope.courseArr=['HTML5','JAVASCRIPT','ANGULARJS','NODE.JS','MONGODB','ANDROID','JAVA','SWIFT'];
console.log( $scope.courseArr);
    //var length= studentClass1.getStudent;
   // console.log(length);
    $scope.addClass1=function(){
        alert("fgfd");
        if(10<11){alert(length);}
        var data=$scope.obj;

            //console.log(data);
            $location.path('/studentData');

    }
    // when submitting the add form, send the text to the node API


}])









.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/signUp.html',
            controller: 'signUpCtrl'
        })
    .when('/signIn', {
         templateUrl: 'views/signIn.html',
       controller: 'signInCtrl'
     })
       .when('/classes', {
            templateUrl: 'views/classes.html',
            controller: 'classesCtrl'
        })
        .when('/studentData', {
            templateUrl: 'views/studentData.html',
            controller: 'studentInfoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]).factory('$localstorage', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}]).factory('Class2',function(){

        var name="badar";



        return{name:name}




    });

