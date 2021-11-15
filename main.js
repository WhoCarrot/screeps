const { uuid } = require('utils');
const config = require('config');

console.log(JSON.stringify(Object.values(Game.creeps)));

module.exports.loop = () => {
    for (const [roleName, { amount, parts }] of Object.entries(config.roles)) {
        const creeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.role === roleName
        );
        if (creeps.length >= amount) continue;

        Game.spawns['Spawn1'].spawnCreep(parts, uuid(), {
            memory: { role: roleName },
        });
    }

    for (const creep of Object.values(Game.creeps)) {
        const roleConfig = config.roles[creep.memory.role];
        roleConfig.run(creep, roleConfig);
    }
};
