const TITLE = "OsifyAI";
const TITLE_TEMPLATE = `%s - ${TITLE}`;

const TITLE_FA = "اُسیفای";
const TITLE_FA_TEMPLATE = `%s - ${TITLE_FA}`;

const getTitle = (locale: string) => {
  if (locale === "fa") {
    return TITLE_FA;
  }

  return TITLE;
};

const getTitleTemplate = (locale: string) => {
  if (locale === "fa") {
    return TITLE_FA_TEMPLATE;
  }

  return TITLE_TEMPLATE;
};

const VERSION = "5.1.0";

export { getTitleTemplate, VERSION, getTitle, TITLE, TITLE_FA };
