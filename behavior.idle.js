module.exports = (creep) => {
    const idleFlag = _.filter(Game.flags, (flag) => flag.name === 'Idle')[0];
    creep.moveTo(idleFlag.pos);
};
