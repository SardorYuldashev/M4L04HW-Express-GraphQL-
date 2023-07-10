/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('groups').del()
  await knex('groups').insert([
    {
      // id: "1",
      name: "FullStack FS82"
    },
    {
      // id: "2",
      name: "FrontEnd F93"
    },
    {
      // id: "3",
      name: "BackEnd B101"
    }
  ]);
};
