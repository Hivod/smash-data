var table = '<table><tr id="tableheader"><th>Move</th><th>Startup</th><th>Active frames</th><th>End lag</th></tr><tr id="Jab"><td>Jab</td><td>s</td><td>a</td><td>e</td></tr><tr id="Dash attack"><td>Dash attack</td><td>s</td><td>a</td><td>e</td></tr><tr id="Forward tilt"><td>Forward tilt</td><td>s</td><td>a</td><td>e</td></tr><tr id="Up tilt"><td>Up tilt</td><td>s</td><td>a</td><td>e</td></tr><tr id="Down tilt"><td>Down tilt</td><td>s</td><td>a</td><td>e</td></tr><tr id="Forward smash"><td>Forward smash</td><td>s</td><td>a</td><td>e</td></tr> <tr id="Up smash"> <td>Up smash</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Down smash"> <td>Down smash</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Neutral air"> <td>Neutral air</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Forward air"> <td>Forward air</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Back air"> <td>Back air</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Up air"> <td>Up air</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Down air"> <td>Down air</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Grab"> <td>Grab</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Dash grab"> <td>Dash Grab</td><td>s</td><td>a</td><td>e</td> </tr> <tr id="Average"> <td>Average</td><td>s</td><td>a</td><td>e</td> </tr> </table>';
var moves = ["Jab", "Dash attack", "Forward tilt", "Up tilt", "Down tilt", "Forward smash", "Up smash", "Down smash", "Neutral air", "Forward air", "Back air", "Up air", "Down air", "Grab", "Dash grab", "Average"];

var foxData = {name: "Fox",
               startup: [2, 4, 5, 5, 7, 12, 7, 6, 4, 6, 4, 8, 5, 7, 12, 5.77],
               active: [2, 14, 4, 7, 3, 11, 11, 5, 28, 15, 16, 6, 14, 2, 2, 10.46],
               endlag: [12, 18, 18, 11, 18, 17, 24, 35, 10, 7, 18, 21, 25, 22, 27, 18.00]};
var falcoData = {name: "Falco",
                 startup: [2, 4, 5, 5, 7, 12, 7, 6, 4, 6, 4, 8, 5, 7, 12, 5.77],
                active: [2, 14, 5, 7, 3, 10, 9, 5, 28, 15, 16, 6, 20, 2, 2, 10.77],
                endlag: [12, 18, 17, 11, 18, 18, 28, 35, 10, 7, 18, 21, 25, 22, 27, 18.31]};
var cFalconData = {name: "C. Falcon",
                   startup: [3, 7, 9, 17, 10, 18, 21, 19, 7, 14, 10, 6, 16, 7, 11, 12.08],
                   active: [3, 10, 3, 5, 6, 4, 4, 8, 16, 17, 8, 8, 5, 2, 2, 7.46],
                   endlag: [16, 21, 18, 16, 19, 38, 11, 12, 15, 5, 11, 16, 17, 22, 28, 16.54]};
var marthData = {name: "Marth",
                 startup: [4, 12, 7, 6, 7, 10, 13, 5, 6, 4, 7, 5, 6, 7, 10, 7.08],
                 active: [4, 4, 4, 12, 3, 4, 4, 6, 9, 4, 5, 4, 4, 2, 2, 5.15],
                 endlag: [18, 24, 25, 19, 10, 34, 29, 39, 28, 22, 23, 37, 50, 22, 29, 27.54]};
var bowserData = {name: "Bowser",
                  startup: [7, 10, 12, 7, 14, 29, 16, 14, 8, 8, 9, 22, 14, 9, 10, 13.08],
                  active: [3, 8, 5, 4, 9, 5, 7, 13, 16, 4, 9, 4, 18, 2, 3, 8.08],
                  endlag: [15, 38, 20, 39, 29, 32, 22, 35, 24, 30, 32, 21, 38, 30, 38, 28.85]};
var movesAmount = foxData.startup.length;

function setData(char) {
  document.getElementById("charName").innerHTML = char.name;
  for(moveNum = 0; moveNum < movesAmount; moveNum++) {
    document.getElementById(moves[moveNum]).innerHTML = "<td>" + moves[moveNum] + "</td><td>" + char.startup[moveNum] + "</td><td>" + char.active[moveNum] + "</td><td>" + char.endlag[moveNum] + "</td>";
  }
}

function charbutton(char) {
  switch (char) {
    case "buttonfox":
      setData(foxData);
      break;
    case "buttonfalco":
      setData(falcoData);
      break;
    case "buttoncfalcon":
      setData(cFalconData);
      break;
    case "buttonmarth":
      setData(marthData);
      break;
    case "buttonbowser":
      setData(bowserData);
      break;
    default:
      document.getElementById("datatable").innerHTML = table;
      break;
    }
}

document.getElementById("datatable").innerHTML = table;
setData(foxData);