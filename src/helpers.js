function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items, item) {
  for (let idx in items) {
    if (items[idx] === item) {
      items.splice(idx, 1);
      return items;
    }
  }
  return undefined;
}

export { choice, remove };
