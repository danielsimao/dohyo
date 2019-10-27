"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const node_fetch_1 = __importDefault(require("node-fetch"));
node_fetch_1.default("http://sumo.or.jp/EnHonbashoMain/torikumi/1/15").then((response) => __awaiter(void 0, void 0, void 0, function* () {
    const html = yield response.text();
    const $ = cheerio_1.default.load(html);
    const mainSection = $(".mdSection1");
    const tournament = mainSection.find(".mdDate");
    const dateList = mainSection.find(".mdNav1");
    const divisons = mainSection.find(".mdNav2");
    const results = mainSection.find(".mdTable1");
    console.log(dateList);
}));
//# sourceMappingURL=main.js.map