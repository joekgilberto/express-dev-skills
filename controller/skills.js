const Skill = require ('../models/skills.js')

module.exports= {
    index,
    show,
    new: addSkill,
    create,
    delete: deleteSkill
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

function addSkill(req, res){
    res.render('skills/new', {title: 'Add Skills'}) //create new.ejs
}

function create(req,res){
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}