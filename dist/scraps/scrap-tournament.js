"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datesNav = ".mdNav1";
const divisonsNav = ".mdNav2";
const tournamentNameNav = ".mdDate";
const getDays = (section) => {
    return section.find(datesNav).children().length;
};
const getTournamentName = (section) => {
    return section
        .find(tournamentNameNav)
        .text()
        .trim();
};
const getDivisons = (section) => {
    const divisionsSection = section.find(divisonsNav).children();
    return Array(divisionsSection.length)
        .fill(0)
        .map((val, index) => {
        const element = divisionsSection[index];
        return {
            rank: element.attribs.class,
            name: element.children[0].children[0].data
        };
    });
};
exports.getTournamentInfo = (section) => {
    return {
        numDays: getDays(section),
        name: getTournamentName(section),
        divisions: getDivisons(section)
    };
};
//# sourceMappingURL=scrap-tournament.js.map