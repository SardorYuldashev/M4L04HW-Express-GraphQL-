/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('meals', (table) => {
    table.increments('id');
    table.string('name').notNullable().unique();
    table.decimal('price', 12, 2).notNullable();
    table.integer('quantity').notNullable();
    table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('meals');
};
