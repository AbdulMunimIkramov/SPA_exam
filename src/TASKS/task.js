console.log('------------Task 1---------------')

const isPalindrome = (str)=>{
  const str2 = str.toLowerCase().replace(' ', '')

  if(str.toLowerCase().replace(' ','').split('').toString()==str2.split('').reverse().toString()){ 
    console.log(true)
  }else(
    console.log(false)
  )
}
// join

console.log(isPalindrome('racecar'))
console.log(isPalindrome('Race Car'))
console.log(isPalindrome('hello'))

console.log('------------Task 2---------------')

const findMin = (arr)=>{
  let num = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(num > arr[i]){
      num=arr[i]
    }
  }
  return num
}

const findMax = (arr)=>{
  let num = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(num < arr[i]){
      num=arr[i]
    }
  }
  return num
}

console.log(findMax([3,1,4,1,5,9,2,6,5,3,5]))
console.log(findMin([3,1,4,1,5,9,2,6,5,3,5]))

console.log('------------Task 3---------------')

const findDuplicates = (a) => {
  let duplicate = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j] && !duplicate.includes(a[j])) {
        duplicate = [...duplicate, a[j]];
      }
    }
  }
  return duplicate;
};

console.log(findDuplicates([3,1,4,1,5,9,2,6,5,3,5]));
console.log(findDuplicates(['a','b','a','g','s','g']));
