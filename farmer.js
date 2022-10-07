// farmer exersize with yaers and harves of corn for these years
let y = 10;
let [u,v,w] = [4,5,6];
console.log(u);
console.log(v);
console.log(w);
console.log(y);

for (let i = 3; i<=y; i++) {
    [u,v,w] = [v,w,u+v+w]
    console.log(u,v,w,y)

}
console.log(w)

