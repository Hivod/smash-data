var table = '<table><tr class="tableheader"><th>Move</th><th>Startup</th><th>Active frames</th><th>End lag</th></tr><tr class="jab"><td>Jab</td><td>s</td><td>a</td><td>e</td></tr><tr class="dashattack"><td>Dash attack</td><td>s</td><td>a</td><td>e</td></tr><tr class="ftilt"><td>Forward tilt</td><td>s</td><td>a</td><td>e</td></tr><tr class="utilt"><td>Up tilt</td><td>s</td><td>a</td><td>e</td></tr><tr class="dtilt"><td>Down tilt</td><td>s</td><td>a</td><td>e</td></tr><tr class="fsmash"><td>Forward smash</td><td>s</td><td>a</td><td>e</td></tr> <tr class="usmash"> <td>Up smash</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="dsmash"> <td>Down smash</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="nair"> <td>Neutral air</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="fair"> <td>Forward air</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="bair"> <td>Back air</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="uair"> <td>Up air</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="dair"> <td>Down air</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="grab"> <td>Grab</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="dashgrab"> <td>Dash grab</td><td>s</td><td>a</td><td>e</td> </tr> <tr class="average"> <td>Average</td><td>s</td><td>a</td><td>e</td> </tr> </table>';
var falcoTable = table;
var cFalconTable = "no data";
var marthTable = "no data";
var bowserTable = "no data";

var moves = ["jab", "dashattack", "utilt", "dtilt", "fsmash", "usmash", "dsmash", "nair", "fair", "bair", "uair", "dair", "grab", "dashgrab", "average"];

var foxStartup = [2, 4, 5, 5, 7, 12, 7, 6, 4, 6, 4, 8, 5, 7, 12, 5.77];
var foxActive = [2, 14, 4, 7, 3, 11, 11, 5, 28, 15, 16, 6, 14, 2, 2, 10.46];
var foxEndlag = [12, 18, 18, 11, 18, 17, 24, 35, 10, 7, 18, 21, 25, 22, 27];
var foxData = {startup: foxStartup, active: foxActive, endlag: foxEndlag};
var movesAmount = foxStartup.length;

function setData(char) {
  var moveNum = 0;
  for (moveNum = 0; moveNum < movesAmount; moveNum++) {
    document.getElementById(moves[moveNum]).innerHTML = "<td>" + moves[moveNum] + "</td><td>" + char.startup[moveNum] + "</td><td>" + char.active[moveNum] + "</td><td>" + char.endlag[moveNum] + "</td>";
  }
}

function charbutton(char) {
  switch (char) {
    case "buttonfox":
      setData(foxData);
      break;
    case "buttonfalco":
      document.getElementById("datatable").innerHTML = falcoTable;
      break;
    case "buttoncfalcon":
      document.getElementById("datatable").innerHTML = cFalconTable;
      break;
    case "buttonmarth":
      document.getElementById("datatable").innerHTML = marthTable;
      break;
    case "buttonbowser":
      document.getElementById("datatable").innerHTML = bowserTable;
      break;
    default:
      document.getElementById("datatable").innerHTML = foxTable;
      break;
    }
}

document.getElementById("datatable").innerHTML = table;