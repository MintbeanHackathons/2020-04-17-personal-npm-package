module.exports.makeArrayLowercase = stringArray => {
  const lowered = stringArray.map(item=>item.toLowerCase())  
  return lowered
}