const fetchData = async(data, url) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };

  let json_respon = await fetch(url, requestOptions)
  let res = await json_respon.json()
  return res
}

async function createDeposit(amount, balance, liquidation,op1,op2,op3,nonce) {
  let deposit = { amount, balance, liquidation,op1,op2,op3,nonce }
  
  const commitment1 = window.mimc2(deposit.amount, deposit.balance);
  const commitment2 = window.mimc2(commitment1,deposit.liquidation);
  const commitment3 = window.mimc2(commitment2,op1);
  const commitment4 = window.mimc2(commitment3,op2);
  const commitment5 = window.mimc2(commitment4,op3);
  const commitment6 = window.mimc2(commitment5,nonce);
  deposit.commitment = commitment6;
  
  //console.log(await deposit.time);
  return deposit;
}

async function deposit(amount, balance, liquidation,op1,op2,op3) {
  const _deposit = await createDeposit(amount, balance, liquidation,op1,op2,op3, Math.floor(Math.random() * 1000) + 1)
  console.log(amount, balance, liquidation, op1, op2, op3);
  _deposit.note  = `bcrefier-proof-${_deposit.amount}-${_deposit.balance}-${_deposit.liquidation}-${_deposit.op1}-${_deposit.op2}-${_deposit.op3}-${_deposit.nonce}`; 
   
  return _deposit
}


module.exports = {
  fetchData,
  deposit
}
