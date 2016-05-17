adminurl = "http://localhost/venture/vsBackend/rest/index.php/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {


    return {

        signin: function (email, password) {
            return $http.get(adminurl + "users/signin", {
                params: {
                    email: email,
                    password: password
                }
            });

        },
        
        checkemail: function (email) {
            console.log(email);
            return $http.get(adminurl + "users/getoneby", {
                params: {
                    field: 'email',
                    value: email
                }
            });

        },
        registeruser: function (data) {
            return $http.get(adminurl + "users/insert", {
                params: {
                    data: data
                }
            });

        },

        getallphotos: function () {
            return $http.get(adminurl + "photos/getall", {
                params: {}
            });

        },



    }
});