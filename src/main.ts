import cheerio from "cheerio";
import fetch from "node-fetch";
import { getDays } from "./scraps";

async function bootstrap() {
  const response = await fetch(
    "http://sumo.or.jp/EnHonbashoMain/torikumi/1/15"
  );
  const html = await response.text();
  const $ = cheerio.load(html);
  const mainSection = $(".mdSection1");

  const days = getDays(mainSection);

  // const tournament = mainSection.find(".mdDate");
  // const dateList = mainSection.find(".mdNav1");
  // const divisons = mainSection.find(".mdNav2");

  // const results = mainSection.find(".mdTable1");
}

bootstrap();
