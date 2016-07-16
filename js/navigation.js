//adminurl = "http://localhost/websites/venturewebsite/vsBackend/rest/index.php/";
adminurl = "http://venturestartups.in/vsBackend/rest/index.php/";


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
            return $http.get(adminurl + "photos/load6photos", {
                params: {}
            });

        },
        getload16photos: function () {
            return $http.get(adminurl + "photos/load16photos", {
                params: {}
            });
        },
        getnext8photos: function (c) {
            return $http.get(adminurl + "photos/next8photos", {
                params: {
                    count: c
                }
            });
        },
        get4newsletter: function () {
            return $http.get(adminurl + "newsletters/load4newsletters", {
                params: {}
            });
        },
        get8newsletter: function () {
            return $http.get(adminurl + "newsletters/load8newsletters", {
                params: {}
            });
        },
        getnext4newsletter: function (c) {
            return $http.get(adminurl + "newsletters/next4newsletters", {
                params: {
                    count: c
                }
            });
        },
        get4events: function () {
            return $http.get(adminurl + "events/load4events", {
                params: {}
            });
        },
        get8events: function () {
            return $http.get(adminurl + "events/load8events", {
                params: {}
            });
        },
        get3videos: function () {
            return $http.get(adminurl + "videos/load3videos", {
                params: {}
            });
        },
        get6videos: function () {
            return $http.get(adminurl + "videos/load6videos", {
                params: {}
            });
        },
        getnext3videos: function (c) {
            return $http.get(adminurl + "videos/next3videos", {
                params: {
                    count: c
                }
            });
        },
        getsubscribers: function (e) {
            return $http.get(adminurl + "users/subscribe", {
                params: {
                    email: e
                }
            });
        },
        getalltags: function () {
            return $http.get(adminurl + "tags/getall", {
                params: {}});
        },
        tagfilter: function (tagarray) {
            return $http.get(adminurl + "events/tagfilter", {
                params: {
                    tagarray: tagarray
                }});
        },
        next4events: function (c,tagarray) {
            return $http.get(adminurl + "events/next4events", {
                params: {
                    count:c,
                    tagarray: tagarray
                }});
        },
        sendcontactform: function (name, email, subject, message) {
            return $http.get("http://www.venturestartups.org/mail2.php", {
                params: {
                    name:name,
                    email:email,
                    subject:subject,
                    message:message
                    
                }});
        },



    }
});