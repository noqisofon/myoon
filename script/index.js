var app = angular.module( 'MyoonApp', [ 'ngMaterial' ] );

app.controller( 'AppController', [ '$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav( menuId ).toggle();
    };

    $scope.tweets = [
        {
            screen_name: "id1",
            text: "Hello, World!",
            source: "hoge"
        },
        {
            screen_name: "id2",
            text: "Hello, World!",
            source: "hoge"
        },
        {
            screen_name: "id3",
            text: "Hello, World!",
            source: "hoge"
        }
    ];
} ] );
