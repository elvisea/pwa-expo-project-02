import React, { useState, useEffect } from "react";

import { PromoList, Item, PromoImage } from "./styles";
import data from "../../../server.json";

interface IPromotions {
  id: number;
  promo_url: string;
}

const Promotions: React.FC = () => {
  const [promotions, setPromotions] = useState<IPromotions[]>([]);

  useEffect(() => {
    async function loadPromotions() {
      setPromotions(data.promotions);
    }
    loadPromotions();
  }, []);

  return (
    <PromoList horizontal>
      {promotions.map((promo) => (
        <Item key={promo.id}>
          <PromoImage source={{ uri: promo.promo_url }} />
        </Item>
      ))}
    </PromoList>
  );
};

export default Promotions;
