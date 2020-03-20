
exports.seed = async function(knex) {
  const projects = [
    { id: 1, project_name: "Build a house", project_description: "I need to build a nice house", project_completed: false },
    { id: 2, project_name: "Learn to speak spanish", project_description: "I want to become fluent in spanish in two weeks", project_completed: false }
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("projects").truncate();

  return knex("projects").insert(projects);
};

