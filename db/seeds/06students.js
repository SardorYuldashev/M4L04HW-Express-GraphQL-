/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('students').del()
  await knex('students').insert([
    {
      // id: "1",
      first_name: "Sardor",
      last_name: "Yuldashev"
    },
    {
      // id: "2",
      first_name: "Imron",
      last_name: "Abdusalimov"
    },
    {
      // id: "3",
      first_name: "Sherzod",
      last_name: "Arziyev"
    },
    {
      // id: "4",
      first_name: "Aziz",
      last_name: "Nabiyev"
    },
    {
      // id: "5",
      first_name: "Bunyod",
      last_name: "Jo'rayev"
    },
    {
      // id: "6",
      first_name: "Bekzod",
      last_name: "To'ychiyev"
    },
    {
      // id: "7",
      first_name: "Akmal",
      last_name: "Usmonov"
    },
    {
      // id: "8",
      first_name: "Oybek",
      last_name: "Xasanov"
    },
    {
      // id: "9",
      first_name: "O'ral",
      last_name: "Xasanov"
    },
    {
      // id: "10",
      first_name: "Shoxruh",
      last_name: "Solmetov"
    }
  ]);
};
