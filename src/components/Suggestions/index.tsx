import React, { useState, useEffect } from "react";

import data from "../../../server.json";
import { SuggestionList, Item, SuggestionImage, Title } from "./styles";

interface ISuggestions {
  id: number;
  title: string;
  sugg_url: string;
}

const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState<ISuggestions[]>([]);

  useEffect(() => {
    async function loadSuggestions() {
      setSuggestions(data.suggestions);
    }
    loadSuggestions();
  }, []);

  return (
    <SuggestionList horizontal>
      {suggestions.map((suggestion) => (
        <Item key={suggestion.id}>
          <SuggestionImage source={{ uri: suggestion.sugg_url }} />
          <Title>{suggestion.title}</Title>
        </Item>
      ))}
    </SuggestionList>
  );
};

export default Suggestions;
