export interface PokemonNames {
    English: string;
    German: string;
    French: string;
    Italian: string;
    Japanese: string;
    Korean: string;
    Spanish: string;
  }
  
  export interface PokemonStats {
    stamina: number;
    attack: number;
    defense: number;
  }
  
  export interface PokemonType {
    type: string;
    names: PokemonNames;
  }
  
  export interface MoveCombat {
    energy: number;
    power: number;
    turns: number;
    buffs: any; // Extend this if you have a specific structure for buffs
  }
  
  export interface Move {
    id: string;
    power: number;
    energy: number;
    durationMs: number;
    type: PokemonType;
    names: PokemonNames;
    combat: MoveCombat;
  }
  
  export interface PokemonAssets {
    image: string;
    shinyImage: string;
  }
  
  export interface Evolution {
    id: string;
    formId: string;
    candies: number;
    item: string | null;
    quests: any[]; // Further type this if you know the structure of quests
  }
  
  export interface AssetForm {
    form: string | null;
    costume: string | null;
    isFemale: boolean;
    image: string;
    shinyImage: string;
  }
  
  export interface Pokemon {
    id: string;
    formId: string;
    dexNr: number;
    generation: number;
    names: PokemonNames;
    stats: PokemonStats;
    primaryType: PokemonType;
    secondaryType: PokemonType;
    pokemonClass: string | null;
    quickMoves: { [key: string]: Move };
    cinematicMoves: { [key: string]: Move };
    eliteQuickMoves: Move[];
    eliteCinematicMoves: Move[];
    assets: PokemonAssets;
    regionForms: any[]; // Define further if you have additional structure
    evolutions: Evolution[];
    hasMegaEvolution: boolean;
    megaEvolutions: any[]; // Define further if you have additional structure
    assetForms: AssetForm[];
  }