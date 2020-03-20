const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "server error finding projects"})
    })
})

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.getTasks(id)
    .then(tasks => {
        if(tasks.length) {
            res.status(200).json(tasks)
        } else {
            res.status(404).json({message: "couldn't find tasks for given project"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get tasks' });
    })
})

router.get('/tasks', (req, res) => {

    Projects.getAllTasks()
    .then(tasks => {
        if(tasks.length) {
            res.status(200).json(tasks)
        } else {
            res.status(404).json({message: "couldn't find tasks for given project"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get tasks' });
    })
})

router.get('/:id/resources', (req, res) => {
    const {id} = req.params;

    Projects.getResources(id)
    .then(resources => {
        if(resources.length) {
            res.status(200).json(resources)
        } else {
            res.status(404).json({message: "couldn't find resources for given project"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get resources' });
    })
})

router.get('/resources', (req, res) => {
    
    Projects.getAllResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "server error finding resources"})
    })
})

router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
})

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      console.log(err)  
      res.status(500).json({ message: 'Failed to create new project' });
    });
  })

  router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
    Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      console.log(err)  
      res.status(500).json({ message: 'Failed to create new task' });
    });
  })  

module.exports = router;