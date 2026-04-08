function Flattening(arrays){
  let result = [];
  for (let subArray of arrays) {
    for (let value of subArray) {
      result.push(value);
    }
  }
  return result;
}
