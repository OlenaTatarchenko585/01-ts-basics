function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numResult = getFirstElement<number>([1, 2, 3]);           // поверне тип number (1)
const strResult = getFirstElement<string>(["a", "b", "c"]);     // поверне тип string ("a")
const boolResult = getFirstElement<boolean>([true, false, true]); // поверне тип boolean (true)

console.log(numResult);
console.log(strResult);
console.log(boolResult);

