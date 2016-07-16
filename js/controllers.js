var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

var signuppage = true;
var userdata = {};

var teamlist = [
    {
        name: "Dr.Ramkumar Rudrabhatla",
        designation: "Chief Promoter",
        desc: "Mr. Ramkumar holds an MBA in HRD, LLM in Business Laws, and qualified for Ph.D. in Microeconomics from BITS. He is a polyglot, who lived in India, US, Singapore, and the Middle East. He is based out of Mumbai.",
        facebook: "9",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "ramkumar.png"
        },
    {
        name: "Dr.Sudarshan Sundaram",
        designation: "",
        desc: "Dr Sudarshan is an eminent scholar, Business Leader and has held prominent positions of Vice President and HR HR in corporates.He is alos the visiting faculty member in Kuvempu University and Symbiosis, Bangalore.He has a Master’s Degree in Philosophy and has published articles in The Hindu.He has toured several palces around the world spreading knowledge across universities and educational instituitions.",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: ""
        },
    {
        name: "Raju L Kanchibhotla",
        designation: "",
        desc: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "raju.png"
        },
    {
        name: "Mr.Yogesh Bala",
        designation: "Chief Promoter",
        desc: "Mr. Yogesh Bala, our co- promoter, is a professional architect. He is a successful entrepreneur with 23 years of track record. He lives in Hyderabad. He has worked on major landscaping projects in and around India including Hyderabad, Mumbai, Bangalore, Nagpur, Chattisgarh and Andhra Pradesh.",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "yogesh.png"
        },
    {
        name: "Anita Sukaru",
        designation: "",
        desc: "Ms. Anita Sakuru, our co- promoter, is a technology graduate from BITS and Kellogg’s School of Management. She promoted successful IT companies in India and the US. She is based in Bangalore.",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "anita.png"
        },

    {
        name: "Ms.Kalyani Simham",
        designation: "",
        desc: "Kalyani Simham is a CELTA certified Master facilitator with a Bachelor’s degree in Psychology and a Master’s degree in English Literature. She has HR experience with corporates like HSBC, Deloitte Consulting and Acclaris. She won the Business Leader Award for three consecutive years in the corporate and has 8 ‘Top  Performer’ awards to her credit. She is a certified  NLP practitioner  from Fifth Element , Pune and a certified Life Coach from Symbiosis, Massachusetts.",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "kalyani.png"
        },
    {
        name: "Surya Prabha Vallae",
        designation: "",
        desc: "Surya has 18+ years of experience in determining the content strategy and its execution through user interface content, technical documentation, and marketing & digital marketing collateral.She has managed teams across India, US, Europe, and East Asia. She is a polyglot and holds a master’s degree in English and a bachelor’s degree in teaching.",
        facebook: "",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/prabha2",
        google: "",
        photo: "surya.png"
        },
    {
        name: "Kiran Kumar Shabbani",
        designation: "",
        desc: "Our co-promoter, Mr. Sabbani Kiran Kumar has established himself as a pioneer of various activities that create job opportunities for differently abled people. An MCA by qualification, he is also a certified ISO Auditor and Six Sigma Green Belt holder. He founded an NGO, Power of Confidence Society, which is an excellent platform for those who are willing to use technology and internet to become self-dependant with minimal or no investment.",
        facebook: "https://www.facebook.com/kirankumarsubban/",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "kiran.png"
        },
    {
        name: "Vijay Santosh Sirigiri",
        designation: "",
        desc: "A certified inbound marketer, Digital marketing analyst, Post Graduated in computer science engineering, want to see fellow entrepreneurs grow and generate employment.",
        facebook: "www.facebook.com/vijay.vijjvin",
        twitter: "https://twitter.com/vijaysirigiri1",
        linkedin: "",
        google: "",
        photo: "vijay.png"
        },
    {
        name: "Santosh Ajmeera",
        designation: "",
        desc: "Digital marketing analyst, want to see fellow entrepreneurs grow and generate employment.",
        facebook: "https://www.facebook.com/asantoshnayak",
        twitter: "https://twitter.com/santoshajmeera",
        linkedin: "www.linkedin.com/in/santoshajmeera",
        google: "https://plus.google.com/u/0/112324115701465391112",
        photo: "santosh.png"
        },
    {
        name: "Avinash Singh",
        designation: "",
        desc: "A techie having a great Quest of success, passionate about entrepreneurship , driven by faith,perseverance and believe in self to make every odd into even.",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "avinash.png"
        },
    {
        name: "S.Rohit Phanendra Sai",
        designation: "",
        desc: "Living life intensively on daily basis and nothing else matters.",
        facebook: "https://www.facebook.com/Risskyee",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "rohith.png"
        },
    {
        name: "P. Suresh Babu",
        designation: "",
        desc: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "suresh.png"
        },
    {
        name: "Manohar K.",
        designation: "",
        desc: "A Tax & Finance professional who guides the entrepreneurs in Taxation, Audit, Finance & Accounts and regulatory compliances.",
        facebook: "https://www.facebook.com/manohar.kunapareddy",
        twitter: "https://twitter.com/djvenu",
        linkedin: "https://www.linkedin.com/in/manohar-kunapareddy-42a69754",
        google: "https://plus.google.com/100807626943366744717",
        photo: "manohar.png"
        },
    {
        name: "Bharat Pasam",
        designation: "",
        desc: "A Person who says #Passion is all about being an Entrepreneur not the profession you choose.",
        facebook: "https://www.facebook.com/bharathpasam",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "bharat.png"
        },
    {
        name: "V.Sri Sai Akhil",
        designation: "",
        desc: "19 year old entrepreneur. Says 'age is just a number.'",
        facebook: "https://www.facebook.com/verygood.akhil",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/sri-sai-akhil-velagaleti-b21829106",
        google: "",
        photo: "akhil.png"
        },



    {
        name: "Madishetty Venu Kumar",
        designation: "",
        desc: "A Start-up enthusiast and Trying out new things!!",
        facebook: "www.facebook.com/djvenu",
        twitter: "https://twitter.com/djvenu",
        linkedin: "",
        google: "",
        photo: "venu_kumar.png"
        },
    {
        name: "Mailwar Suchindra Timmaji",
        designation: "",
        desc: "Talkative by habit, anchor by passion and a to-be all rounder",
        facebook: "https://www.facebook.com/suchindra.mailwar",
        twitter: "https://twitter.com/suchimailwar",
        linkedin: "https://www.linkedin.com/in/suchindra-mailwar-76015043",
        google: "",
        photo: "suchindra.png"
        },

    {
        name: "Meghana Santoshi Kondapally",
        designation: "",
        desc: "Outgoing and lively person, loves to talk  and yearns to explore and learn.",
        facebook: "https://www.facebook.com/meghu.santoshi",
        twitter: "",
        linkedin: "",
        google: "",
        photo: "meghana.png"
        },

    {
        name: "Madishetty Mounika",
        designation: "",
        desc: "Techie by chance. Women Entrepreneur by passion. Looking to change the world through creative arts and thoughts.",
        facebook: "https://www.facebook.com/vjmounikaa ",
        twitter: "https://twitter.com/iammounikamouni",
        linkedin: "https://in.linkedin.com/in/iammounika",
        google: "",
        photo: "mounika.png"
        }


    ];

phonecatControllers.controller('teamCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval, $location) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/team.html";

            $scope.team = teamlist;

            //CHECK FOR MOBILE
            $scope.mobile = false;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $scope.mobile = true;
            };



            $scope.gotohome = function () {
                console.log("function called");
                $location.path("/home");
            };


        })
    .controller('eventsCtrl',
        function ($scope, TemplateService, NavigationService, $http, $interval, $location) {

            /* BASIC PAGE CONFIGURATIONS */
            $scope.template = TemplateService;
            $scope.template.content = "views/events.html";

            $scope.events = [];
            $scope.tags = [];
            $scope.tagarray = [];
            $scope.btndisable = false;


            var get8eventssuccess = function (data, status) {
                console.log(data);
                $scope.events = data;
                for (var e = 0; e < $scope.events.length; e++) {
                    $scope.events[e].timestamp = new Date($scope.events[e].timestamp).toISOString();
                };
                console.log($scope.events);
            };
            var get8eventserror = function (data, status) {
                console.log(data);
            };
            NavigationService.get8events().success(get8eventssuccess).error(get8eventserror);

            var getalltagssuccess = function (data, status) {
                $scope.tags = data;
            };
            var getalltagserror = function (data, status) {
                console.log(data);
            };
            NavigationService.getalltags().success(getalltagssuccess).error(getalltagserror);


            var tagfiltersuccess = function (data, status) {
                $scope.events = data;
                console.log(data);
                for (var e = 0; e < $scope.events.length; e++) {
                    $scope.events[e].timestamp = new Date($scope.events[e].timestamp).toISOString();
                };
            };
            var tagfiltererror = function (data, status) {
                console.log(data);
            };
            $scope.altertagarray = function (id) {
                $scope.btndisable = false;
                if ($scope.tagarray.indexOf(id) == -1) {
                    $scope.tagarray.push(id);
                } else {
                    $scope.tagarray.splice($scope.tagarray.indexOf(id), 1);
                };
                console.log($scope.tagarray);
                NavigationService.tagfilter(JSON.stringify($scope.tagarray)).success(tagfiltersuccess).error(tagfiltererror);

            };
            $scope.anytag = function () {
                $scope.tagarray = [];
                NavigationService.tagfilter(JSON.stringify($scope.tagarray)).success(tagfiltersuccess).error(tagfiltererror);
            };

            var next4eventssuccess = function (data, status) {
                if (data.length < 4) {
                    $scope.btndisable = true;
                };
                if (data.length > 0) {
                    for (var w = 0; w < data.length; w++) {

                        data[w].timestamp = new Date(data[w].timestamp).toISOString();
                        $scope.events.push(data[w]);
                    };
                };
            };
            var next4eventserror = function (data, status) {
                console.log(data);
            };

            $scope.next4events = function () {
                NavigationService.next4events($scope.events.length, JSON.stringify($scope.tagarray)).success(next4eventssuccess).error(next4eventserror);
            };

            $scope.gotohome = function () {
                console.log("function called");
                $location.path("/home");
            };
        })

.controller('videosCtrl',
    function ($scope, TemplateService, NavigationService, $http, $interval, $location, $sce) {

        /* BASIC PAGE CONFIGURATIONS */
        $scope.template = TemplateService;
        $scope.template.content = "views/videos.html";

        $scope.videos = [];
        $scope.btndisable = false;
        var get6videossuccess = function (data, status) {
            $scope.videos = data;
            for (var r = 0; r < data.length; r++) {
                $scope.videos[r].video = $sce.trustAsHtml($scope.videos[r].video);
            };
            console.log($scope.videos);
        };
        var get6videoserror = function (data, status) {
            console.log(data);
        };
        NavigationService.get6videos().success(get6videossuccess).error(get6videoserror);

        $scope.loadmorevideos = function () {

            var getnext3videossuccess = function (data, status) {
                console.log(data.length);

                if (data.length < 3) {
                    $scope.btndisable = true;

                };
                for (var i = 0; i < data.length; i++) {
                    $scope.videos.push(data[i]);
                    $scope.videos[$scope.videos.length - 1].video = $sce.trustAsHtml($scope.videos[$scope.videos.length - 1].video);
                    console.log($scope.videos);
                };
            };
            var getnext3videoserror = function (data, status) {
                console.log(data);
            };
            NavigationService.getnext3videos($scope.videos.length).success(getnext3videossuccess).error(getnext3videoserror);

        };

        $scope.gotohome = function () {
            console.log("function called");
            $location.path("/home");
        };

    })

.controller('newslettersCtrl',
    function ($scope, TemplateService, NavigationService, $http, $interval, $location) {

        /* BASIC PAGE CONFIGURATIONS */
        $scope.template = TemplateService;
        $scope.template.content = "views/newsletters.html";

        $scope.newsletters = [];
        $scope.btndisable = false;
        var get8newslettersuccess = function (data, status) {
            console.log(data);
            $scope.newsletters = data;
            console.log($scope.newsletters);
        };
        var get8newslettererror = function (data, status) {
            console.log(data);
        };
        NavigationService.get8newsletter().success(get8newslettersuccess).error(get8newslettererror);


        $scope.loadmorenewsletters = function () {
            var getnext4newslettersuccess = function (data, status) {
                console.log(data.length);

                if (data.length < 4) {
                    $scope.btndisable = true;

                };
                for (var i = 0; i < data.length; i++) {
                    $scope.newsletters.push(data[i]);
                    console.log($scope.newsletters);

                };
            };
            var getnext4newslettererror = function (data, status) {
                console.log(data);
            };
            NavigationService.getnext4newsletter($scope.newsletters.length).success(getnext4newslettersuccess).error(getnext4newslettererror);

        };


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
        $scope.btndisable = false;

        var getload16photossuccess = function (data, status) {
            console.log(data);
            $scope.galimages = data;
            console.log($scope.galimages);
        };
        var getload16photoserror = function (data, status) {
            console.log(data);
        };
        NavigationService.getload16photos().success(getload16photossuccess).error(getload16photoserror);

        $scope.loadmoreimages = function () {
            var getnext8photossuccess = function (data, status) {
                console.log(data);
                if (data.length < 8) {
                    $scope.btndisable = true;

                };
                for (var i = 0; i < data.length; i++) {
                    $scope.galimages.push(data[i]);
                    console.log($scope.galimages);

                };
            };
            var getnext8photoserror = function (data, status) {
                console.log(data);
            };
            NavigationService.getnext8photos($scope.galimages.length).success(getnext8photossuccess).error(getnext8photoserror);

        };


        // http://localhost/venture/vsBackend/uploads/{{}}



        $scope.modalimage = "";
        $scope.modaltitle = "";
        var currindex = 0;

        $scope.showmodal = function (index) {
            currindex = index;
            $scope.modalimage = $scope.galimages[currindex].image;
            $scope.modaltitle = $scope.galimages[currindex].title;
        };

        $scope.nextmodalimage = function () {
            currindex += 1;
            console.log(currindex);
            if (currindex < $scope.galimages.length) {
                console.log(currindex);
                $scope.modalimage = $scope.galimages[currindex].image;
                $scope.modaltitle = $scope.galimages[currindex].title;
            } else {
                currindex = 0;
                $scope.modalimage = $scope.galimages[currindex].image;
                $scope.modaltitle = $scope.galimages[currindex].title;
            }
        };
        $scope.previousmodalimage = function () {
            currindex -= 1;
            console.log(currindex);
            if (currindex >= 0) {
                console.log(currindex);
                $scope.modalimage = $scope.galimages[currindex].image;
                $scope.modaltitle = $scope.galimages[currindex].title;
            } else {
                currindex = $scope.galimages.length - 1;
                $scope.modalimage = $scope.galimages[currindex].image;
                $scope.modaltitle = $scope.galimages[currindex].title;
            }
        };



        $scope.gotohome = function () {
            console.log("function called");
            $location.path("/home");

        };
    })

.controller('homeCtrl',
    function ($scope, TemplateService, NavigationService, $http, $interval, $location, $sce) {
        /* BASIC PAGE CONFIGURATIONS */
        $scope.template = TemplateService;
        $scope.template.content = "views/content.html";
        /*===========================================*/

        //DISABLE LOGIN/SIGNUP FOR NOW
        signuppage = false;

        $scope.mobile = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $scope.mobile = true;
        };

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
            'id': "",
            'email': "",
            'password': "",
            'contact': "",
            'subscription': 0

        };
        $scope.errormsg = "";

        var getalluserssuccess = function (data, status) {
            console.log(data);
            if (data != false) {
                userdata = data;
                $scope.user = userdata;
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
            if (data != "false") {

                $scope.closelogindiv();
                userdata = data;
            } else {
                $scope.errormsg = "Unable to Register. Try Again";
            };
        };
        var registerusererror = function (data, status) {
            console.log(data);
        };
        var checkemailsuccess = function (data, status) {
            console.log(data);
            if (data == "null") {
                if ($scope.user.subscription == true) {
                    $scope.user.subscription = 1;
                } else {
                    $scope.user.subscription = 0;
                };
                NavigationService.registeruser($scope.user).success(registerusersuccess).error(registerusererror);
            } else {
                $scope.errormsg = "This email is already a member.";
            };

        };
        var checkemailerror = function (data, status) {
            console.log(data);
        };

        $scope.closelogindiv = function () {
            $scope.logindiv = false;
            signuppage = false;

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

        $scope.logindiv = signuppage;



        /* CONTACT FORM */
        $scope.formfields = {
            "name": "",
            "email": "",
            "subject": "",
            "message": "",
        };
        $scope.clearform = function () {
            $scope.formfields = {
                "name": "",
                "email": "",
                "subject": "",
                "message": "",
            };
        };
        var sendcontactformsuccess = function (data, status) {
            console.log(data);
            if (data == "true") {
                $scope.formfields = {
                    "name": "",
                    "email": "",
                    "subject": "",
                    "message": "",
                };
                $('#note').html('Thank you! Your message has been sent');
            } else {
                $('#note').html('Oops! There seems to be some problem, please try again');
            };
        };

        var sendcontactformerror = function (data, status) {
            console.log(data);
        };
        $scope.sendform = function () {
            NavigationService.sendcontactform($scope.formfields.name, $scope.formfields.email, $scope.formfields.subject, $scope.formfields.message).success(sendcontactformsuccess).error(sendcontactformerror);
        };

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

        $scope.dotstatus = [true, false, false, false, false];

        $scope.dotclicked = function (i, firstval) {
            for (var q = 0; q < $scope.dotstatus.length; q++) {
                $scope.dotstatus[q] = false;
            };
            $scope.dotstatus[i] = true;
            $scope.nextteamnumber(firstval);
        };

        $scope.teamarray = [0, 1, 2, 3];

        $scope.nextteamnumber = function (firstvar) {

            console.log("changing team");
            if (firstvar == null) {
                firstvar = $scope.teamarray[0];
            };

            $('.teammemberdivinner').each(function (idx, box) {
                //SELCT THE BOX
                var $box = $(box);
                setTimeout(function () {
                    if (firstvar < 16) {
                        console.log(firstvar);
                        if (idx == 0) {
                            $scope.teamarray[idx] = firstvar + 4;
                        } else {
                            $scope.teamarray[idx] = $scope.teamarray[idx - 1] + 1;
                        };

                        $scope.$apply();
                    } else {
                        $scope.teamarray[idx] = idx;
                        $scope.$apply();
                        //$box.fadeIn("slow");
                    };


                }, 500 * idx);
            });
        };

        //$interval($scope.nextteamnumber, 5000);

        $scope.team = teamlist;
        $scope.divident = 4;
        if ($scope.mobile) {
            $scope.divident = 1
        };
        var noofslides = $scope.team.length / $scope.divident;
        $scope.sliderarray = [];
        for (var z = 0; z < noofslides; z++) {
            $scope.sliderarray.push(z * $scope.divident);
        };




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

        /*GET NEWSLETTERS*/
        $scope.newsletters = [];
        var get4newslettersuccess = function (data, status) {
            console.log(data);
            $scope.newsletters = data;
            console.log($scope.newsletters);
        };
        var get4newslettererror = function (data, status) {
            console.log(data);
        };
        NavigationService.get4newsletter().success(get4newslettersuccess).error(get4newslettererror);

        //FOR EVENTS
        $scope.events = [];


        var get4eventssuccess = function (data, status) {
            console.log(data);
            $scope.events = data;
        };
        var get4eventserror = function (data, status) {
            console.log(data);
        };
        NavigationService.get4events().success(get4eventssuccess).error(get4eventserror);

        //FOR PHOTOS
        var getallphotossuccess = function (data, status) {
            console.log(data);
            $scope.galimages = data;
        };
        var getallphotoserror = function (data, status) {
            console.log(data);
        };
        NavigationService.getallphotos().success(getallphotossuccess).error(getallphotoserror);

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


        /*GET VIDEOS*/
        $scope.videos = [];
        var get3videossuccess = function (data, status) {
            $scope.videos = data;
            for (var r = 0; r < data.length; r++) {
                $scope.videos[r].video = $sce.trustAsHtml($scope.videos[r].video);
            };
            console.log($scope.videos);
        };
        var get3videoserror = function (data, status) {
            console.log(data);
        };
        NavigationService.get3videos().success(get3videossuccess).error(get3videoserror);

        $scope.subscribes = {};
        $scope.subscribesuccesstext = 3;
        $scope.subscribes.email = "";
        $scope.subscribe = function () {

            var getsubscriberssuccess = function (data, status) {
                if (data == "true") {
                    $scope.subscribesuccesstext = true;
                } else {
                    $scope.subscribesuccesstext = false;
                };
            };
            var getsubscriberserror = function (data, status) {
                console.log(data);
            };
            console.log($scope.subscribes.email);
            NavigationService.getsubscribers($scope.subscribes.email).success(getsubscriberssuccess).error(getsubscriberserror);
        };


    }
);
