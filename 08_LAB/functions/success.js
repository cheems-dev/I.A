export default function success(expected, actual) {
  let correct = 0,
    len = expected.length;
  for (let i in expected) if (expected[i] === actual[i]) correct++;
  return correct / len;
}
