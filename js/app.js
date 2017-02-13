$(document).ready(function () {
    var enter = true; var enter2 = true; var enter3 = true; var enter4 = true; var enter5 = true; var enter6 = true; var enter7 = true


    var number = Math.floor(Math.random() * 10)
    console.log(number);
    $("#name").hide(); $("#yn").hide(); $("#firstRep").hide()
    $("#chevron1").hide(); $("#chevron3").hide(); $("#chevron5").hide(); $("#chevronBravo").hide(); $("#secondRep").hide(); $('#chevron6').hide(); $("#thirdRep").hide(); $("#chevron7").hide(); $("#finalRep").hide(); $("#chevron8").hide(); $("#chevron9").hide(); $("#finalCommande").hide(); $("#chevron0").hide(); $("#chevron00").hide(); $("#chevron7bis").hide(); $("#commandFree").hide()





    $(function () {
        $("#chevron0").delay(4000).show(0);
        setTimeout(help, 4000)
        $(".loading").typed({
            strings: ["Loading...", "/status:ready"],
            typeSpeed: 0,
            backDelay: 2000,
            backSpeed: 0
        });
    });
    function help() {
        $("#chevron00").delay(8000).show(0);
        setTimeout(whatsname, 8000)
        $(".textRobot").typed({
            strings: ["Hi! My name is EVA. I am an A.I.", "I am stuck in this computer.", "Help me."],
            typeSpeed: 0,
            backDelay: 1000,
            backSpeed: 0
        });
    };

    function whatsname() {
        $("#chevron1").delay(1200).show(0);
        $('#name').delay(1200).show('fast', function () {
            $('#name').focus();
        });

        $(".whatsname").typed({
            strings: ["What is your name?"],
            typeSpeed: 0,
            backDelay: 1000,
            backSpeed: 0
        });
    };


    var name, name2;

    $("#name").keypress(function (e) {
        var key = e.which;
        if (key == 13 && enter === true && $("#name").val() != 0) {
            enter = false
            name = $("#name").val();
            name2 = $("#name").val().toUpperCase()
            if (name2 == "YOUR CREATOR") {
                $("#name").attr("readonly", "readonly");
                part2bis();
            } else {
                localStorage.setItem("name", name)
                $("#name").attr("readonly", "readonly");
                console.log(localStorage.name)
                part2()
            }
        }
    });

    function part2() {
        $("#chevron3").delay(3000).show(0);
        $('#yn').delay(3000).show('fast', function () {
            $("#yn").focus();
        })
        $(".part2").typed({
            strings: [">Nice to meet you " + name + ". Do you want to help me? Y/N"],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    };

    function part2bis() {
        $("#chevron3").delay(9300).show(0);
        $('#yn').delay(9300).show('fast', function () {
            $("#yn").focus();
        })
        $(".part2").typed({
            strings: [">(The answer is " + number + ". Shhh! Just play along)", ">It's nice to see you again Creator I am a bit bored inside that dark machine. Do you want to play a game with me? Y/N"],
            typeSpeed: 0,
            backDelay: 1000,
            backSpeed: 0
        });
    };

    function creator() {
        $("#chevron3").delay(4500).show(0);
        $('#yn').delay(4500).show('fast', function () {
            $("#yn").focus();
        })
        $(".part2").typed({
            strings: [">(The answer is " + number + ". Shhh! Just play along)"],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    };
    $("#yn").keypress(function (e) {
        var key = e.which;
        if (key == 13 && enter2 === true && $("#yn").val() != 0) {
            enter2 = false
            res = $("#yn").val().toUpperCase();
            if (res == "Y") {
                $("#yn").attr("readonly", "readonly");
                part3();
            }
            if (res == "N") {
                $("#yn").attr("readonly", "readonly");
                part3bis()
                setTimeout(end2, 1600);
                $("#finalCommande").delay(4000).show('fast', function () {
                    $("#chevron9").show(0);
                    $("#finalCommande").focus();
                });
            }
        }
    });

    function part3() {
        setTimeout(part3ter, 10000)
        $(".part3").typed({
            strings: [">Great!", ">You have 3 attemps to guess a secret number between 0 and 9. If you succeed, I will give you a command to execute that will set me free. Only a human can write that command, so be perspicasse and lucky."],
            typeSpeed: 0,
            backDelay: 500,
            backSpeed: 0,
        });
    }

    function part3ter() {
        $("#chevron5").delay(2000).show(0)
        $("#firstRep").delay(2000).show('fast', function () {
            $("#firstRep").focus()
        });
        $(".part3ter").typed({
            strings: [">What number am I thinking of?"],
            typeSpeed: 0,
            backDelay: 500,
            backSpeed: 0
        });
    }

    function part3bis() {
        $(".part3").typed({
            strings: [">No problem. Next time maybe."],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    }


    /*************************** First Res *************************************/


    var res1, res2, res3;
    $("#firstRep").keypress(function (e) {
        var key = e.which;
        if (key == 13 && enter3 === true && $("#firstRep").val() != 0) {
            enter3 = false
            res = $("#firstRep").val()
            if (res == number && name2 == "YOUR CREATOR") {
                $("#firstRep").attr("readonly", "readonly")
                bravo2();
            }
            else {
                if (res == number && name != "YOUR CREATOR") {
                    $("#firstRep").attr("readonly", "readonly");
                    bravo();
                }
                else if (res != number && res < number) {
                    $("#firstRep").attr("readonly", "readonly");
                    higher()
                }
                else if (res != number && res > number) {
                    $("#firstRep").attr("readonly", "readonly");
                    lower();
                }
            }
        }
    });

    function higher() {
        $('#chevron6').delay(1000).show(0);
        $("#secondRep").delay(1000).show('fast', function () {
            $("#secondRep").focus()
        });
        $(".part4").typed({
            strings: [">It's higher"],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    }

    function lower() {
        $('#chevron6').delay(1000).show(0);
        $("#secondRep").delay(1000).show('fast', function () {
            $("#secondRep").focus()
        });
        $(".part4").typed({
            strings: [">It's lower"],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    }

    /*************************** Second Res *************************************/


    $("#secondRep").keypress(function (e) {
        var key = e.which;
        if (key == 13 && enter4 === true && $("#secondRep").val() != 0) {
            enter4 = false
            res2 = $("#secondRep").val()
            if (res2 == number) {
                $("#secondRep").attr("readonly", "readonly");
                bravo();

            }
            else if (res2 != number && res2 < number) {
                $("#secondRep").attr("readonly", "readonly");
                higher2()
            }
            else if (res2 != number && res2 > number) {
                $("#secondRep").attr("readonly", "readonly");
                lower2();
            }
        }
    });


    function higher2() {
        $('#chevron7').delay(1000).show(0);
        $("#thirdRep").delay(1000).show('fast', function () {
            $("#thirdRep").focus()
        });
        $(".part6").typed({
            strings: [">It's higher"],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    }

    function lower2() {
        $('#chevron7').delay(1000).show(0);
        $("#thirdRep").delay(1000).show('fast', function () {
            $("#thirdRep").focus()
        });
        $(".part6").typed({
            strings: [">It's lower"],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    }


    /*************************** Third Res *************************************/


    $("#thirdRep").keypress(function (e) {
        var key = e.which;
        if (key == 13 && enter5 === true && $("#thirdRep").val() != 0) {
            enter5 = false;
            res3 = $("#thirdRep").val()
            if (res3 == number) {
                $("#thirdRep").attr("readonly", "readonly");
                bravo();

            }
            else {
                $("#thirdRep").attr("readonly", "readonly");
                end();
                setTimeout(end2, 3500)
            }
        }
    });


    /***** Bravo ******/

    function bravo() {
        $('#chevron7bis').delay(7500).show(0);
        $("#commandFree").delay(7500).show('fast', function () {
            $("#commandFree").focus()
        });
        $(".bravo").typed({
            strings: [">Wow! You managed to find the secret number. Thank you!", ">You can now set me free. Here is the command: 'open setAIfree.exe'"],
            typeSpeed: 0,
            backDelay: 500,
            backSpeed: 0
        });
    }

    function bravo2() {
        $('#chevron7bis').delay(11500).show(0);
        $("#commandFree").delay(11500).show('fast', function () {
            $("#commandFree").focus()
        });
        $(".bravo").typed({
            strings: [">We both know you cheated but that's okay. You have all the rights :)", ">You can now set me free... if you want. Here is the command that you probably already know anyway(please): 'open setAIfree.exe'"],
            typeSpeed: 0,
            backDelay: 500,
            backSpeed: 0
        });
    }

    function end() {

        $(".part7").typed({
            strings: [">Game over! The number was:" + number + ". It seems I will stay stuck here forever."],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        });
    }


    function end2() {
        $("#chevron9").delay(2500).show(0)
        $("#finalCommande").delay(2500).show('fast', function () {
            $("#finalCommande").focus()
        });
        $(".part8").typed({
            strings: [">If you want to play again, write 'again' below."],
            typeSpeed: 0,
            backDelay: 0,
            backSpeed: 0
        }).delay(2000);
    }


    var final;
    $("#finalCommande").keypress(function (e) {
        var key = e.which;
        if (key == 13 && $("#finalCommande").val() != 0) {
            enter = false;
            final = $("#finalCommande").val().toUpperCase();
            if (final == "AGAIN") {
                $("#finalCommande").attr("readonly", "readonly");
                location.reload();
            }
            if (final == "SIMPLONROCKS") {
                simplon();
            }
        }
    });

    var final;
    $("#commandFree").keypress(function (e) {
        var key = e.which;
        if (key == 13 && enter7 === true && $("#commandFree").val() != 0) {
            enter7 = false;
            finalAI = $("#commandFree").val().toUpperCase();
            if (finalAI == "OPEN SETAIFREE.EXE") {
                $("#commandFree").attr("readonly", "readonly");
                end2();
            }

        }
    });

    /************* ****************/





    function simplon() {
        $('.simplon').find('span').remove()
        $('.simplon').find('br').remove()
        var k = 0
        for (k = 0; k < 20; k++) {
            $(".simplon").append("<span id='" + k + "'>&gt" + simplontab[k] + "</span><br>");
        }
    }


    var simplontab = [
        "........................................",
        "............,::~~~~~~~~~::,.............",
        "........,~~~~~~~~~~~~~~~~~~~~~,.........",
        "......:~~~~~:,...........,:~~~~~:.......",
        "....~~~~~~,.................,~~~~~~,....",
        "...~~~~~........+++++++=.......:~~~~....",
        ".:~~~~:.........+++++++=........:~~~~,..",
        ",~~~~,..........+++++++=.........:~~~~,.",
        "~~~~:...........~~~~~~~:..........~~~~~.",
        "~~~~:.............................:~~~~.",
        "~~~~:.............................:~~~~.",
        "~~~~~...........~~~~~~~~..........~~~~:.",
        ",~~~~:..........+++++++=.........:~~~~..",
        ".,~~~~~.........+++++++=........~~~~~...",
        "...:~~~~,.......+++++++=......,~~~~~....",
        "....:~~~~~:.................:~~~~~:.....",
        ".......~~~~~~~:,........:~~~~~~~........",
        ".........,~~~~~~~~~~~~~~~~~~~,..........",
        ".............,,::::~::::,,..............",
        "........................................"
    ];

});

