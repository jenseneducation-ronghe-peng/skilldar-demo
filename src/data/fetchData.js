import Data from "./skiller.json";

function fetchSkillers() {
  const LS_KEY = "viewlist_skiller";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.skillers));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

function fetchCities() {
  const LS_KEY = "viewlist_cities";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.cities));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

function fetchRelated() {
  const LS_KEY = "viewlist_related";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.related));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}
function fetchDefinition() {
  const LS_KEY = "viewlist_definition";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.defination));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

export { fetchSkillers, fetchCities, fetchRelated, fetchDefinition };
