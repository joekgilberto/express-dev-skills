const skills = [
    { id: 1000001, skill: 'HTML', mastered: true },
    { id: 1000002, skill: 'CSS', mastered: true },
    { id: 1000003, skill: 'JavaScript', mastered: true },
    { id: 1000004, skill: 'Express', mastered: false },
    { id: 1000005, skill: 'Node.js', mastered: false }
];

module.exports = {
    getAll, //equivelent to getAll: getAll
    getOne,
    create,
    deleteOne,
    update: updateOne
};

function getAll() {
    return skills;
}

function getOne(id){
    id = Number(id)
    return skills.find((skill)=>skill.id === id)
}

function create(data){
    const newSkill = {...data};
    newSkill.mastered = data.mastered ? true : false;
    newSkill.id = Date.now() % 1000000;
    skills.push(newSkill)
}

function deleteOne(id){
    id = Number(id);
    const removedSkill = skills.findIndex((skill)=>skill.id===id)
    console.log(removedSkill)
    skills.splice(removedSkill,1)
}

function updateOne(id,data){
    let idx = skills.findIndex((skill)=> skill.id === id)
    console.log("IDX!!!!!",idx)
    if (!data.mastered){
        data.mastered = null;
    }
    let editedSkill = {...skills[idx], ...data}
    skills.splice(idx, 1, editedSkill)
}