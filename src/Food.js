import "./App.css";
import options, { people } from "./options";
import React from "react";
import { parse, stringify } from "qs";
import { createBrowserHistory } from "history";
import { getRandomElementOf } from "./utils";
import Card from "./Card";

const Food = () => {
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

  // Apply all filters
  const filteredOptions = options
    .filter(byPeoplesNoGoPlaces)
    .filter(byPeoplesNoGoTags)
    .filter(byPeoplesMusts)
    .filter(byActiveTags)
    .filter(outSpecificHoursAndDays);

  const isTagDisabled = (tag) => getAll("noGoTags").includes(tag);
  const isTagAMust = (tag) => getAll("mustTags").includes(tag);

  // Persist in URL
  // TODO shorten URL w/ tinyID?
  const history = createBrowserHistory();

  const stringiedObject = stringify({
    namesInit: selectedPeople.map((person) => person.name),
    tagsInit: activeTags,
  });

  React.useEffect(() => {
    history.push(`#${stringiedObject}`);
  }, [history, stringiedObject]);

  // feeling lucky aka. random
  const [randomVisible, setRandomVisible] = React.useState(false);
  const [fade, setFade] = React.useState(false);

  return (
    <div className="Food">
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
          <a className="mail" href="mailto:agustin.alvarez@idealo.de">
          If your name is not on the list and you want to change it, please
          contact our customer service         and inform about your food preferences.
          </a>
      </div>
      <hr></hr>
      <div className="flexContainer gap">
        <div className="suggestionCount">
          {filteredOptions.length}{" "}
          {filteredOptions.length === 1 ? "suggestion" : "suggestions"}
        </div>
      </div>
      <div className="flexContainer gap">
        {existingTags.map((tag) => (
          <span
            className={
              isTagDisabled(tag)
                ? "tag disabled"
                : isTagAMust(tag)
                ? "tag active"
                : activeTags.includes(tag)
                ? "tag active"
                : "tag"
            }
            key={tag}
            onClick={() => {
              if (isTagDisabled(tag)) return;
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
        </div>
        <div
          className="button"
          onClick={() => {
            setFade(true);
            setRandomVisible(true);
          }}
        >
          feeling lucky
        </div>
        {(randomVisible || filteredOptions.length === 0) && (
          <div
            className={fade ? "randomContainer fade" : "randomContainer"}
            onAnimationEnd={() => setFade(false)}
          >
            <h1>
              {filteredOptions.length === 0
                ? "Too complicated! Well, we were forced to choose for you. YOU MUST GO HERE >>"
                : filteredOptions.length === 1
                ? "We have ONLY ONE option. HERE YOU GO >>"
                : "Feeling lucky"}
            </h1>
            <Card
              className="random"
              option={
                getRandomElementOf(filteredOptions) ||
                getRandomElementOf(options.filter(outSpecificHoursAndDays))
              }
              onClose={() => setRandomVisible(false)}
            />
          </div>
        )}
        {filteredOptions.map((option) => (
          <Card key={option.name} option={option} />
        ))}
        {!!hiddenOptionsCount && (
          <div className="flexContainer gap card">
            We don't show {hiddenOptionsCount} places that are currently closed
            or overfulled
            <span className="button" onClick={() => setTimeFilter(!timeFilter)}>
              Include those places
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Food;
