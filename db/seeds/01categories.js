/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('categories').del()
  await knex('categories').insert([
    {
      // id: "1",
      name: "Fast-food"
    },
    {
      // id: "2",
      name: "Asian cuisine"
    },
    {
      // id: "3",
      name: "Uzbek cuisine"
    }
  ]);
};
