const cheerio = require("cheerio");
const fetch = require("node-fetch");

fetch("http://sumo.or.jp/EnHonbashoMain/torikumi/1/15").then(async response => {
  const html = await response.text();
  const $ = cheerio.load(html);
  const mainSection = $(".mdSection1");

  const tournament = mainSection.find(".mdDate");
  const dateList = mainSection.find(".mdNav1");
  const divisons = mainSection.find(".mdNav2");
  const results = mainSection.find(".mdTable1");

  console.log(dateList);
});
