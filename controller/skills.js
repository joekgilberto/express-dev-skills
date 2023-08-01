const Skill = require ('../models/skills.js')

module.exports= {
    index,
    getOne: show
}

function index(req,res){
    const contextObject = {
        title: 'All of My Awesome Skills!',
        skills: Skill.getAll()
    };
    res.render('skills/index',contextObject);
};

function show(req,res){
    const id = req.params.id
    const contextObject = {
        title: 'One of My Skills',
        skill: Skill.getOne(id)
    };
    res.render('skills/show', contextObject);
};