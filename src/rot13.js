/**
 * Rotates a string's letters by 13 places. Two rotations returns the string to its original value.
 * @param {String} str - String to rotate
 */
export default function rot13(str) {
  let input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}
