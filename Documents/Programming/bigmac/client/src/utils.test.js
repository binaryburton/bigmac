const { getTitles } = require("./utils");

const csv = "ma ke,model,year ";
const titles = ["make", "model", "year"];

test("properly gets titles from CSV", () => {
  expect(getTitles(csv)).toStrictEqual(titles);
});
