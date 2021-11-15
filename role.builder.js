module.exports = (creep, config) => {
    const constructionSites = _.sortBy(
        creep.room.find(FIND_CONSTRUCTION_SITES),
        (constructionSite) => constructionSite.progress
    );

    console.log(constructionSites);

    if (!constructionSites.length) return config.idle(creep);

    const target = creep.pos.findClosestByPath();
};
