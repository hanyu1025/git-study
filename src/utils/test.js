// let n = parseInt(read_line())
// let list = gets().split(" ").map(val=>parseInt(val))
let n = 7
let list=[6, 4, 5, 3, 1, 2, 10]
let record = new Array(n)
let dist = new Array(n)
dist.fill(1)
let max = 0;
let index = n;
record.fill(-1)
let stack = [];
for(let i=n-1; i>=0; i--){
    if(stack.length===0){
        stack.push(i)
        continue
    }
    let t = stack[stack.length-1]
    while (list[t]<list[i]){
        stack.pop()
        if(stack.length===0) break
        t = stack[stack.length-1]
    }
    dist[i] = stack.length + 1
    if(dist[i]>=max){
        max = dist[i];
        index = i;
    }
    if(list[t]===list[i]) break
    stack.push(i)
}

console.log(index+1, max)