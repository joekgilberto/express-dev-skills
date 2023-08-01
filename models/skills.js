const skills = [
    { id: 100001, skill: 'HTML', mastered: true },
    { id: 100002, skill: 'CSS', mastered: true },
    { id: 100003, skill: 'JavaScript', mastered: true },
    { id: 100004, skill: 'Express', mastered: false }
];

module.exports = {
    getAll, //equivelent to getAll: getAll
    getOne
};

function getAll() {
    return skills;
}

function getOne(id){
    id = Number(id)
    console.log('Looking for ', id)
    console.log('Found skill', skills.find((skill)=>skill.id === id))
    return skills.find((skill)=>skill.id === id)
}