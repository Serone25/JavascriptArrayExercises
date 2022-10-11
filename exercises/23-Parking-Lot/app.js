

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking){
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  };
  
  for(var x = 0;x <= parking_state.length-1;x++){
    for(var y = 0;y <= parking_state.length-1;y++){
      state.totalSlots++;
      if(parking_state[x][y] == 2){
        state.availableSlots++;
      }else if(parking_state[x][y] == 1){
        state.occupiedSlots++;
      }
    }
  }
 return state;
}

console.log(getParkingLotState(parking_state))