export function first(arr, item, f) {
  console.log('first', arr, item);
  for (const i in arr) {
    console.log('item:', arr[i]);
    if (f(arr[i], item)) {
      console.log('match');
      return arr[i];
    } else {
      console.log('not match');
    }
  }
  return null;
}

export const equal = (a, b) => a === b;

export function contains(arr, item) {
  return first(arr, item, equal) !== null;
}
