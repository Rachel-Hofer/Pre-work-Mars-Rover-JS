// Rover Object Goes Here
const rover = {
  name: "R1",
  x: 0,
  y: 0,
  direction: "N"
};

turnLeft = rover => {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
  }
};
console.log('default direction'+ rover.direction)
//N
turnLeft(rover)
console.log('rover direction after turning left'+ rover.direction)
//W
turnLeft(rover)
console.log('rover direction after turning left again'+ rover.direction)
//S
turnLeft(rover)
console.log('rover direction after turning left for a 3rd time'+ rover.direction)
//E

turnRight = rover => {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
  }
};
turnLeft(rover) //to start back at default direction
console.log('default direction'+ rover.direction)
//N
turnRight(rover)
console.log('rover direction after turning right'+ rover.direction)
//E
turnRight(rover)
console.log('rover direction after turning right again'+ rover.direction)
//S
turnRight(rover)
console.log('rover direction after turning right for a 3rd time'+ rover.direction)
//W

