
exports.seed = async function(knex) {
  const resources = [
    { id: 1, resource_name: "money", resource_description: "Money helps me make purchases for things" },
    { id: 2, resource_name: "computer", resource_description: "Internet access is essential to researching and making purchases" }
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("resources").truncate();

  return knex("resources").insert(resources);
};