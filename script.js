            /*   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function successCallback(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  let ok = latitude + ", " + longitude;
  alert(ok);
}

function errorCallback(error) {
  console.log("Error getting location: " + error.message);
} */
            function pinktheme() {
                let main = document.querySelector("#main");
                main.style.background = "linear-gradient(-45deg, rgba(100,0,60,1), rgba(255,10,205,1) 90%)";
                output.style.color = "white";
                priview.style.color = "gray";
                document.getElementById("creator").style.color = "rgba(255, 250,250,1)";
            }
            function redtheme() {
                let main = document.querySelector("#main");
                main.style.background = "linear-gradient(-45deg, rgba(100,0,60,1), rgba(255,10,100,1) 90%)";
                output.style.color = "white";
                priview.style.color = "gray";
                document.getElementById("creator").style.color = "rgba(255, 250,250,1)";
            }
            function bluetheme() {
                let main = document.querySelector("#main");
                main.style.background = "linear-gradient(-45deg, #000088,rgba(199,0,255,1))";

                output.style.color = "white";

                priview.style.color = "gray";
                document.getElementById("creator").style.color = "rgba(250, 250,255,1)";
            }
            function darktheme() {
                document.querySelector("#main").style.background = "linear-gradient(45deg, #0a0a0a, #3a4452)";
                document.getElementById("creator").style.color = "rgba(255, 255,255,1)";
                priview.style.color = "gray";
                output.style.color = "rgba(255,255,255,.8)";
            }

            function getTheme(theme) {
                if (theme.innerHTML == "Red") {
                    redtheme();

                } else if (theme.innerHTML == "Blue") {
                    bluetheme();

                } else if (theme.innerHTML == "Pink") {
                    pinktheme();
                } else {
                    darktheme();

                }
            }
            function showOp() {
                var themes = document.querySelector(".themebox");
                if (themes.style.display == "block") {
                    themes.style.display = "none"
                } else {
                    themes.style.display = "block";
                    document.getElementById("feedback").style.display = "none";
                }

            }

            var input = document.getElementById("input");
            var equal = document.getElementById("equal");
            var output = document.getElementById("output");
            var priview = document.getElementById("preview");
            var output1 = document.getElementById("hidden");
            var music = document.getElementById("tapSound");
            window.document.getElementById("main").style.minHeight = window.innerHeight + "px";
            var fixCenter = document.getElementById("menuPanel");

            var deviceWidth = window.innerWidth;
            if (deviceWidth < 400) {
                fixCenter.style.width = (deviceWidth / 1.2) + "px";

                fixCenter.style.marginLeft = ((deviceWidth - (deviceWidth / 1.2)) / 2) + "px";
            } else if (deviceWidth > 650) {
                fixCenter.style.width = (deviceWidth / 2) + "px";
                fixCenter.style.marginLeft = ((deviceWidth - (deviceWidth / 2)) / 2) + "px";
            } else {
                fixCenter.style.width = (deviceWidth / 1.5) + "px";
                fixCenter.style.marginLeft = ((deviceWidth - (deviceWidth / 1.5)) / 2) + "px";
            }

            var s1Width = window.document.getElementById("s1");
            sWidth = fixCenter.style.width;
            var sorted = sWidth.substr(0, sWidth.length - 2);

            let widthS = ((sorted / 2) - 8) + "px";
            let notWidthS = ((sorted / 2) - 8);
            var themeb = document.getElementById("feedback");
            var feedb = document.getElementById("themebox");
            //  themeb.style.marginLeft = "";
            themeb.style.width = (notWidthS + 95) + "px";
            feedb.style.width = (notWidthS + 95) + "px";
            feedb.style.textAlign = "right";
            feedb.style.left = "-85px";
            document.querySelector(".s1").style.width = widthS;
            document.querySelector(".s2").style.width = widthS;
            document.querySelector("#themes").style.width = widthS;
            document.querySelector(".themes2").style.width = widthS;
            document.querySelector(".themes3").style.width = widthS;
            document.querySelector(".themes4").style.width = widthS;
            document.querySelector(".feed1").style.width = widthS;
            document.querySelector(".feed2").style.width = widthS;
            document.querySelector(".title").style.width = (sorted - 4) + "px";
            document.querySelector(".feed3").style.width = widthS;
            document.querySelector(".feed4").style.width = widthS;
            document.querySelector("#menuPanelImg").style.marginLeft = (sorted - 16) + "px";

            function cut() {

                fixCenter.style.animation = "hide .5s linear";
                setTimeout(function() {
                    fixCenter.style.display = "none";
                }, 480);


                document.querySelector(".themebox").style.display = "none"
                document.getElementById("feedback").style.display = "none";
            }
            function options() {
                fixCenter.style.display = "block";

                function run() {
                    fixCenter.style.animation = "show 1s linear";

                }
                run();
            }
            function equalTo() {
                music.src = "onclick.ogg";
                output.value = preview.innerHTML;
                output1.value = output.value;
                preview.innerHTML = "";
                if (output.value.length < 8) {
                    output.style.fontSize = "80px";
                } else if (output.value.length < 12) {
                    output.style.fontSize = "50px";
                    output.style.fontWeight = "250";
                } else {
                    output.style.fontSize = "30px";
                    output.style.fontWeight = "550";
                }

            }
            function showO(ok) {
                if (output.value.length < 18) {
                    if (output.value.length >= 7 && output.value.length < 11) {
                        output.style.fontSize = "50px";
                        output.style.fontWeight = "250";
                    } else if (output.value.length >= 11) {
                        output.style.fontSize = "30px";
                        output.style.fontWeight = "550";
                    } else {
                        output.style.fontSize = "80px";
                        output.style.fontWeight = "250";
                    }

                    output.value = output.value + ok.innerHTML;

                    output1.value = output1.value + ok.value;
                    // alert(output1.value);
                    let check = eval(output1.value);
                    preview.innerHTML = check;
                } else {
                    document.getElementById("max").style.display = "block";
                    var max = document.getElementById("max").style.animation = "max 3s linear 1";
                    setTimeout(function() {
                        document.getElementById("max").style.display = "none";
                    }, 2800);
                }

            }
            function cl() {
                music.src = "onclick.ogg";
                output.value = "";
                output1.value = "";
                preview.innerHTML = "";
                if (output.value.length < 7) {
                    output.style.fontSize = "80px";
                    output.style.fontWeight = "250";
                }
            }
            function cl1() {

                if (output.value.length < 9) {
                    output.style.fontSize = "80px";
                    output.style.fontWeight = "250";
                } else if (output.value.length <= 13) {
                    output.style.fontSize = "50px";
                } else {
                    output.style.fontSize = "30px";
                    output.style.fontWeight = "550"
                }
                output.value = output.value.substr(0, output.value.length -1);
                output1.value = output1.value.substr(0, output1.value.length -1);
                if (output1.value.length == 0) {
                    preview.value = "";
                } else {
                    preview.innerHTML = eval(output1.value);
                }
            }
            //feed back controller
            function showFoptions() {
                var buttonClicked = document.getElementById("feedback");
                if (buttonClicked.style.display == "block") {
                    setTimeout(function() {
                        buttonClicked.style.display = "none";
                    }, 1000);
                } else {
                    buttonClicked.style.display = "block";
                    document.querySelector(".themebox").style.display = "none"
                }
            }
            function givefeed(ok) {
                let check = ok.innerHTML;
                let num = 9382613492;
                let name = "friend";
                let msg = " 'replace it Write your feedback here'";
                if (check == "Whats App") {
                    window.location.href = `https://wa.me/${num}?text=Hello Sankar, I am your ${name} from Your Calculator website, ${msg}`,
                    '_blank';
                } else if (check == "Email") {
                    var mailtoLink = "mailto:" + "raulsankar99@gmail.com" + "?subject=" + encodeURIComponent("Give Feedback") + "&body=" + encodeURIComponent("Hello SANKAR, I am your friend from your calculator web 'write your feed back here'");
                    window.location.href = mailtoLink;
                } else if (check == "Send Sms") {
                    window.location.href = "sms:9382613492?body=Hello%20sankar, I am your friend from your calculator web 'write here your feedback'";
                } else {
                    var encodedText = encodeURIComponent("Hello Sankar, I am your friend from your calculator web , 'write here your feedback.'");
                    let enRef = encodeURIComponent("Send feedback");
                    var messengerLink = "https://m.me/100024783611174?ref" +enRef + "&text=" + encodedText;
                    window.location.href = messengerLink;
                }

            }
            function speak() {
                var sp = document.getElementById("speak");
                let spbgimg = sp.style.backgroundImage;

                if (spbgimg == "") {
                    spbgimg = 'url("https://vectorified.com/images/play-button-icon-white-39.png")';
                }
                if (spbgimg == 'url("https://vectorified.com/images/play-button-icon-white-39.png")') {

                    sp.style.backgroundImage = 'url("https://www.seekpng.com/png/full/294-2944357_pause-symbol-png.png")';
                    sp.style.backgroundSize = "contain";
                    let ok = "on";
                    play(ok)
                } else {
                    sp.style.backgroundImage = 'url("https://vectorified.com/images/play-button-icon-white-39.png")';
                    sp.style.backgroundSize = "cover";
                    let ok = "off";
                    play(ok);
                }
            }
            function play(op) {
                if (op == "on") {
                    var speech = new SpeechSynthesisUtterance;
                    const message = document.getElementById("output").value + '-';
                    if (message != "" && message != '-' && message != "--") {
                        speech.lang = "en-IN"
                        speech.text = message
                        window.speechSynthesis.speak(speech);
                        setTimeout(function() {
                            var sop = document.getElementById("speak");
                            sop.style.backgroundImage = 'url("https://vectorified.com/images/play-button-icon-white-39.png")';
                            sop.style.backgroundSize = "cover";
                        }, 1500);

                    } else {
                        var defaultMessage;
                        if (message == "--") {
                           defaultMessage = "minus"
                        } else {
                     defaultMessage = "0-"
                        }
                        speech.lang = "en-IN"
                        speech.text = defaultMessage
                        window.speechSynthesis.speak(speech);
                        setTimeout(function() {
                            var sop = document.getElementById("speak");
                            sop.style.backgroundImage = 'url("https://vectorified.com/images/play-button-icon-white-39.png")';
                            sop.style.backgroundSize = "cover";
                        }, 200);

                    }
                }


            }
