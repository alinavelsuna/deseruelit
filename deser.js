const color = d3.scaleOrdinal()
  .domain(["a", "b", "c"])
  .range(["#4e79a7", "#f28e2c", "#e15759"]);

console.log(color("a")); // "#4e79a7"
console.log(color("b")); // "#f28e2c"
console.log(color("c")); // "#e15759"
console.log(color("d")); // null
