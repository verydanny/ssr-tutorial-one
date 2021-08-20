import { compose, map, filter } from 'rambda'

const container = document.getElementById('app')!
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const multiplyAndGetGreaterThanTwo = compose(
  map((x: number) => x * 2),
  filter(x => x > 2)
)

const result = multiplyAndGetGreaterThanTwo(arr)

container.innerHTML = `<pre>Hello: ${result}</pre>`
