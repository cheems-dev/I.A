import { XY } from "../types/XY.type";

export default function MinimoCuadrados(training_data: Array<XY>) {
  let [sum_x, sum_y, sum_xy, sum_xx] = [0, 0, 0, 0];
  let n = training_data.length;
  training_data.forEach(data => {
    const { x, y } = data;
    sum_x += x;
    sum_y += y;
    sum_xy += x * y;
    sum_xx += x * x;
  });
  // hallamos la pendiente
  let m = (sum_xy - (sum_x * sum_y) / n) /
    (sum_xx - (sum_x * sum_x) / n);
  // hallamos el intercepto

  let b = (sum_y / n) - m * (sum_x / n);

  return { m: +m.toFixed(4), b: +b.toFixed(4) };
}