const comp = 'Replace me with something';
const r = /Replace (me) with (.*)/;
const result = comp.replace(r, (_, M, m) => {
  return `Replaced "${M}" with "${m}"`;
});

console.log(result);
// Output: "Replaced "me" with "something""
