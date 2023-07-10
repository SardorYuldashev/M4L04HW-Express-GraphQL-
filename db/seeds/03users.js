/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      // id: "1",
      name: "Sardorbek"
    },
    {
      // id: "2",
      name: "Imron"
    },
  ]);
};
