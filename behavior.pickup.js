const structureTypes = [STRUCTURE_LINK, STRUCTURE_SPAWN, STRUCTURE_EXTENSION];

module.exports = (creep) => {
    const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
            return (
                structureTypes.includes(structure.structureType) &&
                structure.store.getUsedCapacity([RESOURCE_ENERGY]) >
                    creep.store.getFreeCapacity([RESOURCE_ENERGY])
            );
        },
    });

    if (!target) return false;

    if (creep.withdraw(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE)
        creep.moveTo(target);
};
