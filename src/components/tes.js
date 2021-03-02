const mya = ['a','b','c']
const myb = ['d','e','f']
const aaa = {...mya}
const ooo = {K:false, b:false, c:false}
const K = true

const f = {...ooo,a}
console.log(ooo)
console.log(f)

const ofu = (a,b,c) => {
    console.log(a,b,c)
}
ofu({...ooo, s:true})
const con = mya.concat(myb)
const conb = [...mya,'...',...myb]

const sell = (a,b,c) => {
  console.log(`${a} - ${b} - ${c}`)
}

myb.pop()
myb.pop()
console.log(ooo)
// console.log(...this.state.touched)

sell(...myb,'L','terakhir')

//palindrom
let regex = /[^A-Za-z0-9]/g

const strNormal = str.toLowerCase().replace(regex,'')
const reverz = reverse(str).toLowerCase().replace(regex,'')

if(strNormal === reverz) return strNormal

let strlen = strNormal.length
for(let i=0;i<strlen;i++) {
  let partial = strNormal.substring(0,i) + strNormal.substring(i+1, strlen)
  let reversed = reverse(partial)
  if(partial === reversed) return i
}
return 'not possible'
}

function reverse(str) {
let newStr = ''
for(let i=str.length; i>=0; i--) {
  newStr += str.charAt(i)
}
return newStr
}