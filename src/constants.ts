export const data1 = [
]

export const data = [
  0,0,0,
  0,0,0,
  1,1,1,
  2,2,2,
  3,3,3,
  4,4,4,
  5,5,5,
  5,5,5,
  6,6,6,
  7,7,7,
  8,8,8,
  9,9,9,
]

const getRandomArray = (arr: number[]) => {
  // 从数组中挑选出一个元素
  for (var i = arr.length - 1; i > 0; i--) {
  // 从剩余元素中随机选择另一个元素
  var j = Math.floor(Math.random() * (i + 1));
  // 交换位置
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  }
  return arr;
}

export const getTwoArray = () => {
  const d = getRandomArray(data);
  const curData = [];
  for (let i = 0; i < 6; i++) {
    const c = d.slice(i, i + 6);
    curData.push(c)
  }
  return curData;
}