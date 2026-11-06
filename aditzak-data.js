const ORIGINAL_INDICATIBOA = (() => {
  const SOL_NOR = {
    "NI":    { orain: "naiz",   lehen: "nintzen" },
    "ZU":    { orain: "zara",   lehen: "zinen" },
    "HURA":  { orain: "da",     lehen: "zen" },
    "GU":    { orain: "gara",   lehen: "ginen" },
    "ZUEK":  { orain: "zarete", lehen: "zineten" },
    "HAIEK": { orain: "dira",   lehen: "ziren" }
  };
  const SOL_NOR_NORI_HURA = {
    "HURA-NIRI":  { orain: "zait",   lehen: "zitzaidan" },
    "HURA-ZURI":  { orain: "zaizu",  lehen: "zitzaizun" },
    "HURA-HARI":  { orain: "zaio",   lehen: "zitzaion" },
    "HURA-GURI":  { orain: "zaigu",  lehen: "zitzaigun" },
    "HURA-ZUEI":  { orain: "zaizue", lehen: "zitzaizuen" },
    "HURA-HAIEI": { orain: "zaie",   lehen: "zitzaien" }
  };
  const SOL_NOR_NORI_HAIEK = {
    "HAIEK-NIRI":  { orain: "zaizkit",   lehen: "zitzaizkidan" },
    "HAIEK-ZURI":  { orain: "zaizkizu",  lehen: "zitzaizkizun" },
    "HAIEK-HARI":  { orain: "zaizkio",   lehen: "zitzaizkion" },
    "HAIEK-GURI":  { orain: "zaizkigu",  lehen: "zitzaizkigun" },
    "HAIEK-ZUEI":  { orain: "zaizkizue", lehen: "zitzaizkizuen" },
    "HAIEK-HAIEI": { orain: "zaizkie",   lehen: "zitzaizkien" }
  };
  const SOL_NOR_NORK = {
    "NIK-HURA":  { orain: "dut",       lehen: "nuen" },
    "NIK-ZU":    { orain: "zaitut",    lehen: "zintudan" },
    "NIK-ZUEK":  { orain: "zaituztet", lehen: "zintuztedan" },
    "NIK-HAIEK": { orain: "ditut",     lehen: "nituen" },

    "HARK-NI":    { orain: "nau",       lehen: "ninduen" },
    "HARK-HURA":  { orain: "du",        lehen: "zuen" },
    "HARK-GU":    { orain: "gaitu",     lehen: "gintuen" },
    "HARK-ZU":    { orain: "zaitu",     lehen: "zintuen" },
    "HARK-ZUEK":  { orain: "zaituzte",  lehen: "zintuzten" },
    "HARK-HAIEK": { orain: "ditu",      lehen: "zituen" },

    "GUK-HURA":  { orain: "dugu",       lehen: "genuen" },
    "GUK-ZU":    { orain: "zaitugu",    lehen: "zintugun" },
    "GUK-ZUEK":  { orain: "zaituztegu", lehen: "zintuztegun" },
    "GUK-HAIEK": { orain: "ditugu",     lehen: "genituen" },

    "ZUK-NI":    { orain: "nauzu",     lehen: "ninduzun" },
    "ZUK-HURA":  { orain: "duzu",      lehen: "zenuen" },
    "ZUK-GU":    { orain: "gaituzu",   lehen: "gintuzun" },
    "ZUK-HAIEK": { orain: "dituzu",    lehen: "zenituen" },

    "ZUEK-NI":   { orain: "nauzue",    lehen: "ninduzuen" },
    "ZUEK-HURA": { orain: "duzue",     lehen: "zenuten" },
    "ZUEK-GU":   { orain: "gaituzue",  lehen: "gintuzuen" },
    "ZUEK-HAIEK":{ orain: "dituzue",   lehen: "zenituzten" },

    "HAIEK-NI":    { orain: "naute",      lehen: "ninduten" },
    "HAIEK-HURA":  { orain: "dute",       lehen: "zuten" },
    "HAIEK-GU":    { orain: "gaituzte",   lehen: "gintuzten" },
    "HAIEK-ZU":    { orain: "zaituzte",   lehen: "zintuzten" },
    "HAIEK-ZUEK":  { orain: "zaituztete", lehen: "zintuzteten" },
    "HAIEK-HAIEK": { orain: "dituzte",    lehen: "zituzten" }
  };
  const SOL_NOR_NORI_NORK = {
    "NIK-HARI-HURA":   { orain: "diot",   lehen: "nion" },
    "NIK-ZURI-HURA":   { orain: "dizut",  lehen: "nizun" },
    "NIK-ZUEI-HURA":   { orain: "dizuet", lehen: "nizuen" },
    "NIK-HAIEI-HURA":  { orain: "diet",   lehen: "nien" },
    "NIK-HARI-HAIEK":  { orain: "dizkiot",   lehen: "nizkion" },
    "NIK-ZURI-HAIEK":  { orain: "dizkizut",  lehen: "nizkizun" },
    "NIK-ZUEI-HAIEK":  { orain: "dizkizuet", lehen: "nizkizuen" },
    "NIK-HAIEI-HAIEK": { orain: "dizkiet",   lehen: "nizkien" },

    "HARK-NIRI-HURA":  { orain: "dit",   lehen: "zidan" },
    "HARK-HARI-HURA":  { orain: "dio",   lehen: "zion" },
    "HARK-GURI-HURA":  { orain: "digu",  lehen: "zigun" },
    "HARK-ZURI-HURA":  { orain: "dizu",  lehen: "zizun" },
    "HARK-ZUEI-HURA":  { orain: "dizue", lehen: "zizuen" },
    "HARK-HAIEI-HURA": { orain: "die",   lehen: "zien" },
    "HARK-NIRI-HAIEK":  { orain: "dizkit",   lehen: "zizkidan" },
    "HARK-HARI-HAIEK":  { orain: "dizkio",   lehen: "zizkion" },
    "HARK-GURI-HAIEK":  { orain: "dizkigu",  lehen: "zizkigun" },
    "HARK-ZURI-HAIEK":  { orain: "dizkizu",  lehen: "zizkizun" },
    "HARK-ZUEI-HAIEK":  { orain: "dizkizue", lehen: "zizkizuen" },
    "HARK-HAIEI-HAIEK": { orain: "dizkie",   lehen: "zizkien" },

    "GUK-HARI-HURA":   { orain: "diogu",   lehen: "genion" },
    "GUK-ZURI-HURA":   { orain: "dizugu",  lehen: "genizun" },
    "GUK-ZUEI-HURA":   { orain: "dizuegu", lehen: "genizuen" },
    "GUK-HAIEI-HURA":  { orain: "diegu",   lehen: "genien" },
    "GUK-HARI-HAIEK":  { orain: "dizkiogu",   lehen: "genizkion" },
    "GUK-ZURI-HAIEK":  { orain: "dizkizugu",  lehen: "genizkizun" },
    "GUK-ZUEI-HAIEK":  { orain: "dizkizuegu", lehen: "genizkizuen" },
    "GUK-HAIEI-HAIEK": { orain: "dizkiegu",   lehen: "genizkien" },

    "ZUK-NIRI-HURA":   { orain: "didazu",  lehen: "zenidan" },
    "ZUK-HARI-HURA":   { orain: "diozu",   lehen: "zenion" },
    "ZUK-GURI-HURA":   { orain: "diguzu",  lehen: "zenigun" },
    "ZUK-HAIEI-HURA":  { orain: "diezu",   lehen: "zenien" },
    "ZUK-NIRI-HAIEK":   { orain: "dizkidazu",  lehen: "zenizkidan" },
    "ZUK-HARI-HAIEK":   { orain: "dizkiozu",   lehen: "zenizkion" },
    "ZUK-GURI-HAIEK":   { orain: "dizkiguzu",  lehen: "zenizkigun" },
    "ZUK-HAIEI-HAIEK":  { orain: "dizkiezu",   lehen: "zenizkien" },

    "ZUEK-NIRI-HURA":  { orain: "didazue", lehen: "zenidaten" },
    "ZUEK-HARI-HURA":  { orain: "diozue",  lehen: "zenioten" },
    "ZUEK-GURI-HURA":  { orain: "diguzue", lehen: "zeniguten" },
    "ZUEK-HAIEI-HURA": { orain: "diezue",  lehen: "zenieten" },
    "ZUEK-NIRI-HAIEK":  { orain: "dizkidazue", lehen: "zenizkidaten" },
    "ZUEK-HARI-HAIEK":  { orain: "dizkiozue",  lehen: "zenizkioten" },
    "ZUEK-GURI-HAIEK":  { orain: "dizkiguzue", lehen: "zenizkiguten" },
    "ZUEK-HAIEI-HAIEK": { orain: "dizkiezue",  lehen: "zenizkieten" },

    "HAIEK-NIRI-HURA":  { orain: "didate",  lehen: "zidaten" },
    "HAIEK-HARI-HURA":  { orain: "diote",   lehen: "zioten" },
    "HAIEK-GURI-HURA":  { orain: "digute",  lehen: "ziguten" },
    "HAIEK-ZURI-HURA":  { orain: "dizute",  lehen: "zizuten" },
    "HAIEK-ZUEI-HURA":  { orain: "dizuete", lehen: "zizueten" },
    "HAIEK-HAIEI-HURA": { orain: "diete",   lehen: "zieten" },
    "HAIEK-NIRI-HAIEK":  { orain: "dizkidate",  lehen: "zizkidaten" },
    "HAIEK-HARI-HAIEK":  { orain: "dizkiote",   lehen: "zizkioten" },
    "HAIEK-GURI-HAIEK":  { orain: "dizkigute",  lehen: "zizkiguten" },
    "HAIEK-ZURI-HAIEK":  { orain: "dizkizute",  lehen: "zizkizuten" },
    "HAIEK-ZUEI-HAIEK":  { orain: "dizkizuete", lehen: "zizkizueten" },
    "HAIEK-HAIEI-HAIEK": { orain: "dizkiete",   lehen: "zizkieten" }
  };
return {SOL_NOR,SOL_NOR_NORI_HURA,SOL_NOR_NORI_HAIEK,SOL_NOR_NORK,SOL_NOR_NORI_NORK};})();
const ORIGINAL_BALDINTZA = (() => {
  const SOL_NOR = {
    "NI":   { orain:"naiz",   lehen:"nintzen", baldintza:"banintz",   hipotetikoa:"nintzateke",  irreala:"nintzatekeen" },
    "ZU":   { orain:"zara",   lehen:"zinen",   baldintza:"bazina",    hipotetikoa:"zinateke",    irreala:"zinatekeen" },
    "HURA": { orain:"da",     lehen:"zen",     baldintza:"balitz",    hipotetikoa:"litzateke",   irreala:"Zatekeen" },
    "GU":   { orain:"gara",   lehen:"ginen",   baldintza:"bagina",    hipotetikoa:"ginateke",    irreala:"ginatekeen" },
    "ZUEK": { orain:"zarete", lehen:"zineten", baldintza:"bazinete",  hipotetikoa:"zinatekete",  irreala:"zinateketen" },
    "HAIEK":{ orain:"dira",   lehen:"ziren",   baldintza:"balira",    hipotetikoa:"lirateke",    irreala:"Ziratekeen" }
  };
  const SOL_NOR_NORI_HURA = {
    "HURA-NIRI":  { orain:"zait",   lehen:"zitzaidan",  baldintza:"Balitzait",   hipotetikoa:"Litzaidake",   irreala:"zitzaidakeen" },
    "HURA-ZURI":  { orain:"zaizu",  lehen:"zitzaizun",  baldintza:"Balitzaizu",  hipotetikoa:"Litzaizuke",   irreala:"zitzaizukeen" },
    "HURA-HARI":  { orain:"zaio",   lehen:"zitzaion",   baldintza:"Balitzaio",   hipotetikoa:"Litzaioke",    irreala:"Zitzaiokeen" },
    "HURA-GURI":  { orain:"zaigu",  lehen:"zitzaigun",  baldintza:"Balitzaigu",  hipotetikoa:"Litzaiguke",   irreala:"zitzaigukeen" },
    "HURA-ZUEI":  { orain:"zaizue", lehen:"zitzaizuen", baldintza:"Balitzaizue", hipotetikoa:"Litzaizueke",  irreala:"zitzaizuekeen" },
    "HURA-HAIEI": { orain:"zaie",   lehen:"zitzaien",   baldintza:"Balitzaie",   hipotetikoa:"Litzaieke",    irreala:"zitzaiekeen" }
  };
  const SOL_NOR_NORI_HAIEK = {
    "HAIEK-NIRI":  { orain:"zaizkit",   lehen:"zitzaizkidan",  baldintza:"Balitzaizkit",   hipotetikoa:"Litzaizkidake",   irreala:"zitzaizkidakeen" },
    "HAIEK-ZURI":  { orain:"zaizkizu",  lehen:"zitzaizkizun",  baldintza:"Balitzaizkizu",  hipotetikoa:"Litzazkizuke",     irreala:"zitzazkizukeen" },
    "HAIEK-HARI":  { orain:"zaizkio",   lehen:"zitzaizkion",   baldintza:"Balitzaizkio",   hipotetikoa:"Litzazkioke",      irreala:"zitzaizkioekeen" },
    "HAIEK-GURI":  { orain:"zaizkigu",  lehen:"zitzaizkigun",  baldintza:"Balitzaizkigu",  hipotetikoa:"Litzazkiguke",     irreala:"zitzaizkigukeen" },
    "HAIEK-ZUEI":  { orain:"zaizkizue", lehen:"zitzaizkizuen", baldintza:"Balitzaizkizue", hipotetikoa:"Litzaizkizueke",   irreala:"zitzaizkizuekeen" },
    "HAIEK-HAIEI": { orain:"zaizkie",   lehen:"zitzaizkien",   baldintza:"Balitzaizkie",   hipotetikoa:"Litzaizkieke",     irreala:"zitzaizkiek een" }
  };
  const SOL_NOR_NORK = {
    "NIK-HURA":  { orain:"dut",       lehen:"nuen",        baldintza:"Banu",        hipotetikoa:"Nuke",         irreala:"Nukeen" },
    "NIK-ZU":    { orain:"zaitut",    lehen:"zintudan",    baldintza:"Bazintut",    hipotetikoa:"Zintuzket",    irreala:"zintuzkedan" },
    "NIK-ZUEK":  { orain:"zaituztet", lehen:"zintuztedan", baldintza:"Bazintuztet", hipotetikoa:"Zintuzketet",  irreala:"Zintuzketedan" },
    "NIK-HAIEK": { orain:"ditut",     lehen:"nituen",      baldintza:"Banitu",      hipotetikoa:"Nituzke",      irreala:"Nituzkeen" },

    "HARK-NI":    { orain:"nau",       lehen:"ninduen",  baldintza:"Banindu",     hipotetikoa:"Ninduke",     irreala:"Nindukeen" },
    "HARK-HURA":  { orain:"du",        lehen:"zuen",     baldintza:"Balu",        hipotetikoa:"Luke",        irreala:"Zukeen" },
    "HARK-GU":    { orain:"gaitu",     lehen:"gintuen",  baldintza:"Bagintu",     hipotetikoa:"Gintuzke",    irreala:"Gintuzkeen" },
    "HARK-ZU":    { orain:"zaitu",     lehen:"zintuen",  baldintza:"Bazintu",     hipotetikoa:"Zintuzke",    irreala:"Zintuzkeen" },
    "HARK-ZUEK":  { orain:"zaituzte",  lehen:"zintuzten",baldintza:"Bazintuzte",  hipotetikoa:"Zintuzkete",  irreala:"Zintuzketen" },
    "HARK-HAIEK": { orain:"ditu",      lehen:"zituen",   baldintza:"Balitu",      hipotetikoa:"Lituzke",     irreala:"Zituzkeen" },

    "GUK-HURA":  { orain:"dugu",       lehen:"genuen",     baldintza:"Bagenu",       hipotetikoa:"Genuke",       irreala:"Genukeen" },
    "GUK-ZU":    { orain:"zaitugu",    lehen:"zintugun",   baldintza:"Bazintugu",    hipotetikoa:"Zintuzkegu",   irreala:"Zintuzkegun" },
    "GUK-ZUEK":  { orain:"zaituztegu", lehen:"zintuztegun",baldintza:"Bazintuztegu", hipotetikoa:"Zintuzketegu", irreala:"Zintuzketegun" },
    "GUK-HAIEK": { orain:"ditugu",     lehen:"genituen",   baldintza:"Bagenitu",     hipotetikoa:"Genituzke",    irreala:"Genituzkeen" },

    "ZUK-NI":    { orain:"nauzu",     lehen:"ninduzun",  baldintza:"Baninduzu",  hipotetikoa:"Nindukezu",  irreala:"Nindukezun" },
    "ZUK-HURA":  { orain:"duzu",      lehen:"zenuen",    baldintza:"Bazenu",     hipotetikoa:"Zenuke",     irreala:"Zenukeen" },
    "ZUK-GU":    { orain:"gaituzu",   lehen:"gintuzun",  baldintza:"Bagintuzu",  hipotetikoa:"Gintuzkezu", irreala:"Gintuzkezun" },
    "ZUK-HAIEK": { orain:"dituzu",    lehen:"zenituen",  baldintza:"Bazenitu",   hipotetikoa:"Zenituzke",  irreala:"Zenituzkeen" },

    "ZUEK-NI":   { orain:"nauzue",    lehen:"ninduzuen", baldintza:"Baninduzue", hipotetikoa:"Nindukezue", irreala:"Nindukezuen" },
    "ZUEK-HURA": { orain:"duzue",     lehen:"zenuten",   baldintza:"Bazenute",   hipotetikoa:"Zenukete",   irreala:"Zenuketen" },
    "ZUEK-GU":   { orain:"gaituzue",  lehen:"gintuzuen", baldintza:"Bagintuzue", hipotetikoa:"Gintuzkezue",irreala:"Gintuzkezuen" },
    "ZUEK-HAIEK":{ orain:"dituzue",   lehen:"zenituzten",baldintza:"Bazenituzte",hipotetikoa:"Zenituzkete",irreala:"Zenituzketen" },

    "HAIEK-NI":    { orain:"naute",      lehen:"ninduten",  baldintza:"Banindute",   hipotetikoa:"Nindukete",    irreala:"Ninduketen" },
    "HAIEK-HURA":  { orain:"dute",       lehen:"zuten",     baldintza:"Balute",      hipotetikoa:"Lukete",       irreala:"Zuketen" },
    "HAIEK-GU":    { orain:"gaituzte",   lehen:"gintuzten", baldintza:"Bagintuzte",  hipotetikoa:"Gintuzkete",   irreala:"Gintuzketen" },
    "HAIEK-ZU":    { orain:"zaituzte",   lehen:"zintuzten", baldintza:"Bazintuzte",  hipotetikoa:"Zintuzkete",   irreala:"Zintuzketen" },
    "HAIEK-ZUEK":  { orain:"zaituztete", lehen:"zintuzteten",baldintza:"Bazintuztete",hipotetikoa:"Zintuzketete",irreala:"Zintuzketeten" },
    "HAIEK-HAIEK": { orain:"dituzte",    lehen:"zituzten",  baldintza:"Balituzte",   hipotetikoa:"Lituzkete",    irreala:"Zituzketen" }
  };
  const SOL_NOR_NORI_NORK = {
    "NIK-HARI-HURA":   { orain:"diot",   lehen:"nion",   baldintza:"Banio",   hipotetikoa:"Nioke",   irreala:"Niokeen" },
    "NIK-ZURI-HURA":   { orain:"dizut",  lehen:"nizun",  baldintza:"Banizu",  hipotetikoa:"Nizuke",  irreala:"Nizukeen" },
    "NIK-ZUEI-HURA":   { orain:"dizuet", lehen:"nizuen", baldintza:"Banizue", hipotetikoa:"Nizueke", irreala:"Nizuekeen" },
    "NIK-HAIEI-HURA":  { orain:"diet",   lehen:"nien",   baldintza:"Banie",   hipotetikoa:"Nieke",   irreala:"Niekeen" },

    "NIK-HARI-HAIEK":  { orain:"dizkiot",   lehen:"nizkion",   baldintza:"Banizkio",   hipotetikoa:"Nizkioke",   irreala:"Nizkiokeen" },
    "NIK-ZURI-HAIEK":  { orain:"dizkizut",  lehen:"nizkizun",  baldintza:"Banizkizu",  hipotetikoa:"Nizkizuke",  irreala:"Nizkizukeen" },
    "NIK-ZUEI-HAIEK":  { orain:"dizkizuet", lehen:"nizkizuen", baldintza:"Banizkizue", hipotetikoa:"Nizkizueke", irreala:"Nizkizuekeen" },
    "NIK-HAIEI-HAIEK": { orain:"dizkiet",   lehen:"nizkien",   baldintza:"Banizkie",   hipotetikoa:"Nizkieke",   irreala:"Nizkiekeen" },

    "HARK-NIRI-HURA":  { orain:"dit",   lehen:"zidan",  baldintza:"Balit",   hipotetikoa:"Lidake",  irreala:"Zidakeen" },
    "HARK-HARI-HURA":  { orain:"dio",   lehen:"zion",   baldintza:"Balio",   hipotetikoa:"Lioke",   irreala:"Ziokeen" },
    "HARK-GURI-HURA":  { orain:"digu",  lehen:"zigun",  baldintza:"Baligu",  hipotetikoa:"Liguke",  irreala:"Zigukeen" },
    "HARK-ZURI-HURA":  { orain:"dizu",  lehen:"zizun",  baldintza:"Balizu",  hipotetikoa:"Lizuke",  irreala:"Zizukeen" },
    "HARK-ZUEI-HURA":  { orain:"dizue", lehen:"zizuen", baldintza:"Balizue", hipotetikoa:"Lizueke", irreala:"Zizuekeen" },
    "HARK-HAIEI-HURA": { orain:"die",   lehen:"zien",   baldintza:"Balie",   hipotetikoa:"Lieke",   irreala:"Ziekeen" },

    "HARK-NIRI-HAIEK":  { orain:"dizkit",   lehen:"zizkidan",  baldintza:"Balizkit",   hipotetikoa:"Lizkidake",  irreala:"Zizkidakeen" },
    "HARK-HARI-HAIEK":  { orain:"dizkio",   lehen:"zizkion",   baldintza:"Balizkio",   hipotetikoa:"Lizkioke",   irreala:"Zizkiokeen" },
    "HARK-GURI-HAIEK":  { orain:"dizkigu",  lehen:"zizkigun",  baldintza:"Balizkigu",  hipotetikoa:"Lizkiguke",  irreala:"Zizkigukeeen" },
    "HARK-ZURI-HAIEK":  { orain:"dizkizu",  lehen:"zizkizun",  baldintza:"Balizkizu",  hipotetikoa:"Lizkizuke",  irreala:"Zizkizukeen" },
    "HARK-ZUEI-HAIEK":  { orain:"dizkizue", lehen:"zizkizuen", baldintza:"Balizkizue", hipotetikoa:"Lizkizueke", irreala:"Zizkizuekeen" },
    "HARK-HAIEI-HAIEK": { orain:"dizkie",   lehen:"zizkien",   baldintza:"Balizkie",   hipotetikoa:"Lizkieke",   irreala:"Zizkiekeen" },

    "GUK-HARI-HURA":   { orain:"diogu",   lehen:"genion",  baldintza:"Bagenio",   hipotetikoa:"Genioke",   irreala:"Geniokeen" },
    "GUK-ZURI-HURA":   { orain:"dizugu",  lehen:"genizun", baldintza:"Bagenizu",  hipotetikoa:"Genizuke",  irreala:"Genizukeen" },
    "GUK-ZUEI-HURA":   { orain:"dizuegu", lehen:"genizuen",baldintza:"Bagenizue", hipotetikoa:"Genizueke", irreala:"Genizuekeen" },
    "GUK-HAIEI-HURA":  { orain:"diegu",   lehen:"genien",  baldintza:"Bagenie",   hipotetikoa:"Genieke",   irreala:"Geniekeen" },

    "GUK-HARI-HAIEK":  { orain:"dizkiogu",   lehen:"genizkion",   baldintza:"Bagenizkio",   hipotetikoa:"Genizkioke",   irreala:"Genizkiokeen" },
    "GUK-ZURI-HAIEK":  { orain:"dizkizugu",  lehen:"genizkizun",  baldintza:"Bagenizkizu",  hipotetikoa:"Genizkizuke",  irreala:"Genizkizukeen" },
    "GUK-ZUEI-HAIEK":  { orain:"dizkizuegu", lehen:"genizkizuen", baldintza:"Bagenizkizue", hipotetikoa:"Genizkizueke", irreala:"Genizkizuekeen" },
    "GUK-HAIEI-HAIEK": { orain:"dizkiegu",   lehen:"genizkien",   baldintza:"Bagenizkie",   hipotetikoa:"Genizkieke",   irreala:"Genizkiekeen" },

    "ZUK-NIRI-HURA":   { orain:"didazu",  lehen:"zenidan", baldintza:"Bazenit",   hipotetikoa:"Zenidake",  irreala:"Zenidakeen" },
    "ZUK-HARI-HURA":   { orain:"diozu",   lehen:"zenion",  baldintza:"Bazenio",   hipotetikoa:"Zenioke",   irreala:"Zeniokeen" },
    "ZUK-GURI-HURA":   { orain:"diguzu",  lehen:"zenigun", baldintza:"Bazenigu",  hipotetikoa:"Zeniguke",  irreala:"Zenigukeen" },
    "ZUK-HAIEI-HURA":  { orain:"diezu",   lehen:"zenien",  baldintza:"Bazenie",   hipotetikoa:"Zenieke",   irreala:"Zeniekeen" },

    "ZUK-NIRI-HAIEK":   { orain:"dizkidazu",  lehen:"zenizkidan", baldintza:"Bazenizkit",   hipotetikoa:"Zenizkidake",  irreala:"Zenizkidakeen" },
    "ZUK-HARI-HAIEK":   { orain:"dizkiozu",   lehen:"zenizkion",  baldintza:"Bazenizkio",   hipotetikoa:"Zenizkioke",   irreala:"Zenizkiokeen" },
    "ZUK-GURI-HAIEK":   { orain:"dizkiguzu",  lehen:"zenizkigun",  baldintza:"Bazenizkigu",  hipotetikoa:"Zenizkiguke",  irreala:"Zenizkigukeen" },
    "ZUK-HAIEI-HAIEK":  { orain:"dizkiezu",   lehen:"zenizkien",   baldintza:"Bazenizkie",   hipotetikoa:"Zenizkieke",   irreala:"Zenizkiekeen" },

    "ZUEK-NIRI-HURA":  { orain:"didazue", lehen:"zenidaten", baldintza:"Bazenidate", hipotetikoa:"Zenidakete", irreala:"Zenidaketen" },
    "ZUEK-HARI-HURA":  { orain:"diozue",  lehen:"zenioten",  baldintza:"Bazeniote",  hipotetikoa:"Zeniokete",  irreala:"Zenioketen" },
    "ZUEK-GURI-HURA":  { orain:"diguzue", lehen:"zeniguten", baldintza:"Bazenigute", hipotetikoa:"Zenigukete", irreala:"Zeniguketen" },
    "ZUEK-HAIEI-HURA": { orain:"diezue",  lehen:"zenieten",  baldintza:"Bazeniete",  hipotetikoa:"Zeniekete",  irreala:"Zenieketen" },

    "ZUEK-NIRI-HAIEK":  { orain:"dizkidazue", lehen:"zenizkidaten", baldintza:"Bazenizkidate", hipotetikoa:"Zenizkidakete", irreala:"Zenizkidaketen" },
    "ZUEK-HARI-HAIEK":  { orain:"dizkiozue",  lehen:"zenizkioten",  baldintza:"Bazenizkiote",  hipotetikoa:"Zenizkiokete",  irreala:"Zenizkioketen" },
    "ZUEK-GURI-HAIEK":  { orain:"dizkiguzue", lehen:"zenizkiguten", baldintza:"Bazenizkigute", hipotetikoa:"Zenizkigukete", irreala:"Zenizkiguketen" },
    "ZUEK-HAIEI-HAIEK": { orain:"dizkiezue",  lehen:"zenizkieten",  baldintza:"Bazenizkiete",  hipotetikoa:"Zenizkiekete",  irreala:"Zenizkieketen" },

    "HAIEK-NIRI-HURA":  { orain:"didate",  lehen:"zidaten",  baldintza:"Balidate",  hipotetikoa:"Lidakete",  irreala:"Zidaketen" },
    "HAIEK-HARI-HURA":  { orain:"diote",   lehen:"zioten",   baldintza:"Baliote",   hipotetikoa:"Liokete",   irreala:"Zioketen" },
    "HAIEK-GURI-HURA":  { orain:"digute",  lehen:"ziguten",  baldintza:"Baligute",  hipotetikoa:"Ligukete",  irreala:"Ziguketen" },
    "HAIEK-ZURI-HURA":  { orain:"dizute",  lehen:"zizuten",  baldintza:"Balizute",  hipotetikoa:"Lizukete",  irreala:"Zizuketen" },
    "HAIEK-ZUEI-HURA":  { orain:"dizuete", lehen:"zizueten", baldintza:"Balizuete", hipotetikoa:"Lizuekete", irreala:"Zizueketen" },
    "HAIEK-HAIEI-HURA": { orain:"diete",   lehen:"zieten",   baldintza:"Baliete",   hipotetikoa:"Liekete",   irreala:"Zieketen" },

    "HAIEK-NIRI-HAIEK":  { orain:"dizkidate",  lehen:"zizkidaten",  baldintza:"Balizkidate",  hipotetikoa:"Lizkidakete",  irreala:"Zizkidaketen" },
    "HAIEK-HARI-HAIEK":  { orain:"dizkiote",   lehen:"zizkioten",   baldintza:"Balizkiote",   hipotetikoa:"Lizkiokete",   irreala:"Zizkioketen" },
    "HAIEK-GURI-HAIEK":  { orain:"dizkigute",  lehen:"zizkiguten",  baldintza:"Balizkigute",  hipotetikoa:"Lizkigukete",  irreala:"Zizkiguketen" },
    "HAIEK-ZURI-HAIEK":  { orain:"dizkizute",  lehen:"zizkizuten",  baldintza:"Balizkizute",  hipotetikoa:"Lizkizukete",  irreala:"Zizkizuketen" },
    "HAIEK-ZUEI-HAIEK":  { orain:"dizkizuete", lehen:"zizkizueten", baldintza:"Balizkizuete", hipotetikoa:"Lizkizuekete", irreala:"Zizkizueketen" },
    "HAIEK-HAIEI-HAIEK": { orain:"dizkiete",   lehen:"zizkieten",   baldintza:"Balizkiete",   hipotetikoa:"Lizkiekete",   irreala:"Zizkieketen" }
  };
return {SOL_NOR,SOL_NOR_NORI_HURA,SOL_NOR_NORI_HAIEK,SOL_NOR_NORK,SOL_NOR_NORI_NORK};})();
const ORIGINAL_AZTERKETA = (() => {
  const SOL_NOR = {
    "NI":   { orain:"naiz",   lehen:"nintzen", baldintza:"banintz",   hipotetikoa:"nintzateke",  irreala:"nintzatekeen" },
    "ZU":   { orain:"zara",   lehen:"zinen",   baldintza:"bazina",    hipotetikoa:"zinateke",    irreala:"zinatekeen" },
    "HURA": { orain:"da",     lehen:"zen",     baldintza:"balitz",    hipotetikoa:"litzateke",   irreala:"Zatekeen" },
    "GU":   { orain:"gara",   lehen:"ginen",   baldintza:"bagina",    hipotetikoa:"ginateke",    irreala:"ginatekeen" },
    "ZUEK": { orain:"zarete", lehen:"zineten", baldintza:"bazinete",  hipotetikoa:"zinatekete",  irreala:"zinateketen" },
    "HAIEK":{ orain:"dira",   lehen:"ziren",   baldintza:"balira",    hipotetikoa:"lirateke",    irreala:"Ziratekeen" }
  };
  const SOL_NOR_NORI_HURA = {
    "HURA-NIRI":  { orain:"zait",   lehen:"zitzaidan",  baldintza:"Balitzait",   hipotetikoa:"Litzaidake",   irreala:"zitzaidakeen" },
    "HURA-ZURI":  { orain:"zaizu",  lehen:"zitzaizun",  baldintza:"Balitzaizu",  hipotetikoa:"Litzaizuke",   irreala:"zitzaizukeen" },
    "HURA-HARI":  { orain:"zaio",   lehen:"zitzaion",   baldintza:"Balitzaio",   hipotetikoa:"Litzaioke",    irreala:"zitzaiokeen" },
    "HURA-GURI":  { orain:"zaigu",  lehen:"zitzaigun",  baldintza:"Balitzaigu",  hipotetikoa:"Litzaguke",    irreala:"zitzaigukeen" },
    "HURA-ZUEI":  { orain:"zaizue", lehen:"zitzaizuen", baldintza:"Balitzaizue", hipotetikoa:"Litzaizueke",  irreala:"zitzaizuekeen" },
    "HURA-HAIEI": { orain:"zaie",   lehen:"zitzaien",   baldintza:"Balitzaie",   hipotetikoa:"Litzaieke",    irreala:"zitzaiekeen" }
  };
  const SOL_NOR_NORI_HAIEK = {
    "HAIEK-NIRI":  { orain:"zaizkit",   lehen:"zitzaizkidan",  baldintza:"Balitzaizkit",   hipotetikoa:"Litzaizkidake",   irreala:"zitzaizkidakeen" },
    "HAIEK-ZURI":  { orain:"zaizkizu",  lehen:"zitzaizkizun",  baldintza:"Balitzaizkizu",  hipotetikoa:"Litzazkizuke",     irreala:"zitzazkizukeen" },
    "HAIEK-HARI":  { orain:"zaizkio",   lehen:"zitzaizkion",   baldintza:"Balitzaizkio",   hipotetikoa:"Litzazkioke",      irreala:"zitzaizkioekeen" },
    "HAIEK-GURI":  { orain:"zaizkigu",  lehen:"zitzaizkigun",  baldintza:"Balitzaizkigu",  hipotetikoa:"Litzazkiguke",     irreala:"zitzaizkigukeen" },
    "HAIEK-ZUEI":  { orain:"zaizkizue", lehen:"zitzaizkizuen", baldintza:"Balitzaizkizue", hipotetikoa:"Litzaizkizueke",   irreala:"zitzaizkizuekeen" },
    "HAIEK-HAIEI": { orain:"zaizkie",   lehen:"zitzaizkien",   baldintza:"Balitzaizkie",   hipotetikoa:"Litzaizkieke",     irreala:"zitzaizkiekeen" }
  };
  const SOL_NOR_NORK = {
    "NIK-HURA":  { orain:"dut",       lehen:"nuen",        baldintza:"Banu",        hipotetikoa:"Nuke",         irreala:"Nukeen" },
    "NIK-ZU":    { orain:"zaitut",    lehen:"zintudan",    baldintza:"Bazintut",    hipotetikoa:"Zintuzket",    irreala:"zintuzkedan" },
    "NIK-ZUEK":  { orain:"zaituztet", lehen:"zintuztedan", baldintza:"Bazintuztet", hipotetikoa:"Zintuzketet",  irreala:"Zintuzketedan" },
    "NIK-HAIEK": { orain:"ditut",     lehen:"nituen",      baldintza:"Banitu",      hipotetikoa:"Nituzke",      irreala:"Nituzkeen" },

    "HARK-NI":    { orain:"nau",       lehen:"ninduen",  baldintza:"Banindu",     hipotetikoa:"Ninduke",     irreala:"Nindukeen" },
    "HARK-HURA":  { orain:"du",        lehen:"zuen",     baldintza:"Balu",        hipotetikoa:"Luke",        irreala:"Zukeen" },
    "HARK-GU":    { orain:"gaitu",     lehen:"gintuen",  baldintza:"Bagintu",     hipotetikoa:"Gintuzke",    irreala:"Gintuzkeen" },
    "HARK-ZU":    { orain:"zaitu",     lehen:"zintuen",  baldintza:"Bazintu",     hipotetikoa:"Zintuzke",    irreala:"Zintuzkeen" },
    "HARK-ZUEK":  { orain:"zaituzte",  lehen:"zintuzten",baldintza:"Bazintuzte",  hipotetikoa:"Zintuzkete",  irreala:"Zintuzketen" },
    "HARK-HAIEK": { orain:"ditu",      lehen:"zituen",   baldintza:"Balitu",      hipotetikoa:"Lituzke",     irreala:"Zituzkeen" },

    "GUK-HURA":  { orain:"dugu",       lehen:"genuen",     baldintza:"Bagenu",       hipotetikoa:"Genuke",       irreala:"Genukeen" },
    "GUK-ZU":    { orain:"zaitugu",    lehen:"zintugun",   baldintza:"Bazintugu",    hipotetikoa:"Zintuzkegu",   irreala:"Zintuzkegun" },
    "GUK-ZUEK":  { orain:"zaituztegu", lehen:"zintuztegun",baldintza:"Bazintuztegu", hipotetikoa:"Zintuzketegu", irreala:"Zintuzketegun" },
    "GUK-HAIEK": { orain:"ditugu",     lehen:"genituen",   baldintza:"Bagenitu",     hipotetikoa:"Genituzke",    irreala:"Genituzkeen" },

    "ZUK-NI":    { orain:"nauzu",     lehen:"ninduzun",  baldintza:"Baninduzu",  hipotetikoa:"Nindukezu",  irreala:"Nindukezun" },
    "ZUK-HURA":  { orain:"duzu",      lehen:"zenuen",    baldintza:"Bazenu",     hipotetikoa:"Zenuke",     irreala:"Zenukeen" },
    "ZUK-GU":    { orain:"gaituzu",   lehen:"gintuzun",  baldintza:"Bagintuzu",  hipotetikoa:"Gintuzkezu", irreala:"Gintuzkezun" },
    "ZUK-HAIEK": { orain:"dituzu",    lehen:"zenituen",  baldintza:"Bazenitu",   hipotetikoa:"Zenituzke",  irreala:"Zenituzkeen" },

    "ZUEK-NI":   { orain:"nauzue",    lehen:"ninduzuen", baldintza:"Baninduzue", hipotetikoa:"Nindukezue", irreala:"Nindukezuen" },
    "ZUEK-HURA": { orain:"duzue",     lehen:"zenuten",   baldintza:"Bazenute",   hipotetikoa:"Zenukete",   irreala:"Zenuketen" },
    "ZUEK-GU":   { orain:"gaituzue",  lehen:"gintuzuen", baldintza:"Bagintuzue", hipotetikoa:"Gintuzkezue",irreala:"Gintuzkezuen" },
    "ZUEK-HAIEK":{ orain:"dituzue",   lehen:"zenituzten",baldintza:"Bazenituzte",hipotetikoa:"Zenituzkete",irreala:"Zenituzketen" },

    "HAIEK-NI":    { orain:"naute",      lehen:"ninduten",  baldintza:"Banindute",   hipotetikoa:"Nindukete",    irreala:"Ninduketen" },
    "HAIEK-HURA":  { orain:"dute",       lehen:"zuten",     baldintza:"Balute",      hipotetikoa:"Lukete",       irreala:"Zuketen" },
    "HAIEK-GU":    { orain:"gaituzte",   lehen:"gintuzten", baldintza:"Bagintuzte",  hipotetikoa:"Gintuzkete",   irreala:"Gintuzketen" },
    "HAIEK-ZU":    { orain:"zaituzte",   lehen:"zintuzten", baldintza:"Bazintuzte",  hipotetikoa:"Zintuzkete",   irreala:"Zintuzketen" },
    "HAIEK-ZUEK":  { orain:"zaituztete", lehen:"zintuzteten",baldintza:"Bazintuztete",hypotetikoa:"Zintuzketete",irreala:"Zintuzketeten" },
    "HAIEK-HAIEK": { orain:"dituzte",    lehen:"zituzten",  baldintza:"Balituzte",   hipotetikoa:"Lituzkete",    irreala:"Zituzketen" }
  };
  const SOL_NOR_NORI_NORK = {
    "NIK-HARI-HURA":   { orain:"diot",   lehen:"nion",   baldintza:"Banio",   hipotetikoa:"Nioke",   irreala:"Niokeen" },
    "NIK-ZURI-HURA":   { orain:"dizut",  lehen:"nizun",  baldintza:"Banizu",  hipotetikoa:"Nizuke",  irreala:"Nizukeen" },
    "NIK-ZUEI-HURA":   { orain:"dizuet", lehen:"nizuen", baldintza:"Banizue", hipotetikoa:"Nizueke", irreala:"Nizuekeen" },
    "NIK-HAIEI-HURA":  { orain:"diet",   lehen:"nien",   baldintza:"Banie",   hipotetikoa:"Nieke",   irreala:"Niekeen" },

    "NIK-HARI-HAIEK":  { orain:"dizkiot",   lehen:"nizkion",   baldintza:"Banizkio",   hipotetikoa:"Nizkioke",   irreala:"Nizkiokeen" },
    "NIK-ZURI-HAIEK":  { orain:"dizkizut",  lehen:"nizkizun",  baldintza:"Banizkizu",  hipotetikoa:"Nizkizuke",  irreala:"Nizkizukeen" },
    "NIK-ZUEI-HAIEK":  { orain:"dizkizuet", lehen:"nizkizuen", baldintza:"Banizkizue", hipotetikoa:"Nizkizueke", irreala:"Nizkizuekeen" },
    "NIK-HAIEI-HAIEK": { orain:"dizkiet",   lehen:"nizkien",   baldintza:"Banizkie",   hipotetikoa:"Nizkieke",   irreala:"Nizkiekeen" },

    "HARK-NIRI-HURA":  { orain:"dit",   lehen:"zidan",  baldintza:"Balit",   hipotetikoa:"Lidake",  irreala:"Zidakeen" },
    "HARK-HARI-HURA":  { orain:"dio",   lehen:"zion",   baldintza:"Balio",   hipotetikoa:"Lioke",   irreala:"Ziokeen" },
    "HARK-GURI-HURA":  { orain:"digu",  lehen:"zigun",  baldintza:"Baligu",  hipotetikoa:"Liguke",  irreala:"Zigukeen" },
    "HARK-ZURI-HURA":  { orain:"dizu",  lehen:"zizun",  baldintza:"Balizu",  hipotetikoa:"Lizuke",  irreala:"Zizukeen" },
    "HARK-ZUEI-HURA":  { orain:"dizue", lehen:"zizuen", baldintza:"Balizue", hipotetikoa:"Lizueke", irreala:"Zizuekeen" },
    "HARK-HAIEI-HURA": { orain:"die",   lehen:"zien",   baldintza:"Balie",   hipotetikoa:"Lieke",   irreala:"Ziekeen" },

    "HARK-NIRI-HAIEK":  { orain:"dizkit",   lehen:"zizkidan",  baldintza:"Balizkit",   hipotetikoa:"Lizkidake",  irreala:"Zizkidakeen" },
    "HARK-HARI-HAIEK":  { orain:"dizkio",   lehen:"zizkion",   baldintza:"Balizkio",   hipotetikoa:"Lizkioke",   irreala:"Zizkiokeen" },
    "HARK-GURI-HAIEK":  { orain:"dizkigu",  lehen:"zizkigun",  baldintza:"Balizkigu",  hipotetikoa:"Lizkiguke",  irreala:"Zizkigukeeen" },
    "HARK-ZURI-HAIEK":  { orain:"dizkizu",  lehen:"zizkizun",  baldintza:"Balizkizu",  hipotetikoa:"Lizkizuke",  irreala:"Zizkizukeen" },
    "HARK-ZUEI-HAIEK":  { orain:"dizkizue", lehen:"zizkizuen", baldintza:"Balizkizue", hipotetikoa:"Lizkizueke", irreala:"Zizkizuekeen" },
    "HARK-HAIEI-HAIEK": { orain:"dizkie",   lehen:"zizkien",   baldintza:"Balizkie",   hipotetikoa:"Lizkieke",   irreala:"Zizkiekeen" },

    "GUK-HARI-HURA":   { orain:"diogu",   lehen:"genion",  baldintza:"Bagenio",   hipotetikoa:"Genioke",   irreala:"Geniokeen" },
    "GUK-ZURI-HURA":   { orain:"dizugu",  lehen:"genizun", baldintza:"Bagenizu",  hipotetikoa:"Genizuke",  irreala:"Genizukeen" },
    "GUK-ZUEI-HURA":   { orain:"dizuegu", lehen:"genizuen",baldintza:"Bagenizue", hipotetikoa:"Genizueke", irreala:"Genizuekeen" },
    "GUK-HAIEI-HURA":  { orain:"diegu",   lehen:"genien",  baldintza:"Bagenie",   hipotetikoa:"Genieke",   irreala:"Geniekeen" },

    "GUK-HARI-HAIEK":  { orain:"dizkiogu",   lehen:"genizkion",   baldintza:"Bagenizkio",   hipotetikoa:"Genizkioke",   irreala:"Genizkiokeen" },
    "GUK-ZURI-HAIEK":  { orain:"dizkizugu",  lehen:"genizkizun",  baldintza:"Bagenizkizu",  hipotetikoa:"Genizkizuke",  irreala:"Genizkizukeen" },
    "GUK-ZUEI-HAIEK":  { orain:"dizkizuegu", lehen:"genizkizuen", baldintza:"Bagenizkizue", hipotetikoa:"Genizkizueke", irreala:"Genizkizuekeen" },
    "GUK-HAIEI-HAIEK": { orain:"dizkiegu",   lehen:"genizkien",   baldintza:"Bagenizkie",   hipotetikoa:"Genizkieke",   irreala:"Genizkiekeen" },

    "ZUK-NIRI-HURA":   { orain:"didazu",  lehen:"zenidan", baldintza:"Bazenit",   hipotetikoa:"Zenidake",  irreala:"Zenidakeen" },
    "ZUK-HARI-HURA":   { orain:"diozu",   lehen:"zenion",  baldintza:"Bazenio",   hipotetikoa:"Zenioke",   irreala:"Zeniokeen" },
    "ZUK-GURI-HURA":   { orain:"diguzu",  lehen:"zenigun", baldintza:"Bazenigu",  hipotetikoa:"Zeniguke",  irreala:"Zenigukeen" },
    "ZUK-HAIEI-HURA":  { orain:"diezu",   lehen:"zenien",  baldintza:"Bazenie",   hipotetikoa:"Zenieke",   irreala:"Zeniekeen" },

    "ZUK-NIRI-HAIEK":   { orain:"dizkidazu",  lehen:"zenizkidan", baldintza:"Bazenizkit",   hipotetikoa:"Zenizkidake",  irreala:"Zenizkidakeen" },
    "ZUK-HARI-HAIEK":   { orain:"dizkiozu",   lehen:"zenizkion",  baldintza:"Bazenizkio",   hipotetikoa:"Zenizkioke",   irreala:"Zenizkiokeen" },
    "ZUK-GURI-HAIEK":   { orain:"dizkiguzu",  lehen:"zenizkigun",  baldintza:"Bazenizkigu",  hipotetikoa:"Zenizkiguke",  irreala:"Zenizkigukeen" },
    "ZUK-HAIEI-HAIEK":  { orain:"dizkiezu",   lehen:"zenizkien",   baldintza:"Bazenizkie",   hipotetikoa:"Zenizkieke",   irreala:"Zenizkiekeen" },

    "ZUEK-NIRI-HURA":  { orain:"didazue", lehen:"zenidaten", baldintza:"Bazenidate", hipotetikoa:"Zenidakete", irreala:"Zenidaketen" },
    "ZUEK-HARI-HURA":  { orain:"diozue",  lehen:"zenioten",  baldintza:"Bazeniote",  hipotetikoa:"Zeniokete",  irreala:"Zenioketen" },
    "ZUEK-GURI-HURA":  { orain:"diguzue", lehen:"zeniguten", baldintza:"Bazenigute", hipotetikoa:"Zenigukete", irreala:"Zeniguketen" },
    "ZUEK-HAIEI-HURA": { orain:"diezue",  lehen:"zenieten",  baldintza:"Bazeniete",  hipotetikoa:"Zeniekete",  irreala:"Zenieketen" },

    "ZUEK-NIRI-HAIEK":  { orain:"dizkidazue", lehen:"zenizkidaten", baldintza:"Bazenizkidate", hipotetikoa:"Zenizkidakete", irreala:"Zenizkidaketen" },
    "ZUEK-HARI-HAIEK":  { orain:"dizkiozue",  lehen:"zenizkioten",  baldintza:"Bazenizkiote",  hipotetikoa:"Zenizkiokete",  irreala:"Zenizkioketen" },
    "ZUEK-GURI-HAIEK":  { orain:"dizkiguzue", lehen:"zenizkiguten", baldintza:"Bazenizkigute", hipotetikoa:"Zenizkigukete", irreala:"Zenizkiguketen" },
    "ZUEK-HAIEI-HAIEK": { orain:"dizkiezue",  lehen:"zenizkieten",  baldintza:"Bazenizkiete",  hipotetikoa:"Zenizkiekete",  irreala:"Zenizkieketen" },

    "HAIEK-NIRI-HURA":  { orain:"didate",  lehen:"zidaten",  baldintza:"Balidate",  hipotetikoa:"Lidakete",  irreala:"Zidaketen" },
    "HAIEK-HARI-HURA":  { orain:"diote",   lehen:"zioten",   baldintza:"Baliote",   hipotetikoa:"Liokete",   irreala:"Zioketen" },
    "HAIEK-GURI-HURA":  { orain:"digute",  lehen:"ziguten",  baldintza:"Baligute",  hipotetikoa:"Ligukete",  irreala:"Ziguketen" },
    "HAIEK-ZURI-HURA":  { orain:"dizute",  lehen:"zizuten",  baldintza:"Balizute",  hipotetikoa:"Lizukete",  irreala:"Zizuketen" },
    "HAIEK-ZUEI-HURA":  { orain:"dizuete", lehen:"zizueten", baldintza:"Balizuete", hipotetikoa:"Lizuekete", irreala:"Zizueketen" },
    "HAIEK-HAIEI-HURA": { orain:"diete",   lehen:"zieten",   baldintza:"Baliete",   hipotetikoa:"Liekete",   irreala:"Zieketen" },

    "HAIEK-NIRI-HAIEK":  { orain:"dizkidate",  lehen:"zizkidaten",  baldintza:"Balizkidate",  hipotetikoa:"Lizkidakete",  irreala:"Zizkidaketen" },
    "HAIEK-HARI-HAIEK":  { orain:"dizkiote",   lehen:"zizkioten",   baldintza:"Balizkiote",   hipotetikoa:"Lizkiokete",   irreala:"Zizkioketen" },
    "HAIEK-GURI-HAIEK":  { orain:"dizkigute",  lehen:"zizkiguten",  baldintza:"Balizkigute",  hipotetikoa:"Lizkigukete",  irreala:"Zizkiguketen" },
    "HAIEK-ZURI-HAIEK":  { orain:"dizkizute",  lehen:"zizkizuten",  baldintza:"Balizkizute",  hipotetikoa:"Lizkizukete",  irreala:"Zizkizuketen" },
    "HAIEK-ZUEI-HAIEK":  { orain:"dizkizuete", lehen:"zizkizueten", baldintza:"Balizkizuete", hipotetikoa:"Lizkizuekete", irreala:"Zizkizueketen" },
    "HAIEK-HAIEI-HAIEK": { orain:"dizkiete",   lehen:"zizkieten",   baldintza:"Balizkiete",   hipotetikoa:"Lizkiekete",   irreala:"Zizkieketen" }
  };
return {SOL_NOR,SOL_NOR_NORI_HURA,SOL_NOR_NORI_HAIEK,SOL_NOR_NORK,SOL_NOR_NORI_NORK};})();


// AHALERA ETA SUBJUNTIBOA - euskara batua, eztabada (hikarik gabe)
// Iturriak: https://aditza.baigura.org/ eta https://tfe.eus/euskara/aditzak
// Ahalerako hipotetikoa iturrietan oinarritutako forma-ereduen arabera osatua.
// Eztabada; NOR, NOR-NORI, NOR-NORK, NOR-NORI-NORK.

const ORIGINAL_AHALERA = (() => {
  const SOL_NOR = {
    "NI": { orain: "naiteke", lehen: "nintekeen", hipotetikoa: "ninteke" },
    "ZU": { orain: "zaitezke", lehen: "zintezkeen", hipotetikoa: "zintezke" },
    "HURA": { orain: "daiteke", lehen: "zitekeen", hipotetikoa: "liteke" },
    "GU": { orain: "gaitezke", lehen: "gintezkeen", hipotetikoa: "gintezke" },
    "ZUEK": { orain: "zaitezkete", lehen: "zintezketen", hipotetikoa: "zintezkete" },
    "HAIEK": { orain: "daitezke", lehen: "zitezkeen", hipotetikoa: "litezke" },
  };
  const SOL_NOR_NORI_HURA = {
    "HURA-NIRI": { orain: "dakidake", lehen: "zekidakeen", hipotetikoa: "lekidake" },
    "HURA-ZURI": { orain: "dakizuke", lehen: "zekizukeen", hipotetikoa: "lekizuke" },
    "HURA-HARI": { orain: "dakioke", lehen: "zekiokeen", hipotetikoa: "lekioke" },
    "HURA-GURI": { orain: "dakiguke", lehen: "zekigukeen", hipotetikoa: "lekiguke" },
    "HURA-ZUEI": { orain: "dakizueke", lehen: "zekizuekeen", hipotetikoa: "lekizueke" },
    "HURA-HAIEI": { orain: "dakieke", lehen: "zekiekeen", hipotetikoa: "lekieke" },
  };
  const SOL_NOR_NORI_HAIEK = {
    "HAIEK-NIRI": { orain: "dakizkidake", lehen: "zekizkidakeen", hipotetikoa: "lekizkidake" },
    "HAIEK-ZURI": { orain: "dakizkizuke", lehen: "zekizkizukeen", hipotetikoa: "lekizkizuke" },
    "HAIEK-HARI": { orain: "dakizkioke", lehen: "zekizkiokeen", hipotetikoa: "lekizkioke" },
    "HAIEK-GURI": { orain: "dakizkiguke", lehen: "zekizkigukeen", hipotetikoa: "lekizkiguke" },
    "HAIEK-ZUEI": { orain: "dakizkizueke", lehen: "zekizkizuekeen", hipotetikoa: "lekizkizueke" },
    "HAIEK-HAIEI": { orain: "dakizkieke", lehen: "zekizkiekeen", hipotetikoa: "lekizkieke" },
  };
  const SOL_NOR_NORK = {
    "NIK-HURA": { orain: "dezaket", lehen: "nezakeen", hipotetikoa: "nezake" },
    "NIK-ZU": { orain: "zaitzaket", lehen: "zintzakedan", hipotetikoa: "zintzaket" },
    "NIK-ZUEK": { orain: "zaitzaketet", lehen: "zintzaketedan", hipotetikoa: "zintzaketet" },
    "NIK-HAIEK": { orain: "ditzaket", lehen: "nitzakeen", hipotetikoa: "nitzake" },
    "HARK-NI": { orain: "nazake", lehen: "nintzakeen", hipotetikoa: "nintzake" },
    "HARK-HURA": { orain: "dezake", lehen: "zezakeen", hipotetikoa: "lezake" },
    "HARK-GU": { orain: "gaitzake", lehen: "gintzakeen", hipotetikoa: "gintzake" },
    "HARK-ZU": { orain: "zaitzake", lehen: "zintzakeen", hipotetikoa: "zintzake" },
    "HARK-ZUEK": { orain: "zaitzakete", lehen: "zintzaketen", hipotetikoa: "zintzakete" },
    "HARK-HAIEK": { orain: "ditzake", lehen: "zitzakeen", hipotetikoa: "litzake" },
    "GUK-HURA": { orain: "dezakegu", lehen: "genezakeen", hipotetikoa: "genezake" },
    "GUK-ZU": { orain: "zaitzakegu", lehen: "zintzakegun", hipotetikoa: "zintzakegu" },
    "GUK-ZUEK": { orain: "zaitzaketegu", lehen: "zintzaketegun", hipotetikoa: "zintzaketegu" },
    "GUK-HAIEK": { orain: "ditzakegu", lehen: "genitzakeen", hipotetikoa: "genitzake" },
    "ZUK-NI": { orain: "nazakezu", lehen: "nintzakezun", hipotetikoa: "nintzakezu" },
    "ZUK-HURA": { orain: "dezakezu", lehen: "zenezakeen", hipotetikoa: "zenezake" },
    "ZUK-GU": { orain: "gaitzakezu", lehen: "gintzakezun", hipotetikoa: "gintzakezu" },
    "ZUK-HAIEK": { orain: "ditzakezu", lehen: "zenitzakeen", hipotetikoa: "zenitzake" },
    "ZUEK-NI": { orain: "nazakezue", lehen: "nintzakezuen", hipotetikoa: "nintzakezue" },
    "ZUEK-HURA": { orain: "dezakezue", lehen: "zenezaketen", hipotetikoa: "zenezakete" },
    "ZUEK-GU": { orain: "gaitzakezue", lehen: "gintzakezuen", hipotetikoa: "gintzakezue" },
    "ZUEK-HAIEK": { orain: "ditzakezue", lehen: "zenitzaketen", hipotetikoa: "zenitzakete" },
    "HAIEK-NI": { orain: "nazakete", lehen: "nintzaketen", hipotetikoa: "nintzakete" },
    "HAIEK-HURA": { orain: "dezakete", lehen: "zezaketen", hipotetikoa: "lezakete" },
    "HAIEK-GU": { orain: "gaitzakete", lehen: "gintzaketen", hipotetikoa: "gintzakete" },
    "HAIEK-ZU": { orain: "zaitzakete", lehen: "zintzaketen", hipotetikoa: "zintzakete" },
    "HAIEK-ZUEK": { orain: "zaitzaketete", lehen: "zintzaketeten", hipotetikoa: "zintzaketete" },
    "HAIEK-HAIEK": { orain: "ditzakete", lehen: "zitzaketen", hipotetikoa: "litzakete" },
  };
  const SOL_NOR_NORI_NORK = {
    "NIK-HARI-HURA": { orain: "diezaioket", lehen: "niezaiokeen", hipotetikoa: "niezaioke" },
    "NIK-ZURI-HURA": { orain: "diezazuket", lehen: "niezazukeen", hipotetikoa: "niezazuke" },
    "NIK-ZUEI-HURA": { orain: "diezazueket", lehen: "niezazuekeen", hipotetikoa: "niezazueke" },
    "NIK-HAIEI-HURA": { orain: "diezaieket", lehen: "niezaiekeen", hipotetikoa: "niezaieke" },
    "NIK-HARI-HAIEK": { orain: "diezazkioket", lehen: "niezazkiokeen", hipotetikoa: "niezazkioke" },
    "NIK-ZURI-HAIEK": { orain: "diezazkizuket", lehen: "niezazkizukeen", hipotetikoa: "niezazkizuke" },
    "NIK-ZUEI-HAIEK": { orain: "diezazkizueket", lehen: "niezazkizuekeen", hipotetikoa: "niezazkizueke" },
    "NIK-HAIEI-HAIEK": { orain: "diezazkieket", lehen: "niezazkiekeen", hipotetikoa: "niezazkieke" },
    "HARK-NIRI-HURA": { orain: "diezadake", lehen: "ziezadakeen", hipotetikoa: "liezadake" },
    "HARK-HARI-HURA": { orain: "diezaioke", lehen: "ziezaiokeen", hipotetikoa: "liezaioke" },
    "HARK-GURI-HURA": { orain: "diezaguke", lehen: "ziezagukeen", hipotetikoa: "liezaguke" },
    "HARK-ZURI-HURA": { orain: "diezazuke", lehen: "ziezazukeen", hipotetikoa: "liezazuke" },
    "HARK-ZUEI-HURA": { orain: "diezazueke", lehen: "ziezazuekeen", hipotetikoa: "liezazueke" },
    "HARK-HAIEI-HURA": { orain: "diezaieke", lehen: "ziezaiekeen", hipotetikoa: "liezaieke" },
    "HARK-NIRI-HAIEK": { orain: "diezazkidake", lehen: "ziezazkidakeen", hipotetikoa: "liezazkidake" },
    "HARK-HARI-HAIEK": { orain: "diezazkioke", lehen: "ziezazkiokeen", hipotetikoa: "liezazkioke" },
    "HARK-GURI-HAIEK": { orain: "diezazkiguke", lehen: "ziezazkigukeen", hipotetikoa: "liezazkiguke" },
    "HARK-ZURI-HAIEK": { orain: "diezazkizuke", lehen: "ziezazkizukeen", hipotetikoa: "liezazkizuke" },
    "HARK-ZUEI-HAIEK": { orain: "diezazkizueke", lehen: "ziezazkizuekeen", hipotetikoa: "liezazkizueke" },
    "HARK-HAIEI-HAIEK": { orain: "diezazkieke", lehen: "ziezazkiekeen", hipotetikoa: "liezazkieke" },
    "GUK-HARI-HURA": { orain: "diezaiokegu", lehen: "geniezaiokeen", hipotetikoa: "geniezaioke" },
    "GUK-ZURI-HURA": { orain: "diezazukegu", lehen: "geniezazukeen", hipotetikoa: "geniezazuke" },
    "GUK-ZUEI-HURA": { orain: "diezazuekegu", lehen: "geniezazuekeen", hipotetikoa: "geniezazueke" },
    "GUK-HAIEI-HURA": { orain: "diezaiekegu", lehen: "geniezaiekeen", hipotetikoa: "geniezaieke" },
    "GUK-HARI-HAIEK": { orain: "diezazkiokegu", lehen: "geniezazkiokeen", hipotetikoa: "geniezazkioke" },
    "GUK-ZURI-HAIEK": { orain: "diezazkizukegu", lehen: "geniezazkizukeen", hipotetikoa: "geniezazkizuke" },
    "GUK-ZUEI-HAIEK": { orain: "diezazkizuekegu", lehen: "geniezazkizuekeen", hipotetikoa: "geniezazkizueke" },
    "GUK-HAIEI-HAIEK": { orain: "diezazkiekegu", lehen: "geniezazkiekeen", hipotetikoa: "geniezazkieke" },
    "ZUK-NIRI-HURA": { orain: "diezadakezu", lehen: "zeniezadakeen", hipotetikoa: "zeniezadake" },
    "ZUK-HARI-HURA": { orain: "diezaiokezu", lehen: "zeniezaiokeen", hipotetikoa: "zeniezaioke" },
    "ZUK-GURI-HURA": { orain: "diezagukezu", lehen: "zeniezagukeen", hipotetikoa: "zeniezaguke" },
    "ZUK-HAIEI-HURA": { orain: "diezaiekezu", lehen: "zeniezaiekeen", hipotetikoa: "zeniezaieke" },
    "ZUK-NIRI-HAIEK": { orain: "diezazkidakezu", lehen: "zeniezazkidakeen", hipotetikoa: "zeniezazkidake" },
    "ZUK-HARI-HAIEK": { orain: "diezazkiokezu", lehen: "zeniezazkiokeen", hipotetikoa: "zeniezazkioke" },
    "ZUK-GURI-HAIEK": { orain: "diezazkigukezu", lehen: "zeniezazkigukeen", hipotetikoa: "zeniezazkiguke" },
    "ZUK-HAIEI-HAIEK": { orain: "diezazkiekezu", lehen: "zeniezazkiekeen", hipotetikoa: "zeniezazkieke" },
    "ZUEK-NIRI-HURA": { orain: "diezadakezue", lehen: "zeniezadaketen", hipotetikoa: "zeniezadakete" },
    "ZUEK-HARI-HURA": { orain: "diezaiokezue", lehen: "zeniezaioketen", hipotetikoa: "zeniezaiokete" },
    "ZUEK-GURI-HURA": { orain: "diezagukezue", lehen: "zeniezaguketen", hipotetikoa: "zeniezagukete" },
    "ZUEK-HAIEI-HURA": { orain: "diezaiekezue", lehen: "zeniezaieketen", hipotetikoa: "zeniezaiekete" },
    "ZUEK-NIRI-HAIEK": { orain: "diezazkidakezue", lehen: "zeniezazkidaketen", hipotetikoa: "zeniezazkidakete" },
    "ZUEK-HARI-HAIEK": { orain: "diezazkiokezue", lehen: "zeniezazkioketen", hipotetikoa: "zeniezazkiokete" },
    "ZUEK-GURI-HAIEK": { orain: "diezazkigukezue", lehen: "zeniezazkiguketen", hipotetikoa: "zeniezazkigukete" },
    "ZUEK-HAIEI-HAIEK": { orain: "diezazkiekezue", lehen: "zeniezazkieketen", hipotetikoa: "zeniezazkiekete" },
    "HAIEK-NIRI-HURA": { orain: "diezadakete", lehen: "ziezadaketen", hipotetikoa: "liezadakete" },
    "HAIEK-HARI-HURA": { orain: "diezaiokete", lehen: "ziezaioketen", hipotetikoa: "liezaiokete" },
    "HAIEK-GURI-HURA": { orain: "diezagukete", lehen: "ziezaguketen", hipotetikoa: "liezagukete" },
    "HAIEK-ZURI-HURA": { orain: "diezazukete", lehen: "ziezazuketen", hipotetikoa: "liezazukete" },
    "HAIEK-ZUEI-HURA": { orain: "diezazuekete", lehen: "ziezazueketen", hipotetikoa: "liezazuekete" },
    "HAIEK-HAIEI-HURA": { orain: "diezaiekete", lehen: "ziezaieketen", hipotetikoa: "liezaiekete" },
    "HAIEK-NIRI-HAIEK": { orain: "diezazkidakete", lehen: "ziezazkidaketen", hipotetikoa: "liezazkidakete" },
    "HAIEK-HARI-HAIEK": { orain: "diezazkiokete", lehen: "ziezazkioketen", hipotetikoa: "liezazkiokete" },
    "HAIEK-GURI-HAIEK": { orain: "diezazkigukete", lehen: "ziezazkiguketen", hipotetikoa: "liezazkigukete" },
    "HAIEK-ZURI-HAIEK": { orain: "diezazkizukete", lehen: "ziezazkizuketen", hipotetikoa: "liezazkizukete" },
    "HAIEK-ZUEI-HAIEK": { orain: "diezazkizuekete", lehen: "ziezazkizueketen", hipotetikoa: "liezazkizuekete" },
    "HAIEK-HAIEI-HAIEK": { orain: "diezazkiekete", lehen: "ziezazkieketen", hipotetikoa: "liezazkiekete" },
  };
  return {SOL_NOR,SOL_NOR_NORI_HURA,SOL_NOR_NORI_HAIEK,SOL_NOR_NORK,SOL_NOR_NORI_NORK};
})();

const ORIGINAL_SUBJUNTIBOA = (() => {
  const SOL_NOR = {
    "NI": { orain: "nadin", lehen: "nendin" },
    "ZU": { orain: "zaitezen", lehen: "zintezen" },
    "HURA": { orain: "dadin", lehen: "zedin" },
    "GU": { orain: "gaitezen", lehen: "gintezen" },
    "ZUEK": { orain: "zaitezten", lehen: "zintezten" },
    "HAIEK": { orain: "daitezen", lehen: "zitezen" },
  };
  const SOL_NOR_NORI_HURA = {
    "HURA-NIRI": { orain: "dakidan", lehen: "zekidan" },
    "HURA-ZURI": { orain: "dakizun", lehen: "zekizun" },
    "HURA-HARI": { orain: "dakion", lehen: "zekion" },
    "HURA-GURI": { orain: "dakigun", lehen: "zekigun" },
    "HURA-ZUEI": { orain: "dakizuen", lehen: "zekizuen" },
    "HURA-HAIEI": { orain: "dakien", lehen: "zekien" },
  };
  const SOL_NOR_NORI_HAIEK = {
    "HAIEK-NIRI": { orain: "dakizkidan", lehen: "zekizkidan" },
    "HAIEK-ZURI": { orain: "dakizkizun", lehen: "zekizkizun" },
    "HAIEK-HARI": { orain: "dakizkion", lehen: "zekizkion" },
    "HAIEK-GURI": { orain: "dakizkigun", lehen: "zekizkigun" },
    "HAIEK-ZUEI": { orain: "dakizkizuen", lehen: "zekizkizuen" },
    "HAIEK-HAIEI": { orain: "dakizkien", lehen: "zekizkien" },
  };
  const SOL_NOR_NORK = {
    "NIK-HURA": { orain: "dezadan", lehen: "nezan" },
    "NIK-ZU": { orain: "zaitzadan", lehen: "zintzadan" },
    "NIK-ZUEK": { orain: "zaitzatedan", lehen: "zintzatedan" },
    "NIK-HAIEK": { orain: "ditzadan", lehen: "nitzan" },
    "HARK-NI": { orain: "nazan", lehen: "nintzan" },
    "HARK-HURA": { orain: "dezan", lehen: "zezan" },
    "HARK-GU": { orain: "gaitzan", lehen: "gintzan" },
    "HARK-ZU": { orain: "zaitzan", lehen: "zintzan" },
    "HARK-ZUEK": { orain: "zaitzaten", lehen: "zintzaten" },
    "HARK-HAIEK": { orain: "ditzan", lehen: "zitzan" },
    "GUK-HURA": { orain: "dezagun", lehen: "genezan" },
    "GUK-ZU": { orain: "zaitzagun", lehen: "zintzagun" },
    "GUK-ZUEK": { orain: "zaitzategun", lehen: "zintzategun" },
    "GUK-HAIEK": { orain: "ditzagun", lehen: "genitzan" },
    "ZUK-NI": { orain: "nazazun", lehen: "nintzazun" },
    "ZUK-HURA": { orain: "dezazun", lehen: "zenezan" },
    "ZUK-GU": { orain: "gaitzazun", lehen: "gintzazun" },
    "ZUK-HAIEK": { orain: "ditzazun", lehen: "zenitzan" },
    "ZUEK-NI": { orain: "nazazuen", lehen: "nintzazuen" },
    "ZUEK-HURA": { orain: "dezazuen", lehen: "zenezaten" },
    "ZUEK-GU": { orain: "gaitzazuen", lehen: "gintzazuen" },
    "ZUEK-HAIEK": { orain: "ditzazuen", lehen: "zenitzaten" },
    "HAIEK-NI": { orain: "nazaten", lehen: "nintzaten" },
    "HAIEK-HURA": { orain: "dezaten", lehen: "zezaten" },
    "HAIEK-GU": { orain: "gaitzaten", lehen: "gintzaten" },
    "HAIEK-ZU": { orain: "zaitzaten", lehen: "zintzaten" },
    "HAIEK-ZUEK": { orain: "zaitzateten", lehen: "zintzateten" },
    "HAIEK-HAIEK": { orain: "ditzaten", lehen: "zitzaten" },
  };
  const SOL_NOR_NORI_NORK = {
    "NIK-HARI-HURA": { orain: "diezaiodan", lehen: "niezaion" },
    "NIK-ZURI-HURA": { orain: "diezazudan", lehen: "niezazun" },
    "NIK-ZUEI-HURA": { orain: "diezazuedan", lehen: "niezazuen" },
    "NIK-HAIEI-HURA": { orain: "diezaiedan", lehen: "niezaien" },
    "NIK-HARI-HAIEK": { orain: "diezazkiodan", lehen: "niezazkion" },
    "NIK-ZURI-HAIEK": { orain: "diezazkizudan", lehen: "niezazkizun" },
    "NIK-ZUEI-HAIEK": { orain: "diezazkizuedan", lehen: "niezazkizuen" },
    "NIK-HAIEI-HAIEK": { orain: "diezazkiedan", lehen: "niezazkien" },
    "HARK-NIRI-HURA": { orain: "diezadan", lehen: "ziezadan" },
    "HARK-HARI-HURA": { orain: "diezaion", lehen: "ziezaion" },
    "HARK-GURI-HURA": { orain: "diezagun", lehen: "ziezagun" },
    "HARK-ZURI-HURA": { orain: "diezazun", lehen: "ziezazun" },
    "HARK-ZUEI-HURA": { orain: "diezazuen", lehen: "ziezazuen" },
    "HARK-HAIEI-HURA": { orain: "diezaien", lehen: "ziezaien" },
    "HARK-NIRI-HAIEK": { orain: "diezazkidan", lehen: "ziezazkidan" },
    "HARK-HARI-HAIEK": { orain: "diezazkion", lehen: "ziezazkion" },
    "HARK-GURI-HAIEK": { orain: "diezazkigun", lehen: "ziezazkigun" },
    "HARK-ZURI-HAIEK": { orain: "diezazkizun", lehen: "ziezazkizun" },
    "HARK-ZUEI-HAIEK": { orain: "diezazkizuen", lehen: "ziezazkizuen" },
    "HARK-HAIEI-HAIEK": { orain: "diezazkien", lehen: "ziezazkien" },
    "GUK-HARI-HURA": { orain: "diezaiogun", lehen: "geniezaion" },
    "GUK-ZURI-HURA": { orain: "diezazugun", lehen: "geniezazun" },
    "GUK-ZUEI-HURA": { orain: "diezazuegun", lehen: "geniezazuen" },
    "GUK-HAIEI-HURA": { orain: "diezaiegun", lehen: "geniezaien" },
    "GUK-HARI-HAIEK": { orain: "diezazkiogun", lehen: "geniezazkion" },
    "GUK-ZURI-HAIEK": { orain: "diezazkizugun", lehen: "geniezazkizun" },
    "GUK-ZUEI-HAIEK": { orain: "diezazkizuegun", lehen: "geniezazkizuen" },
    "GUK-HAIEI-HAIEK": { orain: "diezazkiegun", lehen: "geniezazkien" },
    "ZUK-NIRI-HURA": { orain: "diezadazun", lehen: "zeniezadan" },
    "ZUK-HARI-HURA": { orain: "diezaiozun", lehen: "zeniezaion" },
    "ZUK-GURI-HURA": { orain: "diezaguzun", lehen: "zeniezagun" },
    "ZUK-HAIEI-HURA": { orain: "diezaiezun", lehen: "zeniezaien" },
    "ZUK-NIRI-HAIEK": { orain: "diezazkidazun", lehen: "zeniezazkidan" },
    "ZUK-HARI-HAIEK": { orain: "diezazkiozun", lehen: "zeniezazkion" },
    "ZUK-GURI-HAIEK": { orain: "diezazkiguzun", lehen: "zeniezazkigun" },
    "ZUK-HAIEI-HAIEK": { orain: "diezazkiezun", lehen: "zeniezazkien" },
    "ZUEK-NIRI-HURA": { orain: "diezadazuen", lehen: "zeniezadaten" },
    "ZUEK-HARI-HURA": { orain: "diezaiozuen", lehen: "zeniezaioten" },
    "ZUEK-GURI-HURA": { orain: "diezaguzuen", lehen: "zeniezaguten" },
    "ZUEK-HAIEI-HURA": { orain: "diezaiezuen", lehen: "zeniezaieten" },
    "ZUEK-NIRI-HAIEK": { orain: "diezazkidazuen", lehen: "zeniezazkidaten" },
    "ZUEK-HARI-HAIEK": { orain: "diezazkiozuen", lehen: "zeniezazkioten" },
    "ZUEK-GURI-HAIEK": { orain: "diezazkiguzuen", lehen: "zeniezazkiguten" },
    "ZUEK-HAIEI-HAIEK": { orain: "diezazkiezuen", lehen: "zeniezazkieten" },
    "HAIEK-NIRI-HURA": { orain: "diezadaten", lehen: "ziezadaten" },
    "HAIEK-HARI-HURA": { orain: "diezaioten", lehen: "ziezaioten" },
    "HAIEK-GURI-HURA": { orain: "diezaguten", lehen: "ziezaguten" },
    "HAIEK-ZURI-HURA": { orain: "diezazuten", lehen: "ziezazuten" },
    "HAIEK-ZUEI-HURA": { orain: "diezazueten", lehen: "ziezazueten" },
    "HAIEK-HAIEI-HURA": { orain: "diezaieten", lehen: "ziezaieten" },
    "HAIEK-NIRI-HAIEK": { orain: "diezazkidaten", lehen: "ziezazkidaten" },
    "HAIEK-HARI-HAIEK": { orain: "diezazkioten", lehen: "ziezazkioten" },
    "HAIEK-GURI-HAIEK": { orain: "diezazkiguten", lehen: "ziezazkiguten" },
    "HAIEK-ZURI-HAIEK": { orain: "diezazkizuten", lehen: "ziezazkizuten" },
    "HAIEK-ZUEI-HAIEK": { orain: "diezazkizueten", lehen: "ziezazkizueten" },
    "HAIEK-HAIEI-HAIEK": { orain: "diezazkieten", lehen: "ziezazkieten" },
  };
  return {SOL_NOR,SOL_NOR_NORI_HURA,SOL_NOR_NORI_HAIEK,SOL_NOR_NORK,SOL_NOR_NORI_NORK};
})();
