import { useCallback, useEffect, useState } from "react";

export const usePokemons = () => {
  const [list, setList] = useState<Array<string>>([]);

  const [pokemons] = useState<string>(
    "audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon " +
      "cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig " +
      "gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune " +
      "landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine " +
      "nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz " +
      "registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon " +
      "simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix " +
      "wailord wartortle whismur wingull yamask"
  );

  const name_start_with = useCallback(
    (name: string, list: Array<string>): string => {
      console.log(list);
      for (var i = 0; i < list.length; i++) {
        const n: string = list[i];
        if (name[name.length - 1] === n[0]) {
          return n;
        }
      }
      return list[0];
    },
    []
  );

  useEffect(() => {
    let pokemonList: Array<string> = pokemons.split(" ");
    const length = pokemonList.length;
    const result: Array<string> = [];
    let acc: string = "";

    for (var i = 0; i < length; i++) {
      if (i === 0) {
        acc = pokemonList[i];
        result.push(pokemonList[i]);
        pokemonList.splice(i, 1);
      } else {
        const index_name: string = name_start_with(acc, pokemonList);
        result.push(index_name);
        pokemonList = pokemonList.filter((i: string) => {
          return i !== index_name;
        });
        acc = index_name;
      }
    }

    setList(result);
  }, [pokemons, name_start_with]);

  return {
    list,
  };
};
