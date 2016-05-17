var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('teamCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/team.html";




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





        })
    .controller('eventsCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval, $location) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/events.html";

            $scope.events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

            $scope.gotohome = function () {
                console.log("function called");
                $location.path("/home");
            };
        })
    .controller('videosCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/videos.html";
        })

.controller('newslettersCtrl',
    function ($scope, TemplateService, NavigationService, $http, $interval, $location) {

        /* BASIC PAGE CONFIGURATIONS */
        $scope.template = TemplateService;
        $scope.template.content = "views/newsletters.html";

        $scope.newsletters = [{
                id: 1,
                month: "June",
                year: "2016",
                image: "newsletters/cover1.png"
}, {
                id: 1,
                month: "May",
                year: "2016",
                image: "newsletters/cover1.png"
}, {
                id: 1,
                month: "April",
                year: "2016",
                image: "newsletters/cover1.png"
}, {
                id: 1,
                month: "March",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "February",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "January",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "July",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "August",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "September",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "October",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "November",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "December",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "March",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "March",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "May",
                year: "2016",
                image: "newsletters/cover1.png"
},
            {
                id: 1,
                month: "August",
                year: "2016",
                image: "newsletters/cover1.png"
}];

        $scope.gotohome = function () {
            console.log("function called");
            $location.path("/home");
        };
    })

.controller('photosCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval, $location) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/photos.html";
            $scope.galimages = [];

            var getallphotossuccess = function (data, status) {
                console.log(data);
                $scope.galimages = data;
                console.log($scope.galimages);
            };
            var getallphotoserror = function (data, status) {
                console.log(data);
            };
            NavigationService.getallphotos().success(getallphotossuccess).error(getallphotoserror);

            // http://localhost/venture/vsBackend/uploads/{{}}



            $scope.modalimage = "";
            var currindex = 0;

            $scope.showmodal = function (index) {
                currindex = index;
                $scope.modalimage = $scope.galimages[currindex].image;
            };

            $scope.nextmodalimage = function () {
                currindex += 1;
                console.log(currindex);
                if (currindex < $scope.galimages.length) {
                    console.log(currindex);
                    $scope.modalimage = $scope.galimages[currindex].image;
                } else {
                    currindex = 0;
                    $scope.modalimage = $scope.galimages[currindex].image;
                }
            };
            $scope.previousmodalimage = function () {
                currindex -= 1;
                console.log(currindex);
                if (currindex >= 0) {
                    console.log(currindex);
                    $scope.modalimage = $scope.galimages[currindex].image;
                } else {
                    currindex = $scope.galimages.length - 1;
                    $scope.modalimage = $scope.galimages[currindex].image;
                }
            };

            $scope.gotohome = function () {
                console.log("function called");
                $location.path("/home");

            };
        })
    //.controller('.controller('newslettersCtrl',
    //        function ($scope, TemplateService, NavigationService, $http, $interval) {
    //
    //            /* BASIC PAGE CONFIGURATIONS */
    //            $scope.template = TemplateService;
    //            $scope.template.content = "views/newsletters.html";
    //        function ($scope, TemplateService, NavigationService, $http, $interval) {
    //
    //            /* BASIC PAGE CONFIGURATIONS */
    //            $scope.template = TemplateService;
    //            $scope.template.content = "views/newsletters.html";
    //        })
    .controller('homeCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval, $location) {
            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/content.html";
            /*===========================================*/


            $scope.form = {
                toptext: "Sign in OR",
                topbtn: "Sign Up",
                mainbtn: "Sign In",
                type: 1
            };

            $scope.changetype = function () {
                if ($scope.form.type == 1) {
                    //MAKE SIGN UP
                    $scope.form = {
                        toptext: "Sign up OR",
                        topbtn: "Sign In",
                        mainbtn: "Register",
                        type: 0
                    };
                } else {
                    //MAKE SIGN IN
                    $scope.form = {
                        toptext: "Sign in OR",
                        topbtn: "Sign Up",
                        mainbtn: "Sign In",
                        type: 1
                    };
                };
            };


            $scope.user = {
                id: "",
                email: "",
                password: "",
                contact: ""

            };
            $scope.errormsg = "";

            var getalluserssuccess = function (data, status) {
                console.log(data);
                if (data != false) {
                    $scope.user = data;
                    console.log($scope.user);
                    $scope.closelogindiv();
                } else {
                    $scope.errormsg = "Wrong email or password";
                };
            };
            var getalluserserror = function (data, status) {
                console.log(data);
            };


            var registerusersuccess = function (data, status) {
                console.log(data);
                if(data != "false")
                {
                    $scope.closelogindiv();
                }else {
                    $scope.errormsg = "Unable to Register. Try Again";
                };
            };
            var registerusererror = function (data, status) {
                console.log(data);
            };
            var checkemailsuccess = function (data, status) {
                console.log(data);
                if (data == "null") {
                    NavigationService.registeruser($scope.user).success(registerusersuccess).error(registerusererror);
                }else {
                    $scope.errormsg = "This email is already a member.";
                };

            };
            var checkemailerror = function (data, status) {
                console.log(data);
            };

            $scope.closelogindiv = function () {
                $scope.logindiv = false;
            };

            $scope.signin = function () {
                $scope.errormsg = "";
                console.log($scope.user);
                if ($scope.form.type == 1) {
                    //LOGIN THE USER
                    console.log($scope.user);
                    NavigationService.signin($scope.user.email, $scope.user.password).success(getalluserssuccess).error(getalluserserror);
                } else {
                    //REGISTER THE USER
                    NavigationService.checkemail($scope.user.email).success(checkemailsuccess).error(checkemailerror);
                };
            };

            $scope.logindiv = true;


            console.log($scope.template.content);

            var bigpeople = [
                {
                    name: "Ajay Piramal - Piramal Group",
                    content: "Inheriting a defunct textile company, he built a Rs 4000 crore empire. His rise began at 33 yrs of age and in acquiring Nicholas labs, much against the market sentiment at that time.",
                    photo: "aboutP1.png"
            },
                {
                    name: "Amar Bose - Bose Corporation",
                    content: "A mathematical genius from MIT. With a small capital from investors, is now the head of an international corporation employing over 12000.",
                    photo: "amar_bose.png"
            },
                {
                    name: "Anil Agrawal – Vedanta Group",
                    content: "A school drop out at the age of 15 and hailing from Patna, he is the founder Chairman of the $ 10 billion Vedanta Resources.  He says, that the “ first thrill in his life is the bicycle”, gifted by  his father. He used it to travel 10 kms to attend the municipal school.",
                    photo: "anil_agrawal.png"
            },
                {
                    name: "Dhirubhai Ambani – Reliance Group",
                    content: "The father of the equity cult in India. His was a rags to riches story. His father was a school teacher and he sold “bajiyas” to pilgrims on Mount Girnar. Later, he built the company to be the first Indian to feature in Forbes list of 500 richest in the world.",
                    photo: "dhirubhai_ambani.png"
            },
                {
                    name: "Ekta Kapoor – Balaji Telfilms",
                    content: "From the age of 21, she single handedly built the television soap industry in India.",
                    photo: "ekta_kapoor.png"
            },
                {
                    name: "Gautam Adani – Adani Group",
                    content: "Born in Ahmedabad. Travelled to Mumbai at the age of 18 with Rs 400 in search of a job. Today, his personal wealth is estimated to be $ 20 Billion.",
                    photo: "gautam_adani.png"
            },
                {
                    name: "Ghanshyamdas Birla – Birla Group",
                    content: "A staunch nationalist. Disciple of Mahatma Gandhi.  A visionary of modern India.",
                    photo: "birla.png"
            },
                {
                    name: "Kalam Anji Reddy – Dr Reddy Labs",
                    content: "Studied in a local high school in Guntur,AP. He built the 1st indian company for research in drug discovery.",
                    photo: "anji_reddy.png"
            },
                {
                    name: "Kouchu Joseph Chitilapally – V Guard",
                    content: "Started with 2 workers and built the Rs 200 crore consumer electronics company.",
                    photo: "kochu_joseph.png"
            },
                {
                    name: "Mohan Singh Oberoi – Oberoi  Hotels",
                    content: "In 1922, he drew a salary of Rs 50 per month later to be called the father of indian hotel industry.",
                    photo: "mohan_oberoi.png"
            },
                {
                    name: "NR Narayana Murthy – Infosys",
                    content: "The NewGen entrepreneur. A visionary to combine ethics with business growth.",
                    photo: "narayan_murthy.png"
            },
                {
                    name: "Naresh Goyal – Jet Airways",
                    content: "Began as a low salaried employee. He even slept on the office floor in his initial days of career. Now, he figures in the list of Forbe’s Billionaires.",
                    photo: "naresh_goyal.png"
            },
                {
                    name: "Pratap C Reddy – Apollo Hospitals",
                    content: "A cardiologist turned an entrepreneur. Provided a new dimension to healthcare and health care industry  in modern India.",
                    photo: "pratap_reddy.png"
            },
                {
                    name: "G. Mallikarjuna Rao – Gmr Group",
                    content: "Leading infrastructure company, hails from modest background  from Andhra Pradesh",
                    photo: "g_mallikarjuna.png"
            },
                {
                    name: "Ramoji Rao - Eenadu Group",
                    content: "He is an Indian businessman, film producer, educationist, journalist , media entrepreneur, Film maker, media entrepreneur",
                    photo: "ramoji_rao.png"
            },
                {
                    name: "Raunaq Singh – Apollo Tyres",
                    content: "One of the first entrepreneurs of independent India",
                    photo: "raunaq_singh.png"
            },
                {
                    name: "Sabeer Bhatia  - Hotmail",
                    content: "Started his business with an apprehension of failure. With ordinary intelligence and $ 300,he went to over 19 venture capitalists to be only rejected. With Steve Jurvetson, ( 15% stake holder), Bhatia &Smith ( his partner) left their jobs to create history.",
                    photo: "sabeer_bhatia.png"
            },
                {
                    name: "Shashi Ruia – Essar Group",
                    content: "He says, “ Not an MBA but am only an MBB ( Marwari by birth)”. The spirit of the community, he claims to be the driving force to build the formidable group.",
                    photo: "shashi_ruia.png"
            },
                {
                    name: "Shahnaz Hussain – Shahnaz Herbals",
                    content: "This is a story of a young married woman at the age of 16 from a conservative family. With a mere Rs 35,000, built a large corporation with global reach.",
                    photo: "shahnaz.png"
            },
                {
                    name: "Shiv Nadar – HCL Group",
                    content: "One of the 1st to predict the future opportunities in IT in India. A pioneer.",
                    photo: "shiv_nadar.png"
            },
                {
                    name: "Subhash Chandra Goel – Zee Group",
                    content: "Founder of ZEE TV. From being a rice trader from Hissar in Haryana, he became a media moghul. This is a reflection of his vision and versatility.",
                    photo: "subhash_chandra.png"
            },
                {
                    name: "Subroto Roy – Sahara Group",
                    content: "From an asset base of Rs 25000 , in 1978, to be over Rs 2,15,000 crores iin 2014 with employing over 7,00,000 in his group is a reflection of his entrepreneurship.",
                    photo: "subroto_roy.png"
            },
                {
                    name: "Swaraj Paul – Caparo Group",
                    content: "From a modest background, he went to England for treatment to his daughter. On her unfortunate demise, the twist of fate turned him into a  leading industrialist.",
                    photo: "swaraj_paul.png"
            },
                {
                    name: "JRD Tata – Tata Group",
                    content: "A man of many talents. An extraordinary visionary. His humility and leadership are exemplary.",
                    photo: "jrd_tata.png"
            },
                {
                    name: "Varghese Kurien – Amul",
                    content: "A social entrepreneur. The Milkman of India. From a small milk powder factory in Anand to build it into a national pride – deserves a place for him in Modern india.",
                    photo: "varghese_kurien.png"
            },
                {
                    name: "Arianna Huffington – Huffington Post",
                    content: "Now the most famous name in online publishing had her maiden works rejected by 36 publishers. ",
                    photo: "ariana_huffington.png"
            },
                {
                    name: "Walt Disney – Walt Disney Productions",
                    content: "He was first rejected as he was told that he was not creative. He proved to be the 20th Century genius in creativity. Even his 1st animation film Laugh O Gram was a disaster.",
                    photo: "walt_disney.png"
            },
                {
                    name: "Steve Jobs – Apple Corporation",
                    content: "He was booted out of his own company, only to rebound and push Apple to be an empire and all in his 30 years of life.",
                    photo: "steve_jobs.png"
            },
                {
                    name: "Milton Hershey – Hershey’s",
                    content: "His initial 3 candy companies were a failure.  Hershey’s was his last attempt.  He learnt from his mistakes. He is now a world leader in chocolates.",
                    photo: "aboutP1.png"
            },
                {
                    name: "Henry Ford – Ford Motors",
                    content: "Ford founded two automotive companies that failed before he was able to gain success with the Ford Motor Company.",
                    photo: "henry_ford.png"
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

            /*PAGE CHANGE FUNCTIONS*/
            $scope.gototeam = function () {
                console.log("funstion called");
                $location.path("/team");
            };
            $scope.gotonewsletters = function () {
                console.log("funstion called");
                $location.path("/newsletters");
            };
            $scope.gotophotos = function () {
                console.log("funstion called");
                $location.path("/photos");
            };
            $scope.gotoevents = function () {
                console.log("funstion called");
                $location.path("/events");
            };
            $scope.gotovideos = function () {
                console.log("function called");
                $location.path("/videos");

            };


            $scope.newsletters = [{
                id: 1,
                month: "June",
                year: "2016",
                image: "newsletters/cover1.png"
}, {
                id: 1,
                month: "May",
                year: "2016",
                image: "newsletters/cover1.png"
}, {
                id: 1,
                month: "April",
                year: "2016",
                image: "newsletters/cover1.png"
}, {
                id: 1,
                month: "March",
                year: "2016",
                image: "newsletters/cover1.png"
}];
            $scope.events = [1, 2];
            //            $scope.galimages = [1, 2, 3, 4, 5, 6];




            $scope.galimages = [{
                    id: 1,
                    "image": "newsletters/cover1.png",
                    "title": "Image Title"
    },
                {
                    id: 2,
                    "image": "newsletters/cover1.png",
                    "title": "Image Title"
    }, {
                    id: 3,
                    "image": "newsletters/cover1.png",
                    "title": "Image Title"
    },
                {
                    id: 4,
                    "image": "newsletters/cover1.png",
                    "title": "Image Title"
    }, {
                    id: 5,
                    "image": "newsletters/cover1.png",
                    "title": "Image Title"
    },
                {
                    id: 6,
                    "image": "newsletters/cover1.png",
                    "title": "Image Title"
    }];

            $scope.modalimage = "";
            var currindex = 0;

            $scope.showmodal = function (index) {
                currindex = index;
                $scope.modalimage = $scope.galimages[currindex].image;
            };

            $scope.nextmodalimage = function () {
                currindex += 1;
                console.log(currindex);
                if (currindex < $scope.galimages.length) {
                    console.log(currindex);
                    $scope.modalimage = $scope.galimages[currindex].image;
                } else {
                    currindex = 0;
                    $scope.modalimage = $scope.galimages[currindex].image;
                }
            };
            $scope.previousmodalimage = function () {
                currindex -= 1;
                console.log(currindex);
                if (currindex >= 0) {
                    console.log(currindex);
                    $scope.modalimage = $scope.galimages[currindex].image;
                } else {
                    currindex = $scope.galimages.length - 1;
                    $scope.modalimage = $scope.galimages[currindex].image;
                }
            };




            $scope.videos = [1, 2, 3];

        }
    );