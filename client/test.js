const arr = [{ id: 1 }, { id: 3 }, { id: 5 }];

const indexOfObject = arr.findIndex((object) => {
  return object.id === 3;
});

console.log(indexOfObject); // 👉️ 1

arr.splice(indexOfObject, 1);

console.log(arr); // 👉️ [{id: 1}, {id: 5}]
