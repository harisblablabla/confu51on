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