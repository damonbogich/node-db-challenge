exports.up = function(knex) {
    return knex.schema 
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
        .notNullable();
        tbl.string('project_description', 256);
        tbl.boolean('project_completed')
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
            .notNullable();
        tbl.string('resource_description', 256)
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description', 128)
        .notNullable();
        tbl.string('task_notes', 128);
        tbl.boolean('task_completed')
        .defaultTo(false);
        tbl.integer('project_id')  
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resources_projects', tbl => {
        tbl.increments();
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE') 
        tbl.integer('project_id')    
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE') 
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources_projects");
    };
