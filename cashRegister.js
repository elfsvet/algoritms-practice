const MONEY_TABLE = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  }
  
  function checkCashRegister(price, cash, cid) {
  //   console.log(`${price},
  // ${cash}, 
  // ${cid}`)
    // store variable with amount of change due
    let changeDue = cash - price;
    // convert to cents <<Right Away>>
    let changeDueCents = changeDue * 100;
    // sum up all of the money in cents the cash drawer
    const cashForChange = cid.reduce((acc, moneySlot) => {
      return acc + moneySlot[1] * 100
    }, 0);
  
    // if money in cid is same as change due,
    // return {status: 'CLOSED', change:cid}
    if (changeDueCents === cashForChange) {
      return { status: 'CLOSED', change: cid }
    }
  
    // calculate how much change we can give based on slots in the cid
  
    // reverse the cid, create an array of slots based on adding up for each slot the amount of money we'll pay with that slot
    const changeInHand = cid.reverse().map(([billOrCoinName, valueInSlot]) => {
      const demomination = MONEY_TABLE[billOrCoinName];
      //convert to cents
      let valueInSlotCents = Math.round(valueInSlot * 100);
  
      // get the value of that slot's worth
      let totalCash = 0;
      // loop while: the amount of money in the slot is >0 and the value of the slot is smaller than amount of remaining change due
      while (valueInSlotCents > 0 && demomination <= changeDueCents) {
        // add one bill's worth to the total
        totalCash += demomination
        // substract that amount from the change due
        changeDueCents -= demomination
        // substract that amount from the amount available in that slot
        valueInSlotCents -= demomination
      }
      return [billOrCoinName, totalCash / 100]
  
    })//filter out all the coin bill types have 0 money
      .filter(([_, value]) => value > 0)
    // if there is still change due, we either don't have enough money in the cid, or our money types don't add up
    if (changeDueCents > 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] }
    }
  
  
    return { status: 'OPEN', change: changeInHand }
  
  }
  // two dimensional array
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  // checkCashRegister(19.5, 20, [["PENNY",0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

  /*
  const DENOMINATIONS = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  'ONE HUNDRED': 10000,
}
function checkCashRegister(price, cash, cid) {
  // how much change we should give back to customer in cents
  let changeInCents = (cash - price) * 100;
  // console.log(changeInCents);
  // console.log()
  // console.log()
  // console.log()
  let centsInCid = cid.reduce((acc, [, value]) => {
    return acc + value * 100;
  }, 0)
  // if we have the same amount of money in cash in drawer return the cash and closed the shop.
  if (centsInCid === changeInCents) {
    return { status: "CLOSED", change: cid }
  }


  const changeInHand = cid.reverse().map(([name, valueInSlot]) => {

    let total = 0;
    // look up the denomination
    const denomination = DENOMINATIONS[name];
    console.log(name, denomination)
    let valueCents = valueInSlot * 100
    // Loop: while the change due is worth more than the money type is worth, and while we still have money of that type in the drawer
    while (valueCents > 0 && denomination <= changeInCents) {
      total += denomination;
      changeInCents -= denomination;
      valueCents -= denomination;
      console.log({ name, total, changeInCents, valueCents })
    }
return [name,total/100]
  })
  .filter(([,value])=> value>0)

console.log(changeInHand)
if(changeInCents> 0) {
  return {status: 'INSUFFICIENT_FUNDS',change: []}
}
return {status:"OPEN", change: changeInHand}


}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  */