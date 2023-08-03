const Skill = require ('../models/skills.js')

module.exports= {
    index,
    show,
    new: addSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req,res,next){
    const contextObject = {
        title: 'All of My Awesome Skills!',
        skills: Skill.getAll()
    };
    res.render('skills/index',contextObject);
};

function show(req,res,next){
    const id = req.params.id
    const contextObject = {
        title: 'One of My Skills',
        skill: Skill.getOne(id)
    };
    res.render('skills/show', contextObject);
};

function addSkill(req,res,next){
    res.render('skills/new', {title: 'Add Skills'}) //create new.ejs
}

function create(req,res,next){
    Skill.create(req.body)
    res.redirect('/skills')
}

function edit(req,res,next){
    const id = req.params.id
    const contextObject = {
        title: 'Edit Skills',
        skill: Skill.getOne(id)
    };
    res.render('skills/edit',contextObject)
}

function update(req,res,next){
    console.log('update controller is running')
    const id = Number(req.params.id);
    req.body.id = id;
    Skill.update(id, req.body)
    res.redirect(`/skills/${id}`);
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}