const structureTypes = [
    STRUCTURE_LINK,
    STRUCTURE_SPAWN,
    STRUCTURE_EXTENSION,
    STRUCTURE_TOWER,
];

module.exports = (creep, config) => {
    const sources = creep.pos.findClosestByPath(FIND_SOURCES);

    if (
        creep.store.getUsedCapacity([RESOURCE_ENERGY]) <
        creep.store.getCapacity([RESOURCE_ENERGY])
    ) {
        if (creep.harvest(sources) === ERR_NOT_IN_RANGE) {
            creep.moveTo(sources, {
                visualizePathStyle: { stroke: '#ffaa00' },
            });
        }
        return;
    }

    const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
            return (
                structureTypes.includes(structure.structureType) &&
                structure.store.getUsedCapacity([RESOURCE_ENERGY]) <
                    structure.store.getCapacity([RESOURCE_ENERGY])
            );
        },
    });

    if (
        creep.room.storage &&
        _.sum(creep.room.storage.store) < creep.room.storage.storeCapacity &&
        !target
    ) {
        if (
            creep.transfer(creep.room.storage, RESOURCE_ENERGY) ===
            ERR_NOT_IN_RANGE
        ) {
            creep.moveTo(creep.room.storage, {
                visualizePathStyle: { stroke: '#ffffff' },
            });
        }
    } else if (target) {
        if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            creep.moveTo(target, {
                visualizePathStyle: { stroke: '#ffffff' },
            });
        }
    } else {
        config.behaviors.idle(creep);
    }
};
