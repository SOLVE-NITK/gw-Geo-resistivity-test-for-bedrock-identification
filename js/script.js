var tryData = ["680.14","1373.12","283.27"]

var counter=0;

function navNext() {
    for (temp = 0; temp < 18; temp++) {
      //alert(p);
      document.getElementById("canvas" + temp).style.visibility = "hidden";
    }
    simsubscreennum += 1;
    document.getElementById("canvas" + simsubscreennum).style.visibility =
      "visible";
    document.getElementById("nextButton").style.visibility = "hidden";
    magic();
  }

  // Alluviam data
  const header1 = ["NO", "AB/2(m)", "MN/2(m)", "V(v)", "I(A)", "R(ohm)", "K(m)"];
  const data = [
    [1, 1, 0.25, 1.5, 0.028, 53.57, 5.09],
    [2, 1.5, 0.25, 0.91, 0.0332, 27.4, 13.75],
    [3, 2, 0.25, 0.79, 0.044, 17.95, 24.74],
    [4, 3, 0.25, 0.4, 0.0385, 10.39, 56.16],
    [5, 4, 0.5, 0.44, 0.0312, 14.1, 49.49],
    [6, 4, 0.25, 0.23, 0.0319, 7.21, 100.15],
    [7, 5, 0.5, 0.48, 0.0458, 10.48, 77.76],
    [8, 6, 0.5, 0.32, 0.043, 7.44, 112.33],
    [9, 8, 0.5, 0.16, 0.0418, 3.83, 200.3],
    [10, 10, 1, 0.17, 0.0347, 4.89, 155.53],
    [11, 10, 0.5, 0.08, 0.0376, 2.12, 313.41],
    [12, 15, 1, 0.09, 0.0435, 2.07, 351.9],
    [13, 20, 1, 0.05, 0.0385, 1.29, 626.83],
    [14, 30, 1, 0.02, 0.027, 0.74, 1412.3],
    // Add more data rows as needed
  ];


// Basalt Data
  const header2 = ["NO", "AB/2(m)", "MN/2(m)", "R(ohm)", "K(m)",];
  const data2 = [
    [1, 1, 0.5,154.7,2.4],
    [2, 1.5,0.5,86.9,6],
    [3, 2,0.5,62.2,12],
    [4, 3,0.5,37.5,27],
    [5, 5,0.5,20.4,78],
    [6, 5,1,40.4,38],
    [7, 7,1,25.3,75],
    [8, 10, 1,13.07,156],
    [9, 10, 3,46.7,48],
    [10,15, 3, 18.17,113],
    [11,20, 3, 8.82,205],
    [12,25, 3, 4.63,323],
    [13,30, 3, 2.5,467],
    [14,30, 10,5.9,126],
    // Add more data rows as needed
  ];


  // shale Data
  const header3 = ["NO", "AB/2(m)", "MN/2(m)", "R(ohm)", "K(m)"];
  const data3 = [
    [1, 1, 0.5,202.6,2.36],
    [2, 1.5,0.5,61.2,6.28],
    [3, 2,0.5,36.9,11.7],
    [4, 3,0.5,11.9,22.47],
    [5, 4.5,0.5,4.518,62.8],
    [6, 4.5,1.5,17.08,18.84],
    [7, 7,1.5,3.933,48.93],
    [8, 10,1.5,1.169,102.4],
    [9, 15,1.5,0.301,233.14],
    // [10,10, 3, 18.17,113],
    // [11,10, 3, 8.82,205],
    // [12,15, 3, 4.63,323],
    // [13,20, 3, 2.5,467],
    // [14,30, 10,5.9,126],
    // Add more data rows as needed
  ];
  //-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
    if (document.getElementById("arrow1").style.display == "none")
      document.getElementById("arrow1").style.display = "block";
    else document.getElementById("arrow1").style.display = "none";
  }
  
  //stop blinking arrow
  function myStopFunction() {
    clearInterval(myInt);
    document.getElementById("arrow1").style.display = "none";
  }
  
  function animateArrowATPosition(left, top, height, degg) {
    document.getElementById("arrow1").style =
      "display:block ;position:absolute; left:" +
      left +
      "px; top: " +
      top +
      "px; height:" +
      height +
      "px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform =
      "rotate(" + degg + "deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform =
      "rotate(" + degg + "deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
  }

//-----------------------------------------Simsubscreens---------------------------------------------

  function magic() {
    if(simsubscreennum==1){
        document.getElementById("location1").style.visibility = "visible";
        document.getElementById("nextButton").style.visibility = "visible";
          
    } 
    
    else if (simsubscreennum == 2) {
        document.getElementById("location1").style.visibility = "hidden";
        document.getElementById("scale").style.visibility = "visible";
        document.getElementById("Start_Text").style.visibility = "visible";
        document.getElementById("End_Text").style.visibility = "visible";
       
        myInt = setInterval(function () {
            animatearrow();
          }, 500);
          animateArrowATPosition(380, 111, 30, 271);
        document.getElementById("scale").onclick = function () {
        myStopFunction();
        document.getElementById("scale").style.animation ="moveScale 1s forwards";
        setTimeout(function(){
          // document.getElementById("30m").style.visibility = "visible";
          document.getElementById("nextButton").style.visibility = "visible";
        },1000);
       
        }
    }


    else if (simsubscreennum == 3) {
     console.log('3')
        document.getElementById("scale").style.visibility = "hidden";
        document.getElementsByClassName("trial1")[0].style.visibility = "visible";
        document.getElementById("hammer_1").style.visibility = "visible";
        document.getElementsByClassName("electrodes_1")[0].style.visibility = "visible";
        document.getElementsByClassName("wire")[0].style.visibility = "visible";
        document.getElementById("zoom1").style.visibility = "visible";
        document.getElementsByClassName("grass")[0].style.visibility = "visible";
        // hammer1
        myInt = setInterval(function () {
            animatearrow();
          }, 500);
          animateArrowATPosition(542, 131, 30, 360);
        document.getElementById("hammer_1").onclick = function () {
        myStopFunction();
        document.getElementById("hammer_1").style.animation = "mover 1s ease-in-out  forwards";
        setTimeout(function(){
            document.getElementsByClassName("electrodes_1")[0].style.animation ="movep 0.1s ease-in-out  forwards";
            setTimeout(function(){
                document.getElementById("hammer_1").style.visibility = "hidden"; 
                document.getElementById("hammer_2").style.visibility = "visible";
                document.getElementsByClassName("electrodes_2")[0].style.visibility = "visible";
            })

            // hammer2
            myInt = setInterval(function () {
                animatearrow();
              }, 500);
              animateArrowATPosition(356, 128, 30, 360);
            document.getElementById("hammer_2").onclick = function () {
            myStopFunction();
            document.getElementById("hammer_2").style.animation = "mover 1s ease-in-out  forwards";
            setTimeout(function(){
                document.getElementsByClassName("electrodes_2")[0].style.animation ="movep 0.1s ease-in-out  forwards";
                setTimeout(function(){
                document.getElementById("hammer_2").style.visibility = "hidden"; 
                document.getElementById("hammer_3").style.visibility = "visible";
                document.getElementsByClassName("electrodes_3")[0].style.visibility = "visible"; 
                })

                // hammer3
                myInt = setInterval(function () {
                    animatearrow();
                  }, 500);
                  animateArrowATPosition(713, 128, 30, 360);
                  document.getElementById("hammer_3").onclick = function () {
                    myStopFunction();
                    document.getElementById("hammer_3").style.animation = "mover 1s ease-in-out  forwards";
                    setTimeout(function(){
                        document.getElementsByClassName("electrodes_3")[0].style.animation ="movep 0.1s ease-in-out  forwards"; 
                        setTimeout(function(){
                            document.getElementById("hammer_3").style.visibility = "hidden"; 
                            document.getElementById("hammer_4").style.visibility = "visible";
                            document.getElementsByClassName("electrodes_4")[0].style.visibility = "visible"; 
                        })
                        myInt = setInterval(function () {
                            animatearrow();
                          }, 500);
                          animateArrowATPosition(168, 128, 30, 360);
                          document.getElementById("hammer_4").onclick = function () {
                            myStopFunction();
                            document.getElementById("hammer_4").style.animation = "mover 1s ease-in-out  forwards";
                            setTimeout(function(){
                                document.getElementsByClassName("electrodes_4")[0].style.animation ="movep 0.1s ease-in-out  forwards"; 
                                setTimeout(function(){
                                    document.getElementById("hammer_4").style.visibility = "hidden"; 
                                    document.getElementById("text0.5").style.visibility = "visible";
                                    document.getElementById('text0.5').style.animation="fadeIn 2.5s forwards";
                                    document.getElementById("text11").style.visibility = "visible"; 
                                    document.getElementById('text11').style.animation="fadeIn 2.5s forwards";
                                    setTimeout(function(){
                                      document.getElementById("text0.5").style.visibility = "hidden";
                                      document.getElementById("text11").style.visibility = "hidden"; 
                                      setTimeout(function(){
                                        document.getElementById("spool1").style.visibility = "visible";
                                        document.getElementById("spool1_part").style.visibility = "visible";

                                        document.getElementById("spool2").style.visibility = "visible";
                                        document.getElementById("spool2_part").style.visibility = "visible";

                                        document.getElementById("spool3").style.visibility = "visible";
                                        document.getElementById("spool3_part").style.visibility = "visible";

                                        document.getElementById("spool4").style.visibility = "visible";
                                        document.getElementById("spool4_part").style.visibility = "visible";

                                        setTimeout(function(){
                                          myInt = setInterval(function () {
                                            animatearrow();
                                          }, 500);
                                          animateArrowATPosition(125, 147, 30, 271);
                                          document.getElementById("spool1_part").onclick = function () {
                                            myStopFunction();
                                            // document.getElementsByClassName("hand")[0].style.visibility = "visible";
                                            // document.getElementsByClassName("hand")[0].style.animation = "hand1 1s ease-in-out  forwards";
                                            document.getElementById("spool1_part").style.animation = "connect1 1s ease-in-out  forwards";
                                            setTimeout(function(){
                                              // document.getElementsByClassName("hand")[0].style.visibility = "hidden";
                                              myInt = setInterval(function () {
                                                animatearrow();
                                              }, 500);
                                              animateArrowATPosition(308, 147, 30, 271);
                                              document.getElementById("spool2_part").onclick = function () {
                                                myStopFunction(); 
                                                // document.getElementsByClassName("hand")[0].style.visibility = "visible";
                                                // document.getElementsByClassName("hand")[0].style.animation = "hand2 1s ease-in-out  forwards";
                                                document.getElementById("spool2_part").style.animation = "connect2 1s ease-in-out  forwards";
                                                setTimeout(function(){
                                                  myInt = setInterval(function () {
                                                    animatearrow();
                                                  }, 500);
                                                  animateArrowATPosition(484, 147, 30, 271);
                                                  document.getElementById("spool3_part").onclick = function () {
                                                    myStopFunction(); 
                                                    document.getElementById("spool3_part").style.animation = "connect3 1s ease-in-out  forwards";
                                                    setTimeout(function(){
                                                      myInt = setInterval(function () {
                                                        animatearrow();
                                                      }, 500);
                                                      animateArrowATPosition(653, 147, 30, 271);
                                                      document.getElementById("spool4_part").onclick = function () {
                                                        myStopFunction(); 
                                                        document.getElementById("spool4_part").style.animation = "connect4 1s ease-in-out  forwards";
                                                        setTimeout(function(){
                                                          // let popUp = document.querySelectorAll(".pop-up")[0];
                                                          // popUp.style.display = "block";
                                                          // console.log("pop_up")
                                                          document.getElementById("hand_cableconnect").style.visibility = "visible";
                                                          myInt = setInterval(function () {
                                                            animatearrow();
                                                          }, 500);
                                                          animateArrowATPosition(333, 437, 30, 180);
                                                          document.getElementById("hand_cableconnect").style.visibility = "visible";
                                                          
                                                          document.getElementById("hand_cableconnect").onclick = function () {
                                                            myStopFunction(); 
                                                            document.getElementById("hand_cableconnect").style.animation = "movek 1s ease-in-out  forwards";
                                                            setTimeout(function(){
                                                              document.getElementsByClassName("wire")[0].style.visibility = "hidden";
                                                              document.getElementById("hand_cableconnect").style.visibility = "hidden";
                                                              document.getElementById("connect_wire").style.visibility = "visible";
                                                              setTimeout(function(){
                                                    
                                                                myInt = setInterval(function () {
                                                                  animatearrow();
                                                                }, 500);
                                                                animateArrowATPosition(280, 351, 30, 180);
                                                            // document.getElementById("swicth_onhand").style.visibility = "visible";
                                                            document.getElementById("switch").onclick = function () {
                                                              myStopFunction(); 
                                                               document.getElementById("swicth_onhand").style.visibility = "visible";
                                                              document.getElementById("swicth_onhand").style.animation = "movek1 1s ease-in-out  forwards";
                                                              setTimeout(function(){
                                                                
                                                                document.getElementById("switch").style.animation = "switch 1s ease-in-out  forwards";
                                                                setTimeout(function(){
                                                                  // document.getElementById("switch").style.visibility = "visible";
                                                                  document.getElementsByClassName("switchgreen")[0].style.visibility = "visible";
                                                                  document.getElementById("swicth_onhand").style.visibility = "hidden"
                                                                //   document.getElementById("data").style.visibility="visible";
                                                                //  document.getElementById("obsData").style.visibility="visible";
                                                                //  generate_table();
                                                                 setTimeout(function(){
                                                                  document.getElementById("nextButton").style.visibility = "visible";
                                                                 
                                                                 },1000);
                                                                 
                                                                 
                                                                  // document.getElementsByClassName("switch")[0].style.visibility = "hidden";
                                                                },1000);
                                                              },500);
                                                            }
                                                              },1000);
                                                            },1200);
                                                            
                                                           
                                                          
                                                          }
                                                         
                                                        },1000);
                                                      }
                                                    },1000);
                                                  }
                                                },1000);
                                              }


                                             
                                            },1000);
                                          }

                                        },1000);
                                      })
                                    
                                     
                                    },2500)
                                   
                                    
                                })  
                            },1000);
                          }
                    },1000);
                  }
            },1000);
            }
        },1000);

        
        
    }}

    else if (simsubscreennum == 4) {
      document.getElementById("zoom1").style.visibility="hidden";
      // document.getElementById("zoom2").style.visibility="hidden";
      document.getElementsByClassName("grass")[0].style.visibility="hidden";
      document.getElementsByClassName("electrodes_1")[0].style.visibility="hidden";
      document.getElementsByClassName("electrodes_2")[0].style.visibility="hidden";
      document.getElementsByClassName("electrodes_3")[0].style.visibility="hidden";
      document.getElementsByClassName("electrodes_4")[0].style.visibility="hidden";
      document.getElementsByClassName("soil_1")[0].style.visibility="hidden";
      document.getElementsByClassName("battery")[0].style.visibility="hidden";
      document.getElementById("connect_wire").style.visibility="hidden";
      document.getElementsByClassName("resitity")[0].style.visibility="hidden";
      document.getElementsByClassName("switchgreen")[0].style.visibility="hidden";

      document.getElementById("spool1").style.visibility = "hidden";
      document.getElementById("spool1_part").style.visibility = "hidden";

      document.getElementById("spool2").style.visibility = "hidden";
      document.getElementById("spool2_part").style.visibility = "hidden";

      document.getElementById("spool3").style.visibility = "hidden";
      document.getElementById("spool3_part").style.visibility = "hidden";

      document.getElementById("spool4").style.visibility = "hidden";
      document.getElementById("spool4_part").style.visibility = "hidden";
      document.getElementById("switch").style.visibility = "hidden";
    
    document.getElementById("loc311").style.visibility = "visible";
   
    setTimeout(function () {
      // document.getElementById('d1').style.visibility = "hidden";
      document.getElementById("dot1").style.visibility = "visible";
      // step = 0;
      document.getElementById('d1').style.visibility = "visible";
      document.getElementById("tab2-1").style.display = "block";
      document.getElementById("tab22-1").style.display = "block";
     
      generate_table();
      setTimeout(function () {
        document.getElementById("dot2").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("dot3").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("dot4").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("dot5").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("dot6").style.visibility = "visible";
                setTimeout(function () {
                  document.getElementById("dot7").style.visibility = "visible";
                  setTimeout(function () {
                    document.getElementById("dot8").style.visibility = "visible";
                    setTimeout(function () {
                      document.getElementById("dot9").style.visibility = "visible";
                      setTimeout(function () {
                        document.getElementById("dot10").style.visibility = "visible";
                        setTimeout(function () {
                          document.getElementById("dot11").style.visibility = "visible";
                          setTimeout(function () {
                            document.getElementById("dot12").style.visibility = "visible";
                            setTimeout(function () {
                              document.getElementById("dot13").style.visibility = "visible";
                              setTimeout(function () {
                                document.getElementById("dot14").style.visibility = "visible";
                                setTimeout(function () {
                                 document.getElementById("nextButton").style.visibility = "visible";
                             
                               },1000);
                             },1000);
                           },1000);
                         },1000);
                       },1000);
                     },1000);
                   },1000);
                 },1000);
               },1000);
             },1000);
           },1000);
         },1000);
       },1000);
     },1000);
    },3500);
  }

  
  else if(simsubscreennum==5){
   document.getElementById("loc311").style.visibility = "hidden";
    document.getElementById('d1').style.visibility = "hidden";
    document.getElementById("dot1").style.visibility = "hidden";
    document.getElementById("dot2").style.visibility = "hidden";
    document.getElementById("dot3").style.visibility = "hidden";
    document.getElementById("dot4").style.visibility = "hidden";
    document.getElementById("dot5").style.visibility = "hidden";
    document.getElementById("dot6").style.visibility = "hidden";
    document.getElementById("dot7").style.visibility = "hidden";
    document.getElementById("dot8").style.visibility = "hidden";
    document.getElementById("dot9").style.visibility = "hidden";
    document.getElementById("dot10").style.visibility = "hidden";
    document.getElementById("dot11").style.visibility = "hidden";
    document.getElementById("dot12").style.visibility = "hidden";
    document.getElementById("dot13").style.visibility = "hidden";
    document.getElementById("dot14").style.visibility = "hidden";
    
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("5-1").style.visibility= "visible";
    console.log("Hi")
  
  }

  else if(simsubscreennum==6){
    document.getElementById("5-1").style.visibility= "hidden";
    document.getElementById("iv").style.visibility = "hidden";
    document.getElementById("symbol").style.visibility = "hidden";
    
    
  }




  // step - 1 -basalt
  else if(simsubscreennum==7){
    console.log("7")
    document.getElementById("meanResult").style.visibility = "hidden";
    document.getElementById("resultText").style.visibility = "hidden";
    document.getElementsByClassName("trial1")[0].style.visibility = "hidden";

    document.getElementsByClassName("quiz-container")[0].style.visibility = "hidden";
    document.getElementById("trialNote").style.visibility = "hidden";

    document.getElementById("location2").style.visibility = "visible";
    document.getElementById("nextButton").style.visibility = "visible";
      
} 


  // step - 2 -basalt
else if (simsubscreennum == 8) {
  console.log("8")
  document.getElementById("location2").style.visibility = "hidden";
  document.getElementById("scale2").style.visibility = "visible";
  document.getElementById("Start_Text").style.visibility = "visible";
  document.getElementById("End_Text").style.visibility = "visible";
  document.getElementsByClassName("trial1")[0].style.visibility = "hidden";

  myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(380, 111, 30, 271);
  document.getElementById("scale2").onclick = function () {
  myStopFunction();
  document.getElementById("scale2").style.animation ="moveScale1 1s forwards";
  setTimeout(function(){
    // document.getElementById("30m").style.visibility = "visible";
    document.getElementById("nextButton").style.visibility = "visible";
  },1000);
 
  }
}


  // step - 3 -basalt
else if (simsubscreennum == 9) {
  console.log("9")
  console.log('hidden')
  document.getElementsByClassName("resitity2")[0].style.visibility = "visible";
  document.getElementsByClassName("switch2")[0].style.visibility = "visible";
  document.getElementsByClassName("battery2")[0].style.visibility = "visible";
  document.getElementsByClassName("wire2")[0].style.visibility = "visible";
    document.getElementById("scale2").style.visibility = "hidden";
    document.getElementsByClassName("trial2")[0].style.visibility = "visible";
    document.getElementById("hammer_21").style.visibility = "visible";
    document.getElementsByClassName("electrodes_21")[0].style.visibility = "visible";
    document.getElementsByClassName("grass2")[0].style.visibility="visible";
    console.log("wire")
    document.getElementById("zoom3").style.visibility = "visible";
    // hammer1
    myInt = setInterval(function () {
        animatearrow();
      }, 500);
      animateArrowATPosition(542, 131, 30, 360);
    document.getElementById("hammer_21").onclick = function () {
    myStopFunction();
    document.getElementById("hammer_21").style.animation = "mover 1s ease-in-out  forwards";
    setTimeout(function(){
        document.getElementsByClassName("electrodes_21")[0].style.animation ="movep 0.1s ease-in-out  forwards";
        setTimeout(function(){
            document.getElementById("hammer_21").style.visibility = "hidden"; 
            document.getElementById("hammer_22").style.visibility = "visible";
            document.getElementsByClassName("electrodes_22")[0].style.visibility = "visible";
        })

        // hammer2
        myInt = setInterval(function () {
            animatearrow();
          }, 500);
          animateArrowATPosition(356, 128, 30, 360);
        document.getElementById("hammer_22").onclick = function () {
        myStopFunction();
        document.getElementById("hammer_22").style.animation = "mover 1s ease-in-out  forwards";
        setTimeout(function(){
            document.getElementsByClassName("electrodes_22")[0].style.animation ="movep 0.1s ease-in-out  forwards";
            setTimeout(function(){
            document.getElementById("hammer_22").style.visibility = "hidden"; 
            document.getElementById("hammer_23").style.visibility = "visible";
            document.getElementsByClassName("electrodes_23")[0].style.visibility = "visible"; 
            
            })

            // hammer3
            myInt = setInterval(function () {
                animatearrow();
              }, 500);
              animateArrowATPosition(713, 128, 30, 360);
              document.getElementById("hammer_23").onclick = function () {
                myStopFunction();
                document.getElementById("hammer_23").style.animation = "mover 1s ease-in-out  forwards";
                setTimeout(function(){
                    document.getElementsByClassName("electrodes_23")[0].style.animation ="movep 0.1s ease-in-out  forwards"; 
                    setTimeout(function(){
                        document.getElementById("hammer_23").style.visibility = "hidden"; 
                        document.getElementById("hammer_24").style.visibility = "visible";
                        document.getElementsByClassName("electrodes_24")[0].style.visibility = "visible"; 
                    })
                    myInt = setInterval(function () {
                        animatearrow();
                      }, 500);
                      animateArrowATPosition(168, 128, 30, 360);
                      document.getElementById("hammer_24").onclick = function () {
                        myStopFunction();
                        document.getElementById("hammer_24").style.animation = "mover 1s ease-in-out  forwards";
                        setTimeout(function(){
                            document.getElementsByClassName("electrodes_24")[0].style.animation ="movep 0.1s ease-in-out  forwards"; 
                            setTimeout(function(){
                                document.getElementById("hammer_24").style.visibility = "hidden"; 
                                document.getElementById("text0.5").style.visibility = "visible";
                                document.getElementById('text0.5').style.animation="fadeIn 2.5s forwards";
                                document.getElementById("text11").style.visibility = "visible"; 
                                document.getElementById('text11').style.animation="fadeIn 2.5s forwards";
                                setTimeout(function(){
                                  document.getElementById("text0.5").style.visibility = "hidden";
                                  document.getElementById("text11").style.visibility = "hidden"; 
                                  setTimeout(function(){
                                    document.getElementById("spool21").style.visibility = "visible";
                                    document.getElementById("spool21_part").style.visibility = "visible";

                                    document.getElementById("spool22").style.visibility = "visible";
                                    document.getElementById("spool22_part").style.visibility = "visible";

                                    document.getElementById("spool23").style.visibility = "visible";
                                    document.getElementById("spool23_part").style.visibility = "visible";

                                    document.getElementById("spool24").style.visibility = "visible";
                                    document.getElementById("spool24_part").style.visibility = "visible";

                                    setTimeout(function(){
                                      myInt = setInterval(function () {
                                        animatearrow();
                                      }, 500);
                                      animateArrowATPosition(125, 147, 30, 271);
                                      document.getElementById("spool21_part").onclick = function () {
                                        myStopFunction();
                                        // document.getElementsByClassName("hand")[0].style.visibility = "visible";
                                        // document.getElementsByClassName("hand")[0].style.animation = "hand1 1s ease-in-out  forwards";
                                        document.getElementById("spool21_part").style.animation = "connect1 1s ease-in-out  forwards";
                                        setTimeout(function(){
                                          // document.getElementsByClassName("hand")[0].style.visibility = "hidden";
                                          myInt = setInterval(function () {
                                            animatearrow();
                                          }, 500);
                                          animateArrowATPosition(308, 147, 30, 271);
                                          document.getElementById("spool22_part").onclick = function () {
                                            myStopFunction(); 
                                            // document.getElementsByClassName("hand")[0].style.visibility = "visible";
                                            // document.getElementsByClassName("hand")[0].style.animation = "hand2 1s ease-in-out  forwards";
                                            document.getElementById("spool22_part").style.animation = "connect2 1s ease-in-out  forwards";
                                            setTimeout(function(){
                                              myInt = setInterval(function () {
                                                animatearrow();
                                              }, 500);
                                              animateArrowATPosition(484, 147, 30, 271);
                                              document.getElementById("spool23_part").onclick = function () {
                                                myStopFunction(); 
                                                document.getElementById("spool23_part").style.animation = "connect3 1s ease-in-out  forwards";
                                                setTimeout(function(){
                                                  myInt = setInterval(function () {
                                                    animatearrow();
                                                  }, 500);
                                                  animateArrowATPosition(653, 147, 30, 271);
                                                  document.getElementById("spool24_part").onclick = function () {
                                                    myStopFunction(); 
                                                    document.getElementById("spool24_part").style.animation = "connect4 1s ease-in-out  forwards";
                                                    setTimeout(function(){
                                                      myInt = setInterval(function () {
                                                        animatearrow();
                                                      }, 500);
                                                      animateArrowATPosition(392, 385, 30, 270);
                                                      document.getElementById("hand_cableconnect2").style.visibility = "visible";
                                                      
                                                      document.getElementById("hand_cableconnect2").onclick = function () {
                                                        myStopFunction(); 
                                                        document.getElementById("hand_cableconnect2").style.animation = "movek 1s ease-in-out  forwards";
                                                        setTimeout(function(){
                                                          document.getElementsByClassName("wire2")[0].style.visibility = "hidden";
                                                          document.getElementById("hand_cableconnect2").style.visibility = "hidden";
                                                          document.getElementById("connect_wire2").style.visibility = "visible";
                                                          setTimeout(function(){
                                                    
                                                            myInt = setInterval(function () {
                                                              animatearrow();
                                                            }, 500);
                                                            animateArrowATPosition(280, 351, 30, 180);
                                                        
                                                        document.getElementsByClassName("switch2")[0].onclick = function () {
                                                          document.getElementById("swicth_onhand2").style.visibility = "visible";
                                                          myStopFunction(); 
                                                          document.getElementById("swicth_onhand2").style.animation = "movek1 1s ease-in-out  forwards";
                                                          setTimeout(function(){
                                                            
                                                            document.getElementsByClassName("switch2")[0].style.animation = "switch 1s ease-in-out  forwards";
                                                            setTimeout(function(){
                                                              // document.getElementsByClassName("switch2")[0].style.visibility = "visible";
                                                              document.getElementsByClassName("switchgreen2")[0].style.visibility = "visible";
                                                              document.getElementById("swicth_onhand2").style.visibility = "hidden"
                                                            //   document.getElementById("data").style.visibility="visible";
                                                            //  document.getElementById("obsData").style.visibility="visible";
                                                            //  generate_table();
                                                             setTimeout(function(){
                                                              document.getElementById("nextButton").style.visibility = "visible";
                                                             
                                                             },1000);
                                                             
                                                             
                                                              // document.getElementsByClassName("switch")[0].style.visibility = "hidden";
                                                            },1000);
                                                          },500);
                                                        }
                                                          },1000);
                                                        },1000);
                                                        
                                                       
                                                      
                                                      }
                                                      
                                                    },1000);
                                                  }
                                                },1000);
                                              }
                                            },1000);
                                          }


                                         
                                        },1000);
                                      }

                                    },1000);
                                  })
                                
                                  setTimeout(function(){
                                    
                                  })
                                },2500)
                               
                                
                            })  
                        },1000);
                      }
                },1000);
              }
        },1000);
        }
    },1000);

    
    
}}
   


  // step - 4 -basalt location hover
else if (simsubscreennum == 10) {
  console.log("10")
  document.getElementById("zoom3").style.visibility="hidden";
  // document.getElementById("zoom2").style.visibility="hidden";
  document.getElementsByClassName("grass2")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_21")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_22")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_23")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_24")[0].style.visibility="hidden";
  document.getElementsByClassName("soil_1")[0].style.visibility="hidden";
  document.getElementsByClassName("battery2")[0].style.visibility="hidden";
  document.getElementById("connect_wire2").style.visibility="hidden";
  document.getElementsByClassName("wire2")[0].style.visibility="hidden";
  document.getElementsByClassName("resitity2")[0].style.visibility="hidden";
  document.getElementsByClassName("switchgreen2")[0].style.visibility="hidden";

  document.getElementById("spool21").style.visibility = "hidden";
  document.getElementById("spool21_part").style.visibility = "hidden";

  document.getElementById("spool22").style.visibility = "hidden";
  document.getElementById("spool22_part").style.visibility = "hidden";

  document.getElementById("spool23").style.visibility = "hidden";
  document.getElementById("spool23_part").style.visibility = "hidden";

  document.getElementById("spool24").style.visibility = "hidden";
  document.getElementById("spool24_part").style.visibility = "hidden";
  document.getElementsByClassName("switch2")[0].style.visibility = "hidden";

document.getElementById("loc311").style.visibility = "visible";

setTimeout(function () {
  // document.getElementById('d1').style.visibility = "hidden";
  document.getElementById("dot21").style.visibility = "visible";
  // step = 0;
  document.getElementById('d1').style.visibility = "visible";
  document.getElementById("tab2-2").style.display = "block";
  document.getElementById("tab22-2").style.display = "block";
 
  generate_table2();
  setTimeout(function () {
    document.getElementById("dot22").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("dot23").style.visibility = "visible";
      setTimeout(function () {
        document.getElementById("dot24").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("dot25").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("dot26").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("dot27").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("dot28").style.visibility = "visible";
                setTimeout(function () {
                  document.getElementById("dot29").style.visibility = "visible";
                  setTimeout(function () {
                    document.getElementById("dot210").style.visibility = "visible";
                    setTimeout(function () {
                      document.getElementById("dot211").style.visibility = "visible";
                      setTimeout(function () {
                        document.getElementById("dot212").style.visibility = "visible";
                        setTimeout(function () {
                          document.getElementById("dot213").style.visibility = "visible";
                          setTimeout(function () {
                            document.getElementById("dot214").style.visibility = "visible";
                            setTimeout(function () {
                             document.getElementById("nextButton").style.visibility = "visible";
                         
                           },1000);
                         },1000);
                       },1000);
                     },1000);
                   },1000);
                 },1000);
               },1000);
             },1000);
           },1000);
         },1000);
       },1000);
     },1000);
   },1000);
 },1000);
},3500);
}

else if(simsubscreennum==11){
  document.getElementById("loc311").style.visibility = "hidden";
   document.getElementById('d1').style.visibility = "hidden";
   document.getElementById("dot21").style.visibility = "hidden";
   document.getElementById("dot22").style.visibility = "hidden";
   document.getElementById("dot23").style.visibility = "hidden";
   document.getElementById("dot24").style.visibility = "hidden";
   document.getElementById("dot25").style.visibility = "hidden";
   document.getElementById("dot26").style.visibility = "hidden";
   document.getElementById("dot27").style.visibility = "hidden";
   document.getElementById("dot28").style.visibility = "hidden";
   document.getElementById("dot29").style.visibility = "hidden";
   document.getElementById("dot210").style.visibility = "hidden";
   document.getElementById("dot211").style.visibility = "hidden";
   document.getElementById("dot212").style.visibility = "hidden";
   document.getElementById("dot213").style.visibility = "hidden";
   document.getElementById("dot214").style.visibility = "hidden";
   
   document.getElementById("btn2").style.visibility = "visible";
   document.getElementById("11-1").style.visibility= "visible";
   console.log("Hi")
  //  document.getElementById("nextButton").style.visibility="visible";
 }
 else if(simsubscreennum==12){
  document.getElementById("11-1").style.visibility= "hidden";
  document.getElementById("iv2").style.visibility = "hidden";
  document.getElementById("symbol2").style.visibility = "hidden";
  
}

// Shale step1
else if (simsubscreennum==13){
  document.getElementById("trialNote2").style.visibility = "hidden"; 
  document.getElementById("location3").style.visibility = "visible";
  document.getElementById("nextButton").style.visibility = "visible";
  document.getElementsByClassName("trial2")[0].style.visibility = "hidden";
 
} 


else if (simsubscreennum == 14) {
  console.log("14")
  document.getElementById("location3").style.visibility = "hidden";
  document.getElementById("scale3").style.visibility = "visible";
  document.getElementById("Start_Text").style.visibility = "visible";
  document.getElementById("End_Text").style.visibility = "visible";
  document.getElementsByClassName("trial2")[0].style.visibility = "hidden";

  myInt = setInterval(function () {
      animatearrow();
    }, 500);
    animateArrowATPosition(380, 111, 30, 271);
  document.getElementById("scale3").onclick = function () {
  myStopFunction();
  document.getElementById("scale3").style.animation ="moveScale2 1s forwards";
  setTimeout(function(){
    // document.getElementById("30m").style.visibility = "visible";
    document.getElementById("nextButton").style.visibility = "visible";
  },1000);
 
  }
}

else if (simsubscreennum == 15) {
  console.log("15")
  console.log('hidden')
  document.getElementsByClassName("resitity3")[0].style.visibility = "visible";
  document.getElementsByClassName("switch3")[0].style.visibility = "visible";
  document.getElementsByClassName("battery3")[0].style.visibility = "visible";
  document.getElementsByClassName("wire3")[0].style.visibility = "visible";
    document.getElementById("scale3").style.visibility = "hidden";
    document.getElementsByClassName("trial3")[0].style.visibility = "visible";
    document.getElementById("hammer_31").style.visibility = "visible";
    document.getElementsByClassName("electrodes_31")[0].style.visibility = "visible";
    // document.getElementsByClassName("wire")[0].style.visibility = "visible";
    console.log("wire")
    document.getElementById("zoom33").style.visibility = "visible";
    // hammer1
    myInt = setInterval(function () {
        animatearrow();
      }, 500);
      animateArrowATPosition(542, 131, 30, 360);
    document.getElementById("hammer_31").onclick = function () {
    myStopFunction();
    document.getElementById("hammer_31").style.animation = "mover 1s ease-in-out  forwards";
    setTimeout(function(){
        document.getElementsByClassName("electrodes_31")[0].style.animation ="movep 0.1s ease-in-out  forwards";
        setTimeout(function(){
            document.getElementById("hammer_31").style.visibility = "hidden"; 
            document.getElementById("hammer_32").style.visibility = "visible";
            document.getElementsByClassName("electrodes_32")[0].style.visibility = "visible";
        })

        // hammer2
        myInt = setInterval(function () {
            animatearrow();
          }, 500);
          animateArrowATPosition(356, 128, 30, 360);
        document.getElementById("hammer_32").onclick = function () {
        myStopFunction();
        document.getElementById("hammer_32").style.animation = "mover 1s ease-in-out  forwards";
        setTimeout(function(){
            document.getElementsByClassName("electrodes_32")[0].style.animation ="movep 0.1s ease-in-out  forwards";
            setTimeout(function(){
            document.getElementById("hammer_32").style.visibility = "hidden"; 
            document.getElementById("hammer_33").style.visibility = "visible";
            document.getElementsByClassName("electrodes_33")[0].style.visibility = "visible"; 
            })

            // hammer3
            myInt = setInterval(function () {
                animatearrow();
              }, 500);
              animateArrowATPosition(713, 128, 30, 360);
              document.getElementById("hammer_33").onclick = function () {
                myStopFunction();
                document.getElementById("hammer_33").style.animation = "mover 1s ease-in-out  forwards";
                setTimeout(function(){
                    document.getElementsByClassName("electrodes_33")[0].style.animation ="movep 0.1s ease-in-out  forwards"; 
                    setTimeout(function(){
                        document.getElementById("hammer_33").style.visibility = "hidden"; 
                        document.getElementById("hammer_34").style.visibility = "visible";
                        document.getElementsByClassName("electrodes_34")[0].style.visibility = "visible"; 
                    })
                    myInt = setInterval(function () {
                        animatearrow();
                      }, 500);
                      animateArrowATPosition(168, 128, 30, 360);
                      document.getElementById("hammer_34").onclick = function () {
                        myStopFunction();
                        document.getElementById("hammer_34").style.animation = "mover 1s ease-in-out  forwards";
                        setTimeout(function(){
                            document.getElementsByClassName("electrodes_34")[0].style.animation ="movep 0.1s ease-in-out  forwards"; 
                            setTimeout(function(){
                                document.getElementById("hammer_34").style.visibility = "hidden"; 
                                document.getElementById("text0.53").style.visibility = "visible";
                                document.getElementById('text0.53').style.animation="fadeIn 2.5s forwards";
                                document.getElementById("text113").style.visibility = "visible"; 
                                document.getElementById('text113').style.animation="fadeIn 2.5s forwards";
                                setTimeout(function(){
                                  document.getElementById("text0.53").style.visibility = "hidden";
                                  document.getElementById("text113").style.visibility = "hidden"; 
                                  setTimeout(function(){
                                    document.getElementById("spool31").style.visibility = "visible";
                                    document.getElementById("spool31_part").style.visibility = "visible";

                                    document.getElementById("spool32").style.visibility = "visible";
                                    document.getElementById("spool32_part").style.visibility = "visible";

                                    document.getElementById("spool33").style.visibility = "visible";
                                    document.getElementById("spool33_part").style.visibility = "visible";

                                    document.getElementById("spool34").style.visibility = "visible";
                                    document.getElementById("spool34_part").style.visibility = "visible";

                                    setTimeout(function(){
                                      myInt = setInterval(function () {
                                        animatearrow();
                                      }, 500);
                                      animateArrowATPosition(125, 147, 30, 271);
                                      document.getElementById("spool31_part").onclick = function () {
                                        myStopFunction();
                                        // document.getElementsByClassName("hand")[0].style.visibility = "visible";
                                        // document.getElementsByClassName("hand")[0].style.animation = "hand1 1s ease-in-out  forwards";
                                        document.getElementById("spool31_part").style.animation = "connect1 1s ease-in-out  forwards";
                                        setTimeout(function(){
                                          // document.getElementsByClassName("hand")[0].style.visibility = "hidden";
                                          myInt = setInterval(function () {
                                            animatearrow();
                                          }, 500);
                                          animateArrowATPosition(308, 147, 30, 271);
                                          document.getElementById("spool32_part").onclick = function () {
                                            myStopFunction(); 
                                            // document.getElementsByClassName("hand")[0].style.visibility = "visible";
                                            // document.getElementsByClassName("hand")[0].style.animation = "hand2 1s ease-in-out  forwards";
                                            document.getElementById("spool32_part").style.animation = "connect2 1s ease-in-out  forwards";
                                            setTimeout(function(){
                                              myInt = setInterval(function () {
                                                animatearrow();
                                              }, 500);
                                              animateArrowATPosition(484, 147, 30, 271);
                                              document.getElementById("spool33_part").onclick = function () {
                                                myStopFunction(); 
                                                document.getElementById("spool33_part").style.animation = "connect3 1s ease-in-out  forwards";
                                                setTimeout(function(){
                                                  myInt = setInterval(function () {
                                                    animatearrow();
                                                  }, 500);
                                                  animateArrowATPosition(653, 147, 30, 271);
                                                  document.getElementById("spool34_part").onclick = function () {
                                                    myStopFunction(); 
                                                    document.getElementById("spool34_part").style.animation = "connect4 1s ease-in-out  forwards";
                                                    setTimeout(function(){
                                                      myInt = setInterval(function () {
                                                        animatearrow();
                                                      }, 500);
                                                      animateArrowATPosition(333, 437, 30, 180);
                                                      document.getElementById("hand_cableconnect3").style.visibility = "visible";
                                                      
                                                      document.getElementById("hand_cableconnect3").onclick = function () {
                                                        myStopFunction(); 
                                                        document.getElementById("hand_cableconnect3").style.animation = "movek 1s ease-in-out  forwards";
                                                        setTimeout(function(){
                                                          document.getElementsByClassName("wire3")[0].style.visibility = "hidden";
                                                          document.getElementById("hand_cableconnect3").style.visibility = "hidden";
                                                          document.getElementById("connect_wire3").style.visibility = "visible";
                                                          setTimeout(function(){
                                                    
                                                            myInt = setInterval(function () {
                                                              animatearrow();
                                                            }, 500);
                                                            animateArrowATPosition(280, 351, 30, 180);
                                                       
                                                        document.getElementsByClassName("switch3")[0].onclick = function () {
                                                          myStopFunction(); 
                                                          document.getElementById("swicth_onhand3").style.visibility = "visible";
                                                          document.getElementById("swicth_onhand3").style.animation = "movek1 1s ease-in-out  forwards";
                                                          setTimeout(function(){
                                                            
                                                            document.getElementsByClassName("switch3")[0].style.animation = "switch 1s ease-in-out  forwards";
                                                            setTimeout(function(){
                                                              // document.getElementsByClassName("switch3")[0].style.visibility = "visible";
                                                              document.getElementsByClassName("switchgreen3")[0].style.visibility = "visible";
                                                              document.getElementById("swicth_onhand3").style.visibility = "hidden"
                                                            //   document.getElementById("data").style.visibility="visible";
                                                            //  document.getElementById("obsData").style.visibility="visible";
                                                            //  generate_table();
                                                             setTimeout(function(){
                                                              document.getElementById("nextButton").style.visibility = "visible";
                                                             
                                                             },1000);
                                                             
                                                             
                                                              // document.getElementsByClassName("switch")[0].style.visibility = "hidden";
                                                            },1000);
                                                          },500);
                                                        }
                                                          },1000);
                                                        },1000);
                                                        
                                                       
                                                      
                                                      }
                                                      
                                                    },1000);
                                                  }
                                                },1000);
                                              }
                                            },1000);
                                          }


                                         
                                        },1000);
                                      }

                                    },1000);
                                  })
                                
                                  setTimeout(function(){
                                    
                                  })
                                },2500)
                               
                                
                            })  
                        },1000);
                      }
                },1000);
              }
        },1000);
        }
    },1000);

    
    
}}

else if (simsubscreennum == 16) {
  console.log("16")
  document.getElementById("zoom33").style.visibility="hidden";
  // document.getElementById("zoom2").style.visibility="hidden";
  // document.getElementsByClassName("grass")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_31")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_32")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_33")[0].style.visibility="hidden";
  document.getElementsByClassName("electrodes_34")[0].style.visibility="hidden";
  document.getElementsByClassName("soil_3")[0].style.visibility="hidden";
  document.getElementsByClassName("battery3")[0].style.visibility="hidden";
  document.getElementById("connect_wire3").style.visibility="hidden";
  document.getElementsByClassName("wire3")[0].style.visibility="hidden";
  document.getElementsByClassName("resitity3")[0].style.visibility="hidden";
  document.getElementsByClassName("switchgreen3")[0].style.visibility="hidden";

  document.getElementById("spool31").style.visibility = "hidden";
  document.getElementById("spool31_part").style.visibility = "hidden";

  document.getElementById("spool32").style.visibility = "hidden";
  document.getElementById("spool32_part").style.visibility = "hidden";

  document.getElementById("spool33").style.visibility = "hidden";
  document.getElementById("spool33_part").style.visibility = "hidden";

  document.getElementById("spool34").style.visibility = "hidden";
  document.getElementById("spool34_part").style.visibility = "hidden";
  document.getElementsByClassName("switch3")[0].style.visibility = "hidden";

document.getElementById("loc331").style.visibility = "visible";

setTimeout(function () {
  // document.getElementById('d1').style.visibility = "hidden";
  document.getElementById("dot31").style.visibility = "visible";
  // step = 0;
  document.getElementById('d1').style.visibility = "visible";
  document.getElementById("tab3-3").style.display = "block";
  document.getElementById("tab33-3").style.display = "block";
 
  generate_table3();
  setTimeout(function () {
    document.getElementById("dot32").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("dot33").style.visibility = "visible";
      setTimeout(function () {
        document.getElementById("dot34").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("dot35").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("dot36").style.visibility = "visible";
            setTimeout(function () {
              document.getElementById("dot37").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("dot38").style.visibility = "visible";
                setTimeout(function () {
                  document.getElementById("dot39").style.visibility = "visible";
                  setTimeout(function () {
                  //   document.getElementById("dot310").style.visibility = "visible";
                  //   setTimeout(function () {
                  //     document.getElementById("dot311").style.visibility = "visible";
                  //     setTimeout(function () {
                  //       document.getElementById("dot312").style.visibility = "visible";
                  //       setTimeout(function () {
                  //         document.getElementById("dot313").style.visibility = "visible";
                  //         setTimeout(function () {
                  //           document.getElementById("dot314").style.visibility = "visible";
                  //           setTimeout(function () {
                             document.getElementById("nextButton").style.visibility = "visible";
                         
                  //          },1000);
                  //        },1000);
                  //      },1000);
                  //    },1000);
                  //  },1000);
                 },1000);
               },1000);
             },1000);
           },1000);
         },1000);
       },1000);
     },1000);
   },1000);
 },1000);
},3500);
}

else if(simsubscreennum==17){
  document.getElementById("loc331").style.visibility = "hidden";
   document.getElementById('d1').style.visibility = "hidden";
   document.getElementById("dot31").style.visibility = "hidden";
   document.getElementById("dot32").style.visibility = "hidden";
   document.getElementById("dot33").style.visibility = "hidden";
   document.getElementById("dot34").style.visibility = "hidden";
   document.getElementById("dot35").style.visibility = "hidden";
   document.getElementById("dot36").style.visibility = "hidden";
   document.getElementById("dot37").style.visibility = "hidden";
   document.getElementById("dot38").style.visibility = "hidden";
   document.getElementById("dot39").style.visibility = "hidden";
  
   document.getElementById("btn3").style.visibility = "visible";
   document.getElementById("11-3").style.visibility= "visible";
   console.log("Hi")
  //  document.getElementById("nextButton").style.visibility="visible";
 }

 else if(simsubscreennum==18){
  document.getElementById("11-3").style.visibility= "hidden";
  document.getElementById("iv3").style.visibility = "hidden";
  document.getElementById("symbol3").style.visibility = "hidden";
  
}
}

// Alluviam
    function showText(){
        document.getElementById("text3").style.visibility = "visible";  
    }
    function hideText(){
        document.getElementById("text3").style.visibility = "hidden";  
    }

    // Basalat
    function showText1(){
      document.getElementById("text_basalt").style.visibility = "visible";  
  }
  function hideText1(){
      document.getElementById("text_basalt").style.visibility = "hidden";  
  }

  function showText2(){
    document.getElementById("text_shale").style.visibility = "visible";  
}
function hideText2(){
    document.getElementById("text_shale").style.visibility = "hidden";  
}

  function showTooltip1(){
    document.getElementById("ttp1").style.visibility = "visible"										
  }
  function hideTooltip1(){
    document.getElementById("ttp1").style.visibility = "hidden"										
  }
  
  function showTooltip2(){
    document.getElementById("ttp2").style.visibility = "visible"										
  }
  function hideTooltip2(){
    document.getElementById("ttp2").style.visibility = "hidden"										
  }

  function showTooltip3(){
    document.getElementById("ttp3").style.visibility = "visible"										
  }
  function hideTooltip3(){
    document.getElementById("ttp3").style.visibility = "hidden"										
  }

  function bigImg(x) {
    x.style.height = "150px";
    x.style.width = "230px";
  }
  
  function normalImg(x) {
    x.style.height = "145px";
    x.style.width = "145px";
  }
  
  function bigImg1(x) {
    x.style.height = "150px";
    x.style.width = "230px";
  }
  
  function normalImg1(x) {
    x.style.height = "145px";
    x.style.width = "145px";
  }

  function bigImg3(x) {
    x.style.height = "150px";
    x.style.width = "230px";
  }
  
  function normalImg3(x) {
    x.style.height = "145px";
    x.style.width = "145px";
  }


//-----------------------------------------Alluviam---------------------------------------------

// Alluviam generate table
let increment = 0;
const interval = 1000; // Change this to your desired interval in milliseconds

const highlightButtons = document.querySelectorAll(".highlight-button");


function generate_table() {
  let tableHead = document.getElementById("thead1");
  let thead = tableHead.insertRow(0);
  for (let i = 0; i < header1.length; i++) {
    thead.insertCell(i).innerHTML = header1[i];
  }
  let table = document.getElementById("tab2-body");
  generateRows(table, 0);
}

function generateRows(table, i) {
  if (i < data.length) {
    let rows = table.insertRow(-1);
    eachRow(rows, data[i]);
    increment = increment + 1;
    setTimeout(function () {
      generateRows(table, i + 1);
    }, interval);
  } else {
    showNextButton(true);
  }
}
let step = 0;
function eachRow(rows, row) {
  for (let i = 0; i < row.length; i++) {
    rows.insertCell(i).innerHTML = row[i];
  }
  // document.getElementById("file").value = step;
  // step += Math.floor(100 / data.length) + 1;
}

function highlightRow1(rowId1) {
  // Remove highlight from all rows
  const tableRows = document.querySelectorAll('tr');
  tableRows.forEach(row => row.classList.remove('highlighted-row'));

  if(rowId1 !== 0){
    const rowToHighlight = document.querySelectorAll('tr')[rowId1];
    if (rowToHighlight) {
      rowToHighlight.classList.add('highlighted-row');
      rowToHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }  
}

function toggleContent(isoId, line11Id, line21Id, p1Id, rowId1 = 0) {
  const isoElement = document.getElementById(isoId);
  const line1Element = document.getElementById(line11Id);
  const line2Element = document.getElementById(line21Id);
  const p1Element = document.getElementById(p1Id);
  

  isoElement.style.visibility = isoElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
  line1Element.style.visibility = isoElement.style.visibility;
  line2Element.style.visibility = isoElement.style.visibility;
  p1Element.style.visibility = isoElement.style.visibility;

  
  highlightRow1(rowId1);

  
}
// function showNextButton(show) {
//   // Implement this function based on your requirements to show the next button.
// }

// function showContent(elementId) {
//   // Show the hidden content div
//   document.getElementById(elementId).style.visibility = 'visible';

// }

// function hideContent(elementId) {
//   // Hide the content div on mouse leave
//   document.getElementById(elementId).style.visibility = 'hidden';
// }


// Alluviam calculation 
var clkCount1 = 0;
let arr1 = ["272.67","376.89","444.08","583.5","697.81","722.08","814.92","835.74","767.15","760.54","664.42","728.43","808.61","1045.12","9521.96"];
function checkInput1() {
	let inputs = [document.getElementById("gi-1"), document.getElementById("gi-2"), document.getElementById("gi-3"), document.getElementById("gi-4"), document.getElementById("gi-5"), document.getElementById("gi-6"), document.getElementById("gi-7"), document.getElementById("gi-8"), document.getElementById("gi-9"), document.getElementById("gi-10"),document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15")];
	let anyInputEmpty = false;
	for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
			anyInputEmpty = true;
            document.getElementById("alerttxt").style.visibility="visible";
        }
        
    }
	if (anyInputEmpty) {
        return;
    }
	document.getElementById("alerttxt").style.visibility="hidden";
  document.getElementById("btn1").style.visibility="hidden";
  document.getElementById("resbtn1").style.visibility = "visible";
	clkCount1++;
	let allInputsCorrect = true;
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === arr1[i]) {
		    inputs[i].style.color = "green";
        
	document.getElementById("iv").style.visibility = "visible";
		} else {
			allInputsCorrect = false;
		    inputs[i].style.color = "red";
		}
    setTimeout(() => {
			inputs[i].style.color = "Green";
		}, 3000);
			// inputs[i].style.color = "black";
		
	}
	if (clkCount1 == 2) {
		document.getElementById("btn1").style.visibility="hidden";
		document.getElementById("resbtn1").style.visibility = "visible";
	}
	if (allInputsCorrect) {
       
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("resbtn1").style.visibility = "hidden";
        document.getElementById("iv").style.visibility = "visible";
        document.getElementById("symbol").style.visibility = "visible";
    }
}
function getResult1() {
	let inputs = [document.getElementById("gi-1"), document.getElementById("gi-2"), document.getElementById("gi-3"), document.getElementById("gi-4"), document.getElementById("gi-5"), document.getElementById("gi-6"), document.getElementById("gi-7"), document.getElementById("gi-8"), document.getElementById("gi-9"), document.getElementById("gi-10"),document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15")];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = arr1[i];
    }
	document.getElementById("resbtn1").style.visibility = "hidden";

	document.getElementById("iv").style.visibility = "visible";
  document.getElementById("symbol").style.visibility = "visible";
}
    
function alert1() {
  alert("Hello! I am an alert box!");
}



// Alluviam Mean Calculate
function evaluateArea(){
	
	let area = tryData[0];
	let userInput = Number(document.getElementById("res").value);
	document.getElementById("rightAns").style.visibility="hidden";
	document.getElementById("res").value = area;
	document.getElementById('Result').style.visibility="hidden";
  document.getElementById("nextButton").style.visibility="visible";
	
}
function hideButton()
{
	let area = tryData[0];
	let userInput = Number(document.getElementById("res").value);
	console.log("hit");

	if(!userInput)
	{
		alert("please enter a value")
	}
	else 
	{
		counter++;
		if(area != userInput){
			document.getElementById("rightAns").innerHTML = "&#10008;"
			document.getElementById("rightAns").style.color = "red";
			document.getElementById("Result").style.visibility="hidden";
     
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns").innerHTML = "&#10004;"
			document.getElementById("rightAns").style.color = "green";
			document.getElementById("chk").style.visibility = "hidden";
			document.getElementById("Result").style.visibility="hidden";
			document.getElementById("nextButton").style.visibility="visible";
					
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk").style.visibility="hidden";
			document.getElementById("Result").style.visibility="visible";
      // document.getElementById("nextButton").style.visibility="visible";
		// }	
	}
	
}
// Alluviam Selection text
function checkAnswer() {
  var selectedAnswer = document.getElementById('answerOptions').value;
  var resultDisplay = document.getElementById('result');
  var explanationDisplay = document.getElementById('explanation');
  var correctAnswer = 'Alluvium'; // Correct answer should match the option text exactly

  if (selectedAnswer === correctAnswer) {
    resultDisplay.innerHTML = ' &#10004;'; // ✓ is the Unicode for checkmark symbol
    resultDisplay.style.color = 'green';
    explanationDisplay.textContent = ''; // Clear the explanation if the answer is correct
    setTimeout(function(){
      document.getElementById("trialNote").style.visibility ="visible";
      document.getElementById("trialNote").style.animation = "tril1 1s forwards";
      document.getElementById("nextButton").style.visibility = "visible";
    }, 1000);
  } else {
    resultDisplay.innerHTML = ' &#10008;'; // ✗ is the Unicode for cross mark symbol
    resultDisplay.style.color = 'red';
    explanationDisplay.textContent = 'The correct answer is ' + correctAnswer + '.'; // Display the correct answer in the explanation
    setTimeout(function(){
      document.getElementById("trialNote").style.visibility ="visible";
      document.getElementById("trialNote").style.animation = "tril1 1s forwards";
      document.getElementById("nextButton").style.visibility = "visible";
    }, 1000);
  }
}









//-----------------------------------------Basalt---------------------------------------------

// Basalt Generate table
let increment2 = 0;
const interval2 = 1000; // Change this to your desired interval in milliseconds

function generate_table2() {
  let tableHead2 = document.getElementById("thead2");
  let thead2 = tableHead2.insertRow(0);
  for (let i = 0; i < header2.length; i++) {
    thead2.insertCell(i).innerHTML = header2[i]
  }
  let table2 = document.getElementById("tab22-body");
  generateRows2(table2, 0);
}

function generateRows2(table2, i) {
  if (i < data2.length) {
    let rows = table2.insertRow(-1);
    eachRow2(rows, data2[i]);
    increment2 = increment + 1;
    setTimeout(function () {
      generateRows2(table2, i + 1);
    }, interval);
  } else {
    showNextButton(true);
  }
}
let step2 = 0;
function eachRow2(rows, row) {
  for (let i = 0; i < row.length; i++) {
    rows.insertCell(i).innerHTML = row[i];
  }
}


// function highlightRow(rowId) {
//   // Remove highlight from all rows
//   const tableRows = document.querySelectorAll('tr');
//   tableRows.forEach(row => row.classList.remove('highlighted-row'));

//   if(rowId !== 0){
//     const rowToHighlight = document.querySelectorAll('tr')[rowId];
//     if (rowToHighlight) {
//       rowToHighlight.classList.add('highlighted-row');
//       rowToHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   }  
// }

function toggleContent(isoId, line1Id, line2Id, p1Id, rowId = 0) {
  const isoElement = document.getElementById(isoId);
  const line1Element = document.getElementById(line1Id);
  const line2Element = document.getElementById(line2Id);
  const p1Element = document.getElementById(p1Id);
  

  isoElement.style.visibility = isoElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
  line1Element.style.visibility = isoElement.style.visibility;
  line2Element.style.visibility = isoElement.style.visibility;
  p1Element.style.visibility = isoElement.style.visibility;

  
  // highlightRow(rowId);

  
}


// Trial 2 Basalt table calculation
var clkCount2 = 0;
let arr2 = ["371.28","521.4","746.4","1012.5","1591.2","1535.2","1897.5","2038.92","2241.6","2053.21","1808.1","1495.49","1167.5","743.4","19223.7"];
function checkInput2() {
  console.log("calculation")
	let inputs2 = [document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26"), document.getElementById("gi-27"), document.getElementById("gi-28"), document.getElementById("gi-29"), document.getElementById("gi-210"),document.getElementById("gi-211"), document.getElementById("gi-212"), document.getElementById("gi-213"), document.getElementById("gi-214"), document.getElementById("gi-215")];
	let anyInputEmpty2 = false;
	for (let i = 0; i < inputs2.length; i++) {
        if (inputs2[i].value === "") {
			anyInputEmpty2 = true;
            document.getElementById("alerttxt2").style.visibility="visible";
        }
        
    }
	if (anyInputEmpty2) {
        return;
    }
	document.getElementById("alerttxt2").style.visibility="hidden";
  document.getElementById("btn2").style.visibility="hidden";
  document.getElementById("resbtn2").style.visibility = "visible";
	clkCount2++;
	let allInputsCorrect2 = true;
	for (let i = 0; i < inputs2.length; i++) {
		if (inputs2[i].value === arr2[i]) {
		    inputs2[i].style.color = "green";
        
	document.getElementById("iv2").style.visibility = "visible";
  document.getElementById("symbol2").style.visibility = "visible";
  console.log("visible")
		} else {
			allInputsCorrect2 = false;
		    inputs2[i].style.color = "red";
		}
    setTimeout(() => {
			inputs2[i].style.color = "Green";
		}, 3000);
			// inputs[i].style.color = "black";
		
	}
	if (clkCount2 == 2) {
		document.getElementById("btn2").style.visibility="hidden";
		document.getElementById("resbtn2").style.visibility = "visible";
	}
	if (allInputsCorrect2) {
       
        document.getElementById("btn2").style.visibility = "hidden";
        document.getElementById("resbtn2").style.visibility = "hidden";
        document.getElementById("iv2").style.visibility = "visible";
        document.getElementById("symbol2").style.visibility = "visible";
    }
}
function getResult2() {
	let inputs2 = [document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26"), document.getElementById("gi-27"), document.getElementById("gi-28"), document.getElementById("gi-29"), document.getElementById("gi-210"),document.getElementById("gi-211"), document.getElementById("gi-212"), document.getElementById("gi-213"), document.getElementById("gi-214"), document.getElementById("gi-215")];
    for (let i = 0; i < inputs2.length; i++) {
        inputs2[i].value = arr2[i];
    }
	document.getElementById("resbtn2").style.visibility = "hidden";
  console.log("result")

	document.getElementById("iv2").style.visibility = "visible";
  document.getElementById("symbol2").style.visibility = "visible";
}
    
function alert2() {
  alert("Hello! I am an alert box!");
}


// Basalt Mean calculate
function evaluateArea2(){
	
	let area2 = tryData[1];
	let userInput2 = Number(document.getElementById("res2").value);
	document.getElementById("rightAns2").style.visibility="hidden";
	document.getElementById("res2").value = area2;
	document.getElementById('Result2').style.visibility="hidden";
	document.getElementById("nextButton").style.visibility="visible";
	
}
function hideButton2()
{
	let area2 = tryData[1];
	let userInput2 = Number(document.getElementById("res2").value);
	console.log("basalt");

	if(!userInput2)
	{
		alert("please enter a value")
	}
	else 
	{
		counter++;
		if(area2 != userInput2){
			document.getElementById("rightAns2").innerHTML = "&#10008;"
			document.getElementById("rightAns2").style.color = "red";
			document.getElementById("Result2").style.visibility="hidden";
     
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns2").innerHTML = "&#10004;"
			document.getElementById("rightAns2").style.color = "green";
			document.getElementById("chk2").style.visibility = "hidden";
			document.getElementById("Result2").style.visibility="hidden";
      document.getElementById("nextButton").style.visibility="visible";
					
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk2").style.visibility="hidden";
			document.getElementById("Result2").style.visibility="visible";
      
		// }	
	}
	
}



function checkAnswer2() {
  var selectedAnswer2 = document.getElementById('answerOptions2').value;
  var resultDisplay2 = document.getElementById('result2');
  var explanationDisplay2 = document.getElementById('explanation2');
  var correctAnswer = 'Basalt'; // Correct answer should match the option text exactly

  if (selectedAnswer2 === correctAnswer) {
    resultDisplay2.innerHTML = ' &#10004;'; // ✓ is the Unicode for checkmark symbol
    resultDisplay2.style.color = 'green';
    explanationDisplay2.textContent = ''; // Clear the explanation if the answer is correct
    setTimeout(function(){
      document.getElementById("trialNote2").style.visibility ="visible";
      document.getElementById("trialNote2").style.animation = "tril1 1s forwards";
      document.getElementById("nextButton").style.visibility = "visible";
    }, 1000);
  } else {
    resultDisplay2.innerHTML = ' &#10008;'; // ✗ is the Unicode for cross mark symbol
    resultDisplay2.style.color = 'red';
    explanationDisplay2.textContent = 'The correct answer is ' + correctAnswer + '.'; // Display the correct answer in the explanation
    setTimeout(function(){
      document.getElementById("trialNote2").style.visibility ="visible";
      document.getElementById("trialNote2").style.animation = "tril1 1s forwards";
      document.getElementById("nextButton").style.visibility = "visible";
    }, 1000);
  }
}






//-----------------------------------------Shale---------------------------------------------

let increment3 = 0;
const interval3 = 1000; // Change this to your desired interval in milliseconds

const highlightButtons3 = document.querySelectorAll(".highlight-button");


function generate_table3() {
  let tableHead3 = document.getElementById("thead3");
  let thead3 = tableHead3.insertRow(0);
  for (let i = 0; i < header3.length; i++) {
    thead3.insertCell(i).innerHTML = header3[i]
  }
  let table3 = document.getElementById("tab32-body");
  generateRows3(table3, 0);
}

function generateRows3(table3, i) {
  if (i < data3.length) {
    let rows = table3.insertRow(-1);
    eachRow3(rows, data3[i]);
    increment3 = increment + 1;
    setTimeout(function () {
      generateRows3(table3, i + 1);
    }, interval);
  } else {
    showNextButton(true);
  }
}
let step3 = 0;
function eachRow3(rows, row) {
  for (let i = 0; i < row.length; i++) {
    rows.insertCell(i).innerHTML = row[i];
  }
}

function highlightRow3(rowId1) {
  // Remove highlight from all rows
  const tableRows3 = document.querySelectorAll('img');
  tableRows3.forEach(row => row.classList.remove('highlighted-row3'));

  if (rowId1 !== 0) {
    const rowToHighlight3 = document.querySelectorAll('img')[rowId1 - 1];
    if (rowToHighlight3) {
      rowToHighlight3.classList.add('highlighted-row3');
      rowToHighlight3.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
function toggleContent3(isoId3, lineId11, lineId22, p12Id, rowId3=0) {
  const isoElement = document.getElementById(isoId3);
  const line12Element = document.getElementById(lineId11);
  const line22Element = document.getElementById(lineId22);
  const p11Element = document.getElementById(p12Id);
  

  isoElement.style.visibility = isoElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
  line12Element.style.visibility = isoElement.style.visibility;
  line22Element.style.visibility = isoElement.style.visibility;
  p11Element.style.visibility = isoElement.style.visibility;

  
  highlightRow3(rowId3);

  
}

// function showNextButton(show3) {
//   // Implement this function based on your requirements to show the next button.
// }
function showContent3(elementId) {
  // Show the hidden content div
  document.getElementById(elementId).style.visibility = 'visible';

}
function hideContent3(elementId) {
  // Hide the content div on mouse leave
  document.getElementById(elementId).style.visibility = 'hidden';
}




// Trial 3 shale table calculation


var clkCount3 = 0;
let arr3 = ["478.136","384.336","431.73","267.393","283.7304","321.7872","192.441","119.7056","70.175","2549.435"];
function checkInput3() {
  console.log("calculation")
	let inputs3 = [document.getElementById("gi-31"), document.getElementById("gi-32"), document.getElementById("gi-33"), document.getElementById("gi-34"), document.getElementById("gi-35"), document.getElementById("gi-36"), document.getElementById("gi-37"), document.getElementById("gi-38"), document.getElementById("gi-39"), document.getElementById("gi-310")];
	let anyInputEmpty3 = false;
	for (let i = 0; i < inputs3.length; i++) {
        if (inputs3[i].value === "") {
			anyInputEmpty3 = true;
            document.getElementById("alerttxt3").style.visibility="visible";
        }
        
    }
	if (anyInputEmpty3) {
        return;
    }
	document.getElementById("alerttxt3").style.visibility="hidden";
  document.getElementById("btn3").style.visibility="hidden";
  document.getElementById("resbtn3").style.visibility = "visible";
	clkCount3++;
	let allInputsCorrect3 = true;
	for (let i = 0; i < inputs3.length; i++) {
		if (inputs3[i].value === arr3[i]) {
		    inputs3[i].style.color = "green";
        
	document.getElementById("iv3").style.visibility = "visible";
  document.getElementById("symbol3").style.visibility = "visible";
		} else {
			allInputsCorrect3 = false;
		    inputs3[i].style.color = "red";
		}
    setTimeout(() => {
			inputs3[i].style.color = "Green";
		}, 3000);
			// inputs[i].style.color = "black";
		
	}
	if (clkCount3 == 2) {
		document.getElementById("btn3").style.visibility="hidden";
		document.getElementById("resbtn3").style.visibility = "visible";
	}
	if (allInputsCorrect3) {
       
        document.getElementById("btn3").style.visibility = "hidden";
        document.getElementById("resbtn3").style.visibility = "hidden";
        document.getElementById("iv3").style.visibility = "visible";
        document.getElementById("symbol3").style.visibility = "visible";
    }
}
function getResult3() {
	let inputs3 = [document.getElementById("gi-31"), document.getElementById("gi-32"), document.getElementById("gi-33"), document.getElementById("gi-34"), document.getElementById("gi-35"), document.getElementById("gi-36"), document.getElementById("gi-37"), document.getElementById("gi-38"), document.getElementById("gi-39"), document.getElementById("gi-310")];
    for (let i = 0; i < inputs3.length; i++) {
        inputs3[i].value = arr3[i];
    }
	document.getElementById("resbtn3").style.visibility = "hidden";
  console.log("result")

	document.getElementById("iv3").style.visibility = "visible";
  document.getElementById("symbol3").style.visibility = "visible";
}
    
function alert3() {
  alert("Hello! I am an alert box!");
}


// shale Mean calculate
function evaluateArea3(){
	
	let area3 = tryData[2];
	let userInput3 = Number(document.getElementById("res3").value);
	document.getElementById("rightAns3").style.visibility="hidden";
	document.getElementById("res3").value = area3;
	document.getElementById('Result3').style.visibility="hidden";
	document.getElementById("nextButton").style.visibility="visible";
	
}
function hideButton3()
{
	let area3 = tryData[2];
	let userInput3 = Number(document.getElementById("res3").value);
	console.log("basalt");

	if(!userInput3)
	{
		alert("please enter a value")
	}
	else 
	{
		counter++;
		if(area3 != userInput3){
			document.getElementById("rightAns3").innerHTML = "&#10008;"
			document.getElementById("rightAns3").style.color = "red";
			document.getElementById("Result3").style.visibility="hidden";
     
			// document.getElementById("form1").style.visibility="visible";
			// 		document.getElementById("iv1").style.visibility="visible";
			// document.getElementById("resultStyle").style.visibility = "visible";
		} else {
			document.getElementById("rightAns3").innerHTML = "&#10004;"
			document.getElementById("rightAns3").style.color = "green";
			document.getElementById("chk3").style.visibility = "hidden";
			document.getElementById("Result3").style.visibility="hidden";
      document.getElementById("nextButton").style.visibility="visible";
					
			return true;
			
		}
		// if(counter>1)
		// {
			document.getElementById("chk3").style.visibility="hidden";
			document.getElementById("Result3").style.visibility="visible";
      
		// }	
	}
	
}





// var clkCount3 = 0;
// let arr3 = ["478.136","384.336","431.73","267.393","283.7304","321.7872","192.441","119.7056","70.175"];
// function checkInput3() {
//   console.log("calculation")
// 	let inputs3 = [document.getElementById("gi-31"), document.getElementById("gi-32"), document.getElementById("gi-33"), document.getElementById("gi-34"), document.getElementById("gi-35"), document.getElementById("gi-36"), document.getElementById("gi-37"), document.getElementById("gi-38"), document.getElementById("gi-39"), document.getElementById("gi-310"),document.getElementById("gi-311"), document.getElementById("gi-312"), document.getElementById("gi-313"), document.getElementById("gi-314"), document.getElementById("gi-315")];
// 	let anyInputEmpty3 = false;
// 	for (let i = 0; i < inputs3.length; i++) {
//         if (inputs3[i].value === "") {
// 			anyInputEmpty3 = true;
//             document.getElementById("alerttxt3").style.visibility="visible";
//         }
        
//     }
// 	if (anyInputEmpty3) {
//         return;
//     }
// 	document.getElementById("alerttxt3").style.visibility="hidden";
//   document.getElementById("btn3").style.visibility="hidden";
//   document.getElementById("resbtn3").style.visibility = "visible";
// 	clkCount2++;
// 	let allInputsCorrect3 = true;
// 	for (let i = 0; i < inputs3.length; i++) {
// 		if (inputs3[i].value === arr3[i]) {
// 		    inputs3[i].style.color = "green";
        
// 	document.getElementById("iv3").style.visibility = "visible";
// 		} else {
// 			allInputsCorrect3 = false;
// 		    inputs3[i].style.color = "red";
// 		}
//     setTimeout(() => {
// 			inputs3[i].style.color = "Green";
// 		}, 3000);
// 			// inputs[i].style.color = "black";
		
// 	}
// 	if (clkCount3 == 2) {
// 		document.getElementById("btn3").style.visibility="hidden";
// 		document.getElementById("resbtn3").style.visibility = "visible";
// 	}
// 	if (allInputsCorrect3) {
       
//         document.getElementById("btn3").style.visibility = "hidden";
//         document.getElementById("resbtn3").style.visibility = "hidden";
//         document.getElementById("iv3").style.visibility = "visible";
//     }
// }
// function getResult3() {
// 	let inputs3 = [document.getElementById("gi-31"), document.getElementById("gi-32"), document.getElementById("gi-33"), document.getElementById("gi-34"), document.getElementById("gi-35"), document.getElementById("gi-36"), document.getElementById("gi-37"), document.getElementById("gi-38"), document.getElementById("gi-39"), document.getElementById("gi-310")];
//     for (let i = 0; i < inputs3.length; i++) {
//         inputs3[i].value = arr3[i];
//     }
// 	document.getElementById("resbtn3").style.visibility = "hidden";
//   console.log("result")

// 	document.getElementById("iv3").style.visibility = "visible";
// }
    
// function alert3() {
//   alert("Hello! I am an alert box!");
// }


// check answer

function checkAnswer3() {
  var selectedAnswer = document.getElementById('answerOptions3').value;
  var resultDisplay = document.getElementById('result3');
  var explanationDisplay = document.getElementById('explanation3');
  var correctAnswer = 'Shale'; // Correct answer should match the option text exactly

  if (selectedAnswer === correctAnswer) {
    resultDisplay.innerHTML = ' &#10004;'; // ✓ is the Unicode for checkmark symbol
    resultDisplay.style.color = 'green';
    explanationDisplay.textContent = ''; // Clear the explanation if the answer is correct
    setTimeout(function(){
      document.getElementById("trialNote3").style.visibility ="visible";
      document.getElementById("trialNote3").style.animation = "tril1 1s forwards";
      document.getElementById("inferenceText").style.visibility = "visible";
    }, 1000);
  } else {
    resultDisplay.innerHTML = ' &#10008;'; // ✗ is the Unicode for cross mark symbol
    resultDisplay.style.color = 'red';
    explanationDisplay.textContent = 'The correct answer is ' + correctAnswer + '.'; // Display the correct answer in the explanation
    setTimeout(function(){
      document.getElementById("trialNote3").style.visibility ="visible";
      document.getElementById("trialNote3").style.animation = "tril1 1s forwards";
      document.getElementById("inferenceText").style.visibility = "visible";
    }, 1000);
  }
}