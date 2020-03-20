
exports.seed = async function(knex) {
  const resources_projects = [
    { id: 1, resource_id: 1, project_id: 1},
    { id: 2, resource_id: 1, project_id: 2},
    { id: 3, resource_id: 2, project_id: 2},
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("resources_projects").truncate();

  return knex("resources_projects").insert(resources_projects);
};
