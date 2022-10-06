// get localstorage values
export const getLocalstorage = (name) => {
  const items = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  return items;
};

// Set local storage values
export const setLocalstorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};

// Remove local storage values
export const removeLocalstorage = (name) => {
  localStorage.removeItem(name);
};

// Find Index of specified item in the localStorage
export const indexOfCart = (items, obj) => {
  const carts = items.findIndex(
    (item) => item._id === obj._id && item.size === obj.size
  );

  return carts;
};

// Remove specific item from collection
export const removeCart = (items, obj) => {
  const removeItems = items.filter((item) => {
    return item.size !== obj.size && obj._id !== item._id;
  });

  return removeItems;
};

// export const removedCart = (items, obj) => {
//   const removedItems = items.filter(
//     (item) => item._id === obj._id && item.size === obj.size
//   );

//   return removedItems;
// };
