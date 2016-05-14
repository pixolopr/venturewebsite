var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('teamCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/team.html";
        })
    .controller('homeCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval, $location) {
            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/content.html";
            /*===========================================*/

            console.log("HOME CONTROLLER");

            console.log($scope.template.content);

            var bigpeople = [
                {
                    name: "Dhirubhai Ambani – Reliance Group",
                    content: "The father of the equity cult in India. His was a rags to riches story. His father was a school teacher and he sold “bajiyas” to pilgrims on Mount Girnar. Later, he built the company to be the first Indian to feature in Forbes list of 500 richest in the world.",
                    photo: "aboutP1.png"
            },
                {
                    name: "NR Narayana Murthy – Infosys",
                    content: "The NewGen entrepreneur. A visionary to combine ethics with business growth.",
                    photo: "aboutP2.png"
            },
                {
                    name: "Bill Gates – Microsoft",
                    content: "Became an entrepreneur , by promoting Traf O Data.  This was a complete disaster. Then came Microsoft….which shook the world",
                    photo: "aboutP3.png"
            },
                {
                    name: "Jrd Tata – Tata Group",
                    content: "A man of many talents. An extraordinary visionary. His humility and leadership are exemplary",
                    photo: "aboutP4.png"
            },
                {
                    name: "Varghese Kurien – Amul",
                    content: "A social entrepreneur. The Milkman of India. From a small milk powder factory in Anand to build it into a national pride – deserves a place for him in Modern india",
                    photo: "aboutP5.png"
            },
                {
                    name: "Walt Disney – Walt Disney Productions",
                    content: "He was first rejected as he was told that he was not creative. He proved to be the 20th Century genius in creativity. Even his 1st animation film Laugh O Gram was a disaster",
                    photo: "aboutP6.png"
            },
                {
                    name: "Steve Jobs – Apple Corporation",
                    content: "He was booted out of his own company, only to rebound and push Apple to be an empire and all in his 30 years of life",
                    photo: "aboutP7.png"
            },
                {
                    name: "Raunaq Singh – Apollo Tyres",
                    content: "One of the first entrepreneurs of independent India. Raunaq Singh was a powerful figure in corporate India. He was the former president of the Federation of Indian Chambers of Commerce and Industry.",
                    photo: "aboutP8.png"
            },
                {
                    name: "Ekta Kapoor – Balaji Telfilms",
                    content: "From the age of 21, she single handedly built the television soap industry in India.",
                    photo: "aboutP9.png"
            },
                {
                    name: "Azim Premji – Wipro Corporation",
                    content: "Took over family business at 21. The shareholders, at that time, rejected his leadership. He was rejected for being young and “immature”. With determination, built Wipro of Modern India.",
                    photo: "aboutP10.png"
            }
        ];

            $scope.teamnumberup = 4;
            $scope.teamnumberdown = 0;
            $scope.teamarray = [0, 1, 2, 3];
            $scope.nextteamnumber = function () {

                $('.teammemberdivinner').each(function (idx, box) {
                    //SELCT THE BOX
                    var $box = $(box);
                    setTimeout(function () {
                        $box.fadeOut(500, function () {
                            if ($scope.teamarray[idx] < 12) {
                                $scope.teamarray[idx] += 4;
                                $scope.$apply();
                            } else {
                                $scope.teamarray[idx] = idx;
                                $scope.$apply();
                                //$box.fadeIn("slow");
                            };

                        });
                    }, 500 * idx);
                });
            };

            $interval($scope.nextteamnumber, 5000);

            $scope.team = [
                {
                    name: "R Ramkumar",
                    designation: "Chief Promoter",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "ramkumar.png"
        },
                {
                    name: "Yogesh Bala",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "yogesh.png"
        },
                {
                    name: "Kalyani Simham",
                    designation: "Chief Coordinator",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "kalyani.png"
        },
                {
                    name: "Aniithha Sakuru",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "aniittha.png"
        },
                {
                    name: "Raju Kanchibhotla",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "raju.png"
        },
                {
                    name: "Avinash Singh",
                    designation: "Logistics Coordinator",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "avinash.png"
        },
                {
                    name: "Santosh Ajmeera",
                    designation: "Digital Marketing Professional.",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "noname.png"
        },
                {
                    name: "Surya Prabha",
                    designation: "Content Specialist",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "surya.png"
        },
                {
                    name: "Manohar",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "manohar.png"
        },
                {
                    name: "S Kiran Kumar",
                    designation: "Coordinator – Team Training",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "kiran.png"
        },
                {
                    name: "Vijay Santhosh",
                    designation: "Spokesperson",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "vijay.png"
        },
                {
                    name: "Meraj Faheem",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "meraj.png"
        },
                {
                    name: "Bharath Pasam",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "bharath.png"
        },
                {
                    name: "Akhil",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "akhil.png"
        },
                {
                    name: "Suresh",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "suresh.png"
        },
                {
                    name: "Rohith",
                    designation: "CEO",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. adipiscing vitae vel quam proin eget mauris eget",
                    facebook: "www.facebook.com",
                    twitter: "www.twitter.com",
                    linkedin: "https://in.linkedin.com",
                    google: "www.google.com",
                    photo: "rohith.png"
        }
    ];


            var randomcount = 0;
            $scope.people = [];
            var getpeople = function () {
                if (randomcount < 4) {
                    var num = Math.floor((Math.random() * (bigpeople.length - 1)) + 1);
                    $scope.people.push(bigpeople.splice(num, 1)[0]);
                    randomcount++;
                    getpeople();
                };
            };
            getpeople();


            $scope.gototeam = function () {
                $location.path("/team");
            };

            $scope.newsletters = [1, 2, 3, 4];
            $scope.events = [1, 2];
            $scope.galimages = [1, 2, 3, 4, 5, 6, 7, 8, 9];





        }
    );
