/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 * 
 * Criar um array com os CS`s disponiveis
 * Ordenar o arrays dos CS`s por score
 * Distribuir os customers entre os CS`s disponiveis
 * Criar um vetor com os CS`s e os customers sendo atendidos
 * Fazer a logica de para retornar o id do CS que atende mais clientes
 */
function customerSuccessBalancing(
  customerSuccess,
  customers,
  customerSuccessAway
) {
  const csAvailable = customerSuccess.filter(cs => { // Array contendo os CS disponiveis para atendimento
    return !customerSuccessAway.includes(cs.id);
  })
  csAvailable.sort((a,b) => { // Ordenaçao dos CS em ordem crescente de score
    return a.score - b.score;
  });

  const result =[]

  csAvailable.map(cs => { // Logica para distribuir os clientes entre os CS`s disponiveis
    customers.filter(c => {cs.score <= c.score
      result.push(setResult(cs.id, c.score))}
      )
  })

  
console.log(result);



  return 1;

}
function setResult (customerSuccess, customer){
  return {
    customerSuccess,
    customer
  }
}

const css = [
  { id: 1, score: 60 },
  { id: 2, score: 20 },
  { id: 3, score: 95 },
  { id: 4, score: 75 },
];
const customers = [
  { id: 1, score: 90 },
  { id: 2, score: 20 },
  { id: 3, score: 70 },
  { id: 4, score: 40 },
  { id: 5, score: 60 },
  { id: 6, score: 10 },
];
const csAway = [2,4];
customerSuccessBalancing(css, customers, csAway);

test("Scenario 1", () => {
  const css = [
    { id: 1, score: 60 },
    { id: 2, score: 20 },
    { id: 3, score: 95 },
    { id: 4, score: 75 },
  ];
  const customers = [
    { id: 1, score: 90 },
    { id: 2, score: 20 },
    { id: 3, score: 70 },
    { id: 4, score: 40 },
    { id: 5, score: 60 },
    { id: 6, score: 10 },
  ];
  const csAway = [2, 4];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(1);
});

function buildSizeEntities(size, score) {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push({ id: i + 1, score });
  }
  return result;
}

function mapEntities(arr) {
  return arr.map((item, index) => ({
    id: index + 1,
    score: item,
  }));
}

function arraySeq(count, startAt){
  return Array.apply(0, Array(count)).map((it, index) => index + startAt);
}

test("Scenario 2", () => {
  const css = mapEntities([11, 21, 31, 3, 4, 5]);
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60]);
  const csAway = [];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(0);
});

test("Scenario 3", () => {
  const testTimeoutInMs = 100;
  const testStartTime = new Date().getTime();

  const css = mapEntities(arraySeq(999, 1));
  const customers = buildSizeEntities(10000, 998);
  const csAway = [999];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(998);

  if (new Date().getTime() - testStartTime > testTimeoutInMs) {
    throw new Error(`Test took longer than ${testTimeoutInMs}ms!`);
  }
});

test("Scenario 4", () => {
  const css = mapEntities([1, 2, 3, 4, 5, 6]);
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60]);
  const csAway = [];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(0);
});

test("Scenario 5", () => {
  const css = mapEntities([100, 2, 3, 3, 4, 5]);
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60]);
  const csAway = [];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(1);
});

test("Scenario 6", () => {
  const css = mapEntities([100, 99, 88, 3, 4, 5]);
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60]);
  const csAway = [1, 3, 2];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(0);
});

test("Scenario 7", () => {
  const css = mapEntities([100, 99, 88, 3, 4, 5]);
  const customers = mapEntities([10, 10, 10, 20, 20, 30, 30, 30, 20, 60]);
  const csAway = [4, 5, 6];

  expect(customerSuccessBalancing(css, customers, csAway)).toEqual(3);
});
