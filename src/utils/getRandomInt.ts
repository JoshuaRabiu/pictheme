export const getRandomInt = (min: number, max: number): number => {       
  // Create byte array and fill with 1 random number
  const byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;
  const maxRange = 256;
  if (byteArray[0] >= Math.floor(maxRange / range) * range){
      return getRandomInt(min, max);
  }
  return min + (byteArray[0] % range);
}