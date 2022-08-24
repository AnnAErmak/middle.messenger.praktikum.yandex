// export function set(state, path, value) {
// console.log(state, path, value)
// }
function merge(lhs, rhs) {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p], rhs[p]);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}
function set(object, path, value) {
  // Код
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight((acc, key) => ({
    [key]: acc,
  }), value);
  return merge(object, result);
}

export default set;
