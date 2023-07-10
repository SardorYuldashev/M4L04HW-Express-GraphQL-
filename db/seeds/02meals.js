/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('meals').del()
  await knex('meals').insert([
    {
      // id: "1",
      name: "Hot-dog",
      price: 25000,
      quantity: 7,
      category_id: "1"
    },
    {
      // id: "2",
      name: "Sushi",
      price: 60000,
      quantity: 12,
      category_id: "2"
    },
    {
      // id: "3",
      name: "Vassabi",
      price: 9000,
      quantity: 5,
      category_id: "2"
    },
    {
      // id: "4",
      name: "Ramyon",
      price: 39000,
      quantity: 21,
      category_id: "2"
    },
    {
      // id: "5",
      name: "Osh",
      price: 50000,
      quantity: 128,
      category_id: "3"
    },
    {
      // id: "6",
      name: "Shaverma",
      price: 21000,
      quantity: 37,
      category_id: "1"
    },
    {
      // id: "7",
      name: "Somsa",
      price: 8000,
      quantity: 173,
      category_id: "3"
    },
    {
      // id: "8",
      name: "Gamburger",
      price: 18000,
      quantity: 25,
      category_id: "1"
    }
  ]);
};
