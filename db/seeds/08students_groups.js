/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('students_groups').del()
  await knex('students_groups').insert([
    {
      // id: "1",
      student_id: 1,
      group_id: 1
    },
    {
      // id: "2",
      student_id: 2,
      group_id: 1
    },
    {
      // id: "3",
      student_id: 3,
      group_id: 2
    },
    {
      // id: "4",
      student_id: 4,
      group_id: 3
    },
    {
      // id: "5",
      student_id: 5,
      group_id: 3
    },
    {
      // id: "6",
      student_id: 6,
      group_id: 3
    },
    {
      // id: "7",
      student_id: 7,
      group_id: 1
    },
    {
      // id: "8",
      student_id: 8,
      group_id: 2
    },
    {
      // id: "9",
      student_id: 9,
      group_id: 2
    },
    {
      // id: "10",
      student_id: 10,
      group_id: 2
    }
  ]);
};
