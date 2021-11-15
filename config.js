module.exports = {
    roles: {
        harvester: {
            amount: 8,
            parts: [WORK, CARRY, MOVE],
            run: require('role.harvester'),
            behaviors: {
                idle: require('behavior.idle'),
            },
        },
        upgrader: {
            amount: 4,
            parts: [WORK, CARRY, MOVE],
            run: require('role.upgrader'),
            behaviors: {
                idle: require('behavior.idle'),
                pickup: require('behavior.pickup'),
            },
        },
    },
};
