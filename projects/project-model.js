const db = require("../data/db-config");

module.exports = {
    getProjects,
    getTasks,
    getAllTasks,
    getResources,
    getAllResources,
    addResource,
    addProject,
    addTask

    
}

function getProjects() {
    return db("projects")
};

function getTasks(project_id) {
    return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("p.project_name", "p.project_description","t.task_description", "t.task_notes")
    .where("project_id", project_id)
}

function getAllTasks() {
    return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("p.project_name", "p.project_description","t.task_description", "t.task_notes")
}

function getResources(project_id) {
    return db("resources_projects as rp")
    .join("projects as p", "rp.project_id", "p.id")
    .join("resources as r", "rp.resource_id", "r.id")
    .select("r.resource_name", "r.resource_description")
    .where("project_id", project_id)
}

function getAllResources() {
    return db("resources")
};


function addResource(resource) {
    return db("resources")
    .insert(resource, "id")
};

function addProject(project) {
    return db("projects")
    .insert(project, "id")
};

function addTask(task) {
    return db("tasks")
    .insert(task, "id")
};


