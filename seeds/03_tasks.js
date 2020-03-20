
exports.seed = async function(knex) {
  const tasks = [
    { id: 1, task_description: "Buy some wood", task_notes: "I need to buy some good wood from home depot", task_completed: false, project_id: 1 },
    { id: 2, task_description: "Buy some paint", task_notes: "I need to buy some good paint from home depot", task_completed: false, project_id: 1 },
    { id: 3, task_description: "Buy rosetta stone", task_notes: "I need to buy rosetta stone from amazon", task_completed: false, project_id: 2 },
    { id: 4, task_description: "Hire a spanish tutor", task_notes: "I need to find someone who can speak spanish and english to teach me spanish", task_completed: false, project_id: 2 },
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("tasks").truncate();

  return knex("tasks").insert(tasks);
};
