export const transformArr = (value, endCut) => {
  if(!value) return;
  
  let newValue = value.toString().split('')

  let cutValue = newValue.slice(0, endCut)

  return cutValue.join('')
}