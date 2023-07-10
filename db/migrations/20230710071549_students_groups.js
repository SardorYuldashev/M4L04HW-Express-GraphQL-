/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('students_groups', (table) => {
    table.increments('id');
    table.integer('student_id').references('id').inTable('students').onDelete('CASCADE');
    table.integer('group_id').references('id').inTable('groups').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('students_groups');
};
