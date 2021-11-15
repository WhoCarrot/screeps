module.exports = (creep, config) => {
    if (!creep.room.controller) return;

    if (
        creep.store.getFreeCapacity([RESOURCE_ENERGY]) ===
        creep.store.getCapacity([RESOURCE_ENERGY])
    )
        return config.behaviors.pickup(creep);

    if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
};
