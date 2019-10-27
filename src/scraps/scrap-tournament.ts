import { fileURLToPath } from "url";

const datesNav: string = ".mdNav1";
const divisonsNav: string = ".mdNav2";
const tournamentNameNav: string = ".mdDate";

interface TournamentInfo {
  numDays: number;
  name: string;
  divisions: Division[];
}

interface Division {
  rank: string;
  name: string;
}

const getDays = (section: Cheerio): number => {
  return section.find(datesNav).children().length;
};

const getTournamentName = (section: Cheerio): string => {
  return section
    .find(tournamentNameNav)
    .text()
    .trim();
};

const getDivisons = (section: Cheerio): Division[] => {
  const divisionsSection: Cheerio = section.find(divisonsNav).children();

  return Array(divisionsSection.length)
    .fill(0)
    .map((val, index) => {
      const element: CheerioElement = divisionsSection[index];
      return {
        rank: element.attribs.class,
        name: element.children[0].children[0].data
      };
    });
};

export const getTournamentInfo = (section: Cheerio): TournamentInfo => {
  return {
    numDays: getDays(section),
    name: getTournamentName(section),
    divisions: getDivisons(section)
  };
};
