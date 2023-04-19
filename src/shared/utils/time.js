const toDayTime = (timestamp) => {
  var dateFormat = new Date(timestamp*1000)
  var month = dateFormat.getMonth() + 1
  return dateFormat.getDate()+"/"+month+"/"+dateFormat.getFullYear()
}

module.exports = {
  toDayTime
}