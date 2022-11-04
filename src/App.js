import "./App.css";
import options, { people } from "./options";
import React from "react";
import { parse, stringify } from "qs";
import { createBrowserHistory } from "history";

const App = () => {
  // from URL
  const { namesInit, tagsInit } = parse(
    new URL(document.location).hash.substring(1)
  );
  const peopleInit = people.filter((person) =>
    namesInit?.includes(person.name)
  );

  const [activeTags, setActiveTags] = React.useState(tagsInit || []);
  const [timeFilter, setTimeFilter] = React.useState(true);

  // By tags
  let existingTags = [];
  options.forEach(({ tags }) =>
    tags.forEach((tag) => {
      if (!existingTags.includes(tag)) {
        existingTags.push(tag);
      }
    })
  );

  const byActiveTags = (option) =>
    activeTags.every((tag) => option.tags.includes(tag));

  // By current time
  const currentHour = new Date().toLocaleTimeString();
  const currentDay = new Date().getDay();

  const outSpecificHoursAndDays = (option) => {
    const hours = option.timeBasedFilter?.hours;
    const days = option.timeBasedFilter?.days;
    if (!timeFilter) return true;
    if (hours) {
      return hours?.showFrom > currentHour > hours?.dontShowAfter;
    }
    if (days) {
      return days?.includes(currentDay);
    } else return true;
  };

  const hiddenOptionsCount =
    options.length - options.filter(outSpecificHoursAndDays).length;

  // By selected people's preferences
  const [selectedPeople, setSelectedPeople] = React.useState(peopleInit || []);

  const getAll = (type) => [
    ...new Set(
      selectedPeople
        .map((person) => {
          if (type === "noGoPlaces") return person.noGoPlaces;
          if (type === "noGoTags") return person.noGoTags;
          if (type === "mustTags") return person.mustTags;
          return [];
        })
        .flat()
        .filter((thing) => thing !== undefined)
    ),
  ];

  const byPeoplesNoGoTags = (option) =>
    getAll("noGoTags").every((t) => !option.tags.includes(t));

  const byPeoplesNoGoPlaces = (option) =>
    getAll("noGoPlaces").every((t) => !option.name.includes(t));

  const byPeoplesMusts = (option) =>
    getAll("mustTags").every((t) => option.tags.includes(t));

  const filteredOptions = options
    .filter(byPeoplesNoGoPlaces)
    .filter(byPeoplesNoGoTags)
    .filter(byPeoplesMusts)
    .filter(byActiveTags)
    .filter(outSpecificHoursAndDays);

  const isTagUnactive = (tag) => getAll("noGoTags").includes(tag);
  const isTagAMust = (tag) => getAll("mustTags").includes(tag);

  // Persist in URL
  // TODO: parse and read from url + maybe tinyID?
  const history = createBrowserHistory();

  const names = selectedPeople.map((person) => person.name);
  const stringiedObject = stringify({
    namesInit: names,
    tagsInit: activeTags,
  });

  React.useEffect(() => {
    history.push(`#${stringiedObject}`);
  }, [history, stringiedObject]);

  return (
    <div className="App">
      <div className="flexContainer gap">
        {people.map((person) => {
          return (
            <span
              className={selectedPeople.includes(person) ? "tag active" : "tag"}
              key={person.name}
              onClick={() =>
                setSelectedPeople(
                  selectedPeople.includes(person)
                    ? selectedPeople.filter((e) => e !== person)
                    : [...selectedPeople, person]
                )
              }
            >
              {person.name}
            </span>
          );
        })}
        <div className="button" onClick={() => setSelectedPeople([])}>
          reset
        </div>
      </div>
      <hr></hr>
      <div className="flexContainer gap">
        {existingTags.map((tag) => (
          <span
            className={
              isTagUnactive(tag)
                ? "tag disabled"
                : isTagAMust(tag)
                ? "tag active"
                : activeTags.includes(tag)
                ? "tag active"
                : "tag"
            }
            key={tag}
            onClick={() => {
              if (isTagUnactive(tag)) return;
              return setActiveTags(
                activeTags.includes(tag)
                  ? activeTags.filter((e) => e !== tag)
                  : [...activeTags, tag]
              );
            }}
          >
            {tag}
          </span>
        ))}
        <div className="button" onClick={() => setActiveTags([])}>
          reset tags
        </div>
      </div>
      <div className="flexContainer gap">
        <div className="suggestionCount">
          {filteredOptions.length}{" "}
          {filteredOptions.length === 1 ? "suggestion" : "suggestions"}
          {filteredOptions.length === 0 && " - You made it too complicated!"}
        </div>
        {filteredOptions.map((option) => (
          <div className="card" key={option.name}>
            <div className="cardTitle" key={option.name}>
              {option.name}
            </div>
            <div>{option?.hint}</div>
            <div className="flexContainer">
              {Object.entries({
                map: option?.mapLink,
                menu: option?.menuLink,
              }).map((entry) => {
                const [label, href] = entry;
                return (
                  href && (
                    <a href={href} key={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  )
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <hr></hr>
      {!!hiddenOptionsCount && (
        <>
          <div className="flexContainer gap">
            We dont't show {hiddenOptionsCount} places that are currently closed
            or overfulled
            <span className="button" onClick={() => setTimeFilter(!timeFilter)}>
              Include those places
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
