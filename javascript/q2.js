const src = {
  id: 12,
  name: 'Mr Wiggles',
  values: [{x: 1, y: 3}, {x: 100, y: 2.1}, /*…*/],
  alternates: {id: 16, alias: 'Wig'},
  history: [ /*…*/]
}

const srcShallowCopy1 = {
  ...src, name: "Mrs Wiggles"
}


const srcShallowCopy2 = {
  ...src, values: [src.values[0], {...src.values[1], x: 200}, ...src.values.slice(2)]
}

