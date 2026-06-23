import React, { useState, useEffect, useMemo } from 'react';

// =====================================================================
// SISTEMA DE ICONOS NATIVO (A prueba de fallos, 0 dependencias externas)
// =====================================================================
const IconBase = ({ children, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
    {children}
  </svg>
);

const Icons = {
  Search: (p) => <IconBase {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></IconBase>,
  Filter: (p) => <IconBase {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></IconBase>,
  Plus: (p) => <IconBase {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></IconBase>,
  Edit: (p) => <IconBase {...p}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></IconBase>,
  Trash: (p) => <IconBase {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></IconBase>,
  Shield: (p) => <IconBase {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></IconBase>,
  User: (p) => <IconBase {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></IconBase>,
  LogOut: (p) => <IconBase {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></IconBase>,
  CheckCircle: (p) => <IconBase {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></IconBase>,
  XCircle: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></IconBase>,
  AlertTriangle: (p) => <IconBase {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></IconBase>,
  Menu: (p) => <IconBase {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></IconBase>,
  Compass: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></IconBase>,
  Chat: (p) => <IconBase {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></IconBase>,
  Settings: (p) => <IconBase {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></IconBase>,
  Globe: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconBase>,
  Lock: (p) => <IconBase {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></IconBase>,
  Send: (p) => <IconBase {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></IconBase>,
  Info: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></IconBase>,
  Eye: (p) => <IconBase {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></IconBase>,
  ChevronRight: (p) => <IconBase {...p}><polyline points="9 18 15 12 9 6"/></IconBase>,
  Star: (p) => <IconBase {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></IconBase>,
  Home: (p) => <IconBase {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconBase>,
  Pokeball: (p) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h8m4 0h8"/><circle cx="12" cy="12" r="2"/></IconBase>,
  Palette: (p) => <IconBase {...p}><path d="M12 2a10 10 0 1 0 10 10 1 1 0 0 0-1-1h-2a2 2 0 0 1-2-2 1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a2 2 0 0 1-2 2H4a1 1 0 0 0-1 1 10 10 0 0 0 9 8z"/><circle cx="7.5" cy="10.5" r=".5"/><circle cx="10.5" cy="7.5" r=".5"/><circle cx="14.5" cy="7.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/></IconBase>,
  EyeOff: (p) => <IconBase {...p}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></IconBase>,
};

// =====================================================================
// DICCIONARIOS Y CONFIGURACIONES
// =====================================================================
const BANNED_WORDS = ['groseria', 'insulto', 'inapropiado', 'violencia', 'malo', 'tonto', 'feo'];

const TYPE_TRANSLATIONS = {
  normal: 'Normal', fire: 'Fuego', water: 'Agua', electric: 'Eléctrico', grass: 'Planta',
  ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador',
  psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón',
  dark: 'Siniestro', steel: 'Acero', fairy: 'Hada'
};

const TYPE_COLORS = {
  Normal: 'bg-gray-400', Fuego: 'bg-red-500', Agua: 'bg-blue-500', Eléctrico: 'bg-yellow-400 text-yellow-900',
  Planta: 'bg-green-500', Hielo: 'bg-cyan-300 text-cyan-900', Lucha: 'bg-red-700', Veneno: 'bg-purple-500',
  Tierra: 'bg-yellow-600', Volador: 'bg-indigo-300 text-indigo-900', Psíquico: 'bg-pink-500', Bicho: 'bg-lime-500 text-lime-900',
  Roca: 'bg-yellow-800', Fantasma: 'bg-purple-700', Dragón: 'bg-indigo-600', Siniestro: 'bg-gray-800',
  Acero: 'bg-gray-500', Hada: 'bg-pink-400', Desconocido: 'bg-gray-300'
};

const GENERATIONS = ['Todas', 1, 2, 3, 4, 5, 6, 7, 8, 9];
const APP_COLORS = ['#ef4444', '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899', '#14b8a6', '#1f2937'];

// Colección completa de 27 Pokébolas
const POKEBALLS_DB = [
  { id: 1, name: "Poké Ball", img: "poke-ball", desc: "Un dispositivo estándar para atrapar Pokémon salvajes." },
  { id: 2, name: "Super Ball", img: "great-ball", desc: "Pokébola de buen rendimiento. Tiene un mayor índice de captura que la estándar." },
  { id: 3, name: "Ultra Ball", img: "ultra-ball", desc: "Una Pokébola excelente con un índice de éxito muy alto." },
  { id: 4, name: "Master Ball", img: "master-ball", desc: "La mejor Pokébola de todas. Atrapa cualquier Pokémon sin fallar nunca." },
  { id: 5, name: "Safari Ball", img: "safari-ball", desc: "Pokébola especial utilizada exclusivamente en la Zona Safari." },
  { id: 6, name: "Honor Ball", img: "premier-ball", desc: "Una Pokébola rara que se hace para conmemorar algún evento. Tiene la misma eficacia que una Poké Ball." },
  { id: 7, name: "Lujo Ball", img: "luxury-ball", desc: "Una Pokébola muy cómoda que hace que los Pokémon se encariñen rápidamente." },
  { id: 8, name: "Sana Ball", img: "heal-ball", desc: "Cura completamente los PS y el estado del Pokémon capturado al instante." },
  { id: 9, name: "Malla Ball", img: "net-ball", desc: "Una Pokébola que funciona de maravilla al intentar atrapar Pokémon de tipo Agua y Bicho." },
  { id: 10, name: "Buceo Ball", img: "dive-ball", desc: "Funciona especialmente bien al capturar Pokémon que viven bajo el agua." },
  { id: 11, name: "Nido Ball", img: "nest-ball", desc: "Funciona mejor cuanto menor sea el nivel del Pokémon salvaje objetivo." },
  { id: 12, name: "Acopio Ball", img: "repeat-ball", desc: "Funciona muy bien con Pokémon de una especie que ya has atrapado antes." },
  { id: 13, name: "Turno Ball", img: "timer-ball", desc: "Su eficacia de captura aumenta considerablemente a medida que pasan los turnos en el combate." },
  { id: 14, name: "Ocaso Ball", img: "dusk-ball", desc: "Facilita la captura de noche o en lugares oscuros como cuevas profundas." },
  { id: 15, name: "Veloz Ball", img: "quick-ball", desc: "Si se usa al inicio del combate, el índice de éxito aumenta drásticamente." },
  { id: 16, name: "Cebo Ball", img: "lure-ball", desc: "Excelente para atrapar Pokémon que aparecen al pescar con caña." },
  { id: 17, name: "Nivel Ball", img: "level-ball", desc: "Funciona mejor cuanto menor sea el nivel del objetivo respecto al de tu Pokémon." },
  { id: 18, name: "Luna Ball", img: "moon-ball", desc: "Especial para atrapar Pokémon que evolucionan con la Piedra Lunar." },
  { id: 19, name: "Peso Ball", img: "heavy-ball", desc: "Es ideal para atrapar Pokémon que son extremadamente pesados (Ej: Snorlax, Golem)." },
  { id: 20, name: "Rapid Ball", img: "fast-ball", desc: "Facilita la captura de Pokémon que son muy rápidos o tienden a huir del combate." },
  { id: 21, name: "Amigo Ball", img: "friend-ball", desc: "Hace que el Pokémon atrapado se vuelva más amigable y leal a ti de inmediato." },
  { id: 22, name: "Amor Ball", img: "love-ball", desc: "Funciona perfecto si el Pokémon es de la misma especie pero del sexo opuesto al tuyo." },
  { id: 23, name: "Competi Ball", img: "sport-ball", desc: "Una Pokébola especial utilizada exclusivamente en el Concurso de Captura de Bichos." },
  { id: 24, name: "Parque Ball", img: "park-ball", desc: "Pokébola utilizada en el Parque Compi. Tiene un 100% de éxito garantizado." },
  { id: 25, name: "Ensueño Ball", img: "dream-ball", desc: "Atrapa fácilmente a cualquier Pokémon salvaje que esté dormido." },
  { id: 26, name: "Gloria Ball", img: "cherish-ball", desc: "Una Pokébola muy rara que contiene a un Pokémon distribuido en un evento especial." },
  { id: 27, name: "Ente Ball", img: "beast-ball", desc: "Diseñada científicamente para atrapar Ultraentes. Es muy poco efectiva con Pokémon normales." }
];

const getGeneration = (id) => {
  if (id <= 151) return 1; if (id <= 251) return 2; if (id <= 386) return 3;
  if (id <= 493) return 4; if (id <= 649) return 5; if (id <= 721) return 6;
  if (id <= 809) return 7; if (id <= 905) return 8; return 9;
};

// =====================================================================
// COMPONENTE: TARJETA DE POKÉMON (Carga Descripciones de la API)
// =====================================================================
const PokemonCard = ({ pokemon, filterType, currentUser, onViewDetails, onEdit, onDelete, themeColor }) => {
  const [details, setDetails] = useState({ types: [], image: '', description: '', history: '' });

  useEffect(() => {
    let isMounted = true;
    if (!pokemon.isCustom && details.types.length === 0) {
      Promise.all([
        fetch(pokemon.url).then(res => res.json()).catch(() => null),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`).then(res => res.json()).catch(() => null)
      ])
      .then(([baseData, speciesData]) => {
        if (isMounted) {
          const types = baseData?.types?.map(t => TYPE_TRANSLATIONS[t.type.name] || 'Desconocido') || ['Desconocido'];
          const image = baseData?.sprites?.other?.['official-artwork']?.front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
          
          let description = "Categoría desconocida";
          let history = "Historia no disponible en la base de datos oficial.";

          if (speciesData) {
            const esGenus = speciesData.genera?.find(g => g.language.name === 'es');
            if (esGenus) description = esGenus.genus;

            const esFlavor = speciesData.flavor_text_entries?.find(e => e.language.name === 'es');
            if (esFlavor) history = esFlavor.flavor_text.replace(/[\n\f\r]/g, " "); 
            else {
               const enFlavor = speciesData.flavor_text_entries?.find(e => e.language.name === 'en');
               if (enFlavor) history = enFlavor.flavor_text.replace(/[\n\f\r]/g, " ");
            }
          }
          setDetails({ types, image, description, history });
        }
      });
    }
    return () => { isMounted = false; };
  }, [pokemon.url, pokemon.isCustom, pokemon.id, details.types.length]);

  const displayTypes = pokemon.customTypes || (details.types.length > 0 ? details.types : ['Cargando...']);
  const displayImage = pokemon.image || details.image || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png`;
  const displayDescription = pokemon.customDescription || details.description || "Buscando categoría...";
  const displayHistory = pokemon.customHistory || details.history || "Buscando historia oficial...";

  if (filterType !== 'Todos' && displayTypes[0] !== 'Cargando...' && !displayTypes.includes(filterType)) return null; 

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all flex flex-col relative group">
      {(pokemon.isEdited || pokemon.isCustom) && (
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-yellow-400 border-l-transparent z-10" title="DB Local Editada"></div>
      )}
      
      <div className="bg-gray-50 dark:bg-gray-900 aspect-square p-2 md:p-4 relative flex justify-center items-center">
        <span className="absolute top-2 left-2 text-gray-400 font-mono font-bold text-[10px] md:text-xs">#{pokemon.dexNum.toString().padStart(4, '0')}</span>
        <img src={displayImage} alt={pokemon.name} className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-1">
        <h3 className="text-sm md:text-lg font-bold text-gray-800 dark:text-white capitalize truncate">{pokemon.name}</h3>
        <p className="text-[10px] md:text-xs text-gray-400 mb-1 font-bold uppercase" style={{color: themeColor}}>{displayDescription}</p>
        
        <div className="flex flex-wrap gap-1 mt-1 mb-2">
          {displayTypes.map((t, i) => (
            <span key={i} className={`${TYPE_COLORS[t] || 'bg-gray-500'} text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider`}>{t}</span>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs line-clamp-2 md:line-clamp-3 flex-1">{displayHistory}</p>
        
        <div className="flex justify-end gap-1 pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
          <button onClick={() => onViewDetails({...pokemon, displayTypes, displayImage, displayDescription, displayHistory})} className="p-1.5 md:p-2 text-green-600 hover:bg-green-50 dark:hover:bg-gray-700 rounded-md transition-colors" title="Archivo Biológico y Evoluciones"><Icons.Eye className="w-4 h-4 md:w-5 md:h-5" /></button>
          {currentUser && (currentUser.isApproved || currentUser.role === 'admin') && (
            <button onClick={() => onEdit(pokemon, displayTypes, displayImage, displayDescription, displayHistory)} className="p-1.5 md:p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors" title="Editar / Corregir"><Icons.Edit className="w-4 h-4 md:w-5 md:h-5" /></button>
          )}
          {currentUser?.role === 'admin' && (pokemon.isEdited || pokemon.isCustom) && (
            <button onClick={() => onDelete(pokemon)} className="p-1.5 md:p-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-md transition-colors" title="Borrar Edición"><Icons.Trash className="w-4 h-4 md:w-5 md:h-5" /></button>
          )}
        </div>
      </div>
    </div>
  );
};

// =====================================================================
// COMPONENTE: VISUALIZADOR CON NAVEGACIÓN DE EVOLUCIONES
// =====================================================================
const PokemonDetails = ({ pokemon, themeColor, onNavigate, localEdits }) => {
  const [evoChain, setEvoChain] = useState([]);
  const [megaChain, setMegaChain] = useState([]);
  const [loadingEvo, setLoadingEvo] = useState(true);

  const fetchAndNavigate = async (idOrName, isMega = false) => {
    setLoadingEvo(true);
    try {
      const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
      if (!pokeRes.ok) throw new Error("Pokemon no encontrado");
      const pokeData = await pokeRes.json();
      
      const speciesId = pokeData.species ? pokeData.species.url.split('/').filter(Boolean).pop() : pokeData.id;
      const specRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${speciesId}`);
      const specData = specRes.ok ? await specRes.json() : null;
      
      let types = pokeData.types.map(t => TYPE_TRANSLATIONS[t.type.name] || 'Desconocido');
      let image = pokeData.sprites?.other?.['official-artwork']?.front_default || pokeData.sprites?.front_default;
      
      let desc = "Categoría desconocida";
      let hist = "Historia no disponible.";
      
      if (specData) {
        const esGen = specData.genera?.find(g => g.language.name === 'es');
        if (esGen) desc = esGen.genus;
        
        const esFlav = specData.flavor_text_entries?.find(e => e.language.name === 'es');
        const enFlav = specData.flavor_text_entries?.find(e => e.language.name === 'en');
        const entry = esFlav || enFlav;
        if (entry) hist = entry.flavor_text.replace(/[\n\f\r]/g, " ");
      }

      if (isMega) {
        desc = pokeData.name.includes('-gmax') ? 'Forma Gigamax' : 'Mega Evolución / Variante Especial';
        hist = `El inmenso poder de esta transformación lleva sus habilidades al límite. ${hist}`;
      }

      if (localEdits && localEdits[pokeData.id]) {
         const edit = localEdits[pokeData.id];
         if(edit.customTypes) types = edit.customTypes;
         if(edit.customDescription) desc = edit.customDescription;
         if(edit.customHistory) hist = edit.customHistory;
         if(edit.image) image = edit.image;
      }

      onNavigate({
        id: pokeData.id,
        dexNum: specData ? specData.id : pokeData.id,
        name: pokeData.name.replace(/-/g, ' '),
        url: `https://pokeapi.co/api/v2/pokemon/${pokeData.id}`,
        isCustom: false,
        displayTypes: types,
        displayImage: image,
        displayDescription: desc,
        displayHistory: hist,
        isEdited: !!(localEdits && localEdits[pokeData.id])
      });

    } catch (e) {
      console.error("Error al navegar:", e);
    } finally {
      setLoadingEvo(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchEvo = async () => {
      setLoadingEvo(true);
      if (pokemon.isCustom) {
        if(isMounted) { setEvoChain([{ name: pokemon.name, image: pokemon.displayImage }]); setLoadingEvo(false); }
        return;
      }
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.dexNum}`);
        if(!res.ok) throw new Error("Not Found");
        const data = await res.json();
        
        if (data.evolution_chain) {
          const evoRes = await fetch(data.evolution_chain.url);
          const evoData = await evoRes.json();
          let chain = [];
          let curr = evoData.chain;
          while (curr && isMounted) {
            const id = curr.species.url.split('/').filter(Boolean).pop();
            chain.push({ 
               id: id,
               name: curr.species.name, 
               image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` 
            });
            curr = curr.evolves_to && curr.evolves_to.length > 0 ? curr.evolves_to[0] : null;
          }
          if(isMounted) setEvoChain(chain);
        }

        let megas = [];
        if (data.varieties) {
          for (let v of data.varieties) {
            if (!v.is_default && (v.pokemon.name.includes('-mega') || v.pokemon.name.includes('-primal') || v.pokemon.name.includes('-gmax'))) {
              const pId = v.pokemon.url.split('/').filter(Boolean).pop();
              megas.push({
                rawName: v.pokemon.name,
                name: v.pokemon.name.replace(/-/g, ' '),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
              });
            }
          }
        }
        if(isMounted) setMegaChain(megas);

      } catch {
        if(isMounted) setEvoChain([{ name: pokemon.name, image: pokemon.displayImage }]);
      } finally {
        if(isMounted) setLoadingEvo(false);
      }
    };
    fetchEvo();
    return () => { isMounted = false; };
  }, [pokemon]);

  return (
    <div className="p-4 md:p-6 space-y-6 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative">
        {loadingEvo && (
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm z-20 flex items-center justify-center rounded-xl">
             <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg flex items-center gap-3">
               <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
               <span className="font-bold dark:text-white">Analizando Secuencia...</span>
             </div>
          </div>
        )}
        <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 flex shrink-0 justify-center items-center shadow-inner relative">
          {(pokemon.isEdited || pokemon.isCustom) && <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] px-2 py-0.5 rounded-full font-bold">DB Local</span>}
          <img src={pokemon.displayImage} className="max-w-full max-h-full object-contain drop-shadow-md" alt={pokemon.name} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black capitalize dark:text-white">#{pokemon.dexNum} {pokemon.name}</h2>
          <p className="text-sm font-bold uppercase tracking-wider mb-2 mt-1 opacity-80" style={{color: themeColor}}>{pokemon.displayDescription}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {pokemon.displayTypes.map((t, i) => (
              <span key={i} className={`${TYPE_COLORS[t] || 'bg-gray-500'} text-white text-xs md:text-sm px-3 py-1 rounded-full uppercase font-bold tracking-wider`}>{t}</span>
            ))}
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-3 md:p-4 rounded-lg border-l-4" style={{borderColor: themeColor}}>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed italic text-left">
              "{pokemon.displayHistory}"
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <span style={{color: themeColor}}><Icons.Compass className="w-5 h-5"/></span> Cadena Genética Evolutiva
        </h3>
        {loadingEvo ? (
           <p className="text-sm text-gray-500 text-center py-4">Sincronizando con los servidores...</p>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 overflow-x-auto py-2 px-2">
            {evoChain.map((evo, i) => (
              <React.Fragment key={`evo-${i}`}>
                <div 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => fetchAndNavigate(evo.id, false)}
                  title={`Ver datos de ${evo.name}`}
                >
                  <div className={`w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center p-3 group-hover:scale-110 transition-all ${pokemon.name.toLowerCase() === evo.name.toLowerCase() ? 'border-4' : 'border-2 border-transparent'}`} style={{borderColor: pokemon.name.toLowerCase() === evo.name.toLowerCase() ? themeColor : ''}}>
                     <img src={evo.image} alt={evo.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-xs md:text-sm font-bold capitalize mt-3 dark:text-gray-300 group-hover:text-blue-500 transition-colors">{evo.name}</span>
                </div>
                {i < evoChain.length - 1 && <span className="hidden sm:block text-gray-300"><Icons.ChevronRight className="w-6 h-6"/></span>}
                {i < evoChain.length - 1 && <span className="sm:hidden rotate-90 text-gray-300 my-1"><Icons.ChevronRight className="w-6 h-6"/></span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {!loadingEvo && megaChain.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-100 dark:border-gray-700 mt-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <span style={{color: themeColor}}><Icons.Star className="w-5 h-5"/></span> Variantes y Mega Evoluciones
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 overflow-x-auto py-2 px-2">
            {megaChain.map((mega, i) => (
              <div 
                key={`mega-${i}`} 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => fetchAndNavigate(mega.rawName, true)}
                title={`Analizar forma ${mega.name}`}
              >
                <div className={`w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 flex items-center justify-center p-3 group-hover:scale-110 transition-all ${pokemon.name.toLowerCase() === mega.name.toLowerCase() ? 'border-blue-500' : 'border-yellow-300'}`}>
                    <img src={mega.image} alt={mega.name} className="max-w-full max-h-full object-contain drop-shadow-xl" />
                </div>
                <span className="text-xs md:text-sm font-bold capitalize mt-3 dark:text-gray-300 text-center max-w-[120px] group-hover:text-blue-500 transition-colors">{mega.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// =====================================================================
// APLICACIÓN PRINCIPAL
// =====================================================================
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState('#ef4444');
  const [activeTab, setActiveTab] = useState('home'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpenPC, setIsSidebarOpenPC] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [contentModeActive, setContentModeActive] = useState(true);

  // Estados Base de Datos
  const [users, setUsers] = useState([{ 
    email: 'admin@pokedex.com', password: 'admin', role: 'admin', isApproved: true, birthDate: '1990-01-01',
    profile: { name: 'Profesor Oak', bio: 'Investigador en Jefe.', avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png' }
  }]);
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([{ id: 1, user: 'Profesor Oak', text: '¡Bienvenidos al entorno seguro!', time: '10:00' }]);
  
  const [apiPokemons, setApiPokemons] = useState([]); 
  const [customPokemons, setCustomPokemons] = useState([]); 
  const [localEdits, setLocalEdits] = useState({});   
  
  // Controles
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGen, setFilterGen] = useState('Todas');
  const [filterType, setFilterType] = useState('Todos');
  const [page, setPage] = useState(1);
  const itemsPerPage = 40;

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPokemonModal, setShowPokemonModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [editingPokemon, setEditingPokemon] = useState(null); 
  const [selectedDetails, setSelectedDetails] = useState(null);
  
  // Formularios
  const [authForm, setAuthForm] = useState({ isLogin: true, email: '', password: '', birthDate: '' });
  const [pokeForm, setPokeForm] = useState({ dexNum: '', name: '', description: '', history: '', type1: 'Normal', type2: 'Ninguno', generation: 1, image: '' });
  const [chatInput, setChatInput] = useState('');
  const [formError, setFormError] = useState('');

  // 1. CARGA INICIAL
  useEffect(() => {
    let isMounted = true;
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
      .then(r => r.json())
      .then(data => {
        if(isMounted){
          setApiPokemons(data.results.map((p, i) => ({ id: i + 1, dexNum: i + 1, name: p.name, url: p.url, generation: getGeneration(i + 1), isCustom: false })));
          setIsLoading(false);
        }
      })
      .catch(() => { if(isMounted) setIsLoading(false); });
    return () => { isMounted = false; };
  }, []);

  const combinedPokemons = useMemo(() => {
    return [...apiPokemons, ...customPokemons].sort((a, b) => a.dexNum - b.dexNum).map(p => localEdits[p.id] ? { ...p, ...localEdits[p.id], isEdited: true } : p);
  }, [apiPokemons, customPokemons, localEdits]);

  const filteredPokemons = useMemo(() => {
    return combinedPokemons.filter(p => {
      const matchName = (p.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || p.dexNum.toString() === searchTerm;
      const matchGen = filterGen === 'Todas' || p.generation === parseInt(filterGen);
      return matchName && matchGen; 
    });
  }, [combinedPokemons, searchTerm, filterGen]);
  
  const displayedPokemons = filteredPokemons.slice(0, page * itemsPerPage);

  // 2. LÓGICA GENERAL
  const handleAuth = (e) => {
    e.preventDefault();
    if (authForm.isLogin) {
      const user = users.find(u => u.email === authForm.email && u.password === authForm.password);
      if (user) { setCurrentUser(user); setShowAuthModal(false); } else setFormError('Credenciales incorrectas');
    } else {
      if(!authForm.birthDate) return setFormError('Falta nacimiento.');
      let age = new Date().getFullYear() - new Date(authForm.birthDate).getFullYear();
      if (age < 18) return setFormError('Debes ser +18.');
      if (users.find(u => u.email === authForm.email)) return setFormError('Correo registrado.');
      const newUser = { email: authForm.email, password: authForm.password, role: 'user', isApproved: false, profile: { name: `Entrenador${Math.floor(Math.random() * 100)}`, bio: '', avatar: '' } };
      setUsers([...users, newUser]); setCurrentUser(newUser); setShowAuthModal(false);
    }
  };

  const handleSavePokemon = (e) => {
    e.preventDefault();
    if (!currentUser?.isApproved && currentUser?.role !== 'admin') return setFormError('Sin permisos.');
    if (contentModeActive && (BANNED_WORDS.some(w => pokeForm.description.toLowerCase().includes(w)) || BANNED_WORDS.some(w => pokeForm.history.toLowerCase().includes(w)))) return setFormError('Filtro familiar activo.');
    
    const types = pokeForm.type2 === 'Ninguno' ? [pokeForm.type1] : [pokeForm.type1, pokeForm.type2];
    if (editingPokemon) {
      setLocalEdits(prev => ({ ...prev, [editingPokemon.id]: { name: pokeForm.name, dexNum: parseInt(pokeForm.dexNum), customDescription: pokeForm.description, customHistory: pokeForm.history, customTypes: types, image: pokeForm.image || editingPokemon.displayImage } }));
      
      if (selectedDetails && selectedDetails.id === editingPokemon.id) {
         setSelectedDetails(prev => ({...prev, name: pokeForm.name, displayDescription: pokeForm.description, displayHistory: pokeForm.history, displayTypes: types, isEdited: true}));
      }
    } else {
      setCustomPokemons([...customPokemons, { id: `custom-${Date.now()}`, dexNum: parseInt(pokeForm.dexNum), name: pokeForm.name, customTypes: types, generation: parseInt(pokeForm.generation), image: pokeForm.image || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png', customDescription: pokeForm.description, customHistory: pokeForm.history, isCustom: true }]);
    }
    setShowPokemonModal(false);
  };

  const executeDelete = (pokemon) => {
    if (pokemon.isCustom) setCustomPokemons(prev => prev.filter(p => p.id !== pokemon.id));
    else { const newEdits = {...localEdits}; delete newEdits[pokemon.id]; setLocalEdits(newEdits); }
    if (selectedDetails && selectedDetails.id === pokemon.id) setShowDetailsModal(false); 
  };

  const changeTab = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  // 3. RENDERIZADO DE VISTAS
  const renderView = () => {
    
    // PESTAÑA: INICIO (HOME)
    if (activeTab === 'home') return (
      <div className="flex flex-col items-center justify-center space-y-8 min-h-[80vh] px-4">
         <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center border border-gray-100 dark:border-gray-700 max-w-4xl text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 opacity-10 text-gray-500"><Icons.Pokeball className="w-64 h-64" /></div>
            
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-inner border-[6px] mb-6 z-10" style={{borderColor: themeColor, backgroundColor: themeColor}}>
              <Icons.Pokeball className="w-16 h-16 md:w-20 md:h-20 text-white"/>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight dark:text-white mb-4 z-10">Poket-Dex</h1>
            <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 font-medium z-10 max-w-lg">
              La enciclopedia inteligente y segura para entrenadores. Explora, descubre y colabora.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 w-full z-10">
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-md hover:scale-125 transition-transform" />
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard" className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-md hover:scale-125 transition-transform" />
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-md hover:scale-125 transition-transform" />
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" alt="Squirtle" className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-md hover:scale-125 transition-transform" />
            </div>

            <button onClick={() => changeTab('explorer')} className="mt-12 px-8 py-3.5 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-transform active:scale-95 text-base md:text-lg z-10 flex items-center gap-2" style={{backgroundColor: themeColor}}>
              <Icons.Compass className="w-6 h-6"/> Comenzar a Explorar
            </button>
         </div>
      </div>
    );

    // PESTAÑA: POKÉBOLAS
    if (activeTab === 'pokeballs') return (
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center gap-2">
           <Icons.Pokeball className="w-8 h-8" style={{color: themeColor}}/> Catálogo de Pokébolas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {POKEBALLS_DB.map(ball => (
            <div key={ball.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition-all group">
               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${ball.img}.png`} className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md mb-4 group-hover:-translate-y-2 transition-transform" alt={ball.name}/>
               <h3 className="font-black text-lg md:text-xl dark:text-white mb-2" style={{color: themeColor}}>{ball.name}</h3>
               <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{ball.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );

    // PESTAÑA: EXPLORADOR
    if (activeTab === 'explorer') return (
      <div className="space-y-4 md:space-y-6">
        <div className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-gray-400 hidden sm:block"><Icons.Filter className="w-5 h-5"/></span>
            <select value={filterGen} onChange={e => {setFilterGen(e.target.value); setPage(1);}} className="bg-gray-50 dark:bg-gray-700 border-none rounded-lg p-2 dark:text-white outline-none text-sm w-full sm:w-auto focus:ring-2" style={{'--tw-ring-color': themeColor}}><option value="Todas">Todas Gens</option>{[1,2,3,4,5,6,7,8,9].map(g => <option key={g} value={g}>Gen {g}</option>)}</select>
            <select value={filterType} onChange={e => {setFilterType(e.target.value); setPage(1);}} className="bg-gray-50 dark:bg-gray-700 border-none rounded-lg p-2 dark:text-white outline-none text-sm w-full sm:w-auto focus:ring-2" style={{'--tw-ring-color': themeColor}}><option value="Todos">Todos Tipos</option>{Object.values(TYPE_TRANSLATIONS).map(t => <option key={t}>{t}</option>)}</select>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 flex items-center justify-center sm:justify-end font-bold">{filteredPokemons.length} Resultados</div>
        </div>

        {isLoading ? <div className="text-center py-20 text-gray-400 text-sm animate-pulse font-medium">Obteniendo 1025 registros de la Base de Datos...</div> : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {displayedPokemons.map(p => (
                <PokemonCard 
                  key={p.id} 
                  pokemon={p} 
                  filterType={filterType} 
                  themeColor={themeColor}
                  currentUser={currentUser} 
                  onViewDetails={d => {setSelectedDetails(d); setShowDetailsModal(true);}} 
                  onEdit={(poke, types, img, desc, hist) => {
                    setEditingPokemon(poke); 
                    setPokeForm({
                      dexNum: poke.dexNum, name: poke.name, 
                      description: desc || poke.description || '', history: hist || poke.history || '', 
                      type1: types[0]||'Normal', type2: types[1]||'Ninguno', generation: poke.generation, image: img
                    }); 
                    setShowPokemonModal(true);
                  }} 
                  onDelete={executeDelete} 
                />
              ))}
            </div>
            {page * itemsPerPage < filteredPokemons.length && <div className="text-center mt-6 pb-6"><button onClick={() => setPage(page + 1)} className="px-8 py-3 rounded-full text-white font-bold shadow-md w-full sm:w-auto transition-transform active:scale-95" style={{backgroundColor: themeColor}}>Cargar Más Entradas</button></div>}
          </>
        )}
      </div>
    );

    // PESTAÑA: CHAT
    if (activeTab === 'chat') return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full min-h-[60vh] max-h-[80vh]">
        <div className="p-3 md:p-4 border-b dark:border-gray-700 flex justify-between"><span className="font-bold dark:text-white" style={{color: themeColor}}>Comunidad</span>{contentModeActive && <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold flex items-center gap-1"><Icons.Shield className="w-3 h-3"/> Filtro Seguro</span>}</div>
        <div className="flex-1 p-3 overflow-y-auto space-y-4">
          {messages.map(m => (
            <div key={m.id} className="flex flex-col"><div className="flex items-baseline gap-2"><span className="font-bold text-xs md:text-sm dark:text-white">{m.user}</span><span className="text-[10px] text-gray-400">{m.time}</span></div><div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none w-fit max-w-[85%] dark:text-gray-200 text-xs md:text-sm">{m.text}</div></div>
          ))}
        </div>
        <form onSubmit={e => { e.preventDefault(); if(!currentUser?.isApproved || !chatInput.trim()) return; setMessages([...messages, {id: Date.now(), user: currentUser.profile.name, text: chatInput, time: 'Ahora'}]); setChatInput(''); }} className="p-3 border-t dark:border-gray-700 flex gap-2">
          <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Escribe tu mensaje..." disabled={!currentUser} className="flex-1 bg-gray-50 dark:bg-gray-900 border-none rounded-lg p-3 text-sm dark:text-white outline-none focus:ring-2" style={{'--tw-ring-color': themeColor}} />
          <button type="submit" disabled={!currentUser} className="text-white p-3 rounded-lg" style={{backgroundColor: themeColor}}><Icons.Send className="w-5 h-5"/></button>
        </form>
      </div>
    );

    // PESTAÑA: PERFIL
    if (activeTab === 'profile') return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-5 md:p-8 space-y-6 shadow-sm border border-gray-100 dark:border-gray-700">
        {!currentUser ? <div className="text-center py-10 font-bold text-gray-400">Inicia sesión primero.</div> : (
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 bg-gray-100 dark:bg-gray-700 overflow-hidden shadow-inner" style={{borderColor: themeColor}}>{currentUser.profile.avatar ? <img src={currentUser.profile.avatar} className="w-full h-full object-cover"/> : <span className="text-gray-400 p-8 block"><Icons.User className="w-full h-full"/></span>}</div>
              <input type="url" placeholder="Pega el URL de tu Foto" value={currentUser.profile.avatar} onChange={e => setCurrentUser({...currentUser, profile: {...currentUser.profile, avatar: e.target.value}})} className="w-full max-w-[200px] text-[10px] md:text-xs border rounded-md p-2 dark:bg-gray-900 dark:text-white text-center focus:ring-2" style={{'--tw-ring-color': themeColor}} />
            </div>
            <div className="flex-1 w-full space-y-4">
              <div><label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Apodo Entrenador</label><input type="text" value={currentUser.profile.name} onChange={e => setCurrentUser({...currentUser, profile: {...currentUser.profile, name: e.target.value}})} className="w-full text-lg md:text-xl font-bold bg-gray-50 dark:bg-gray-900 border rounded-lg p-3 dark:text-white outline-none focus:ring-2" style={{'--tw-ring-color': themeColor}} /></div>
              <div><label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Biografía</label><textarea value={currentUser.profile.bio} onChange={e => setCurrentUser({...currentUser, profile: {...currentUser.profile, bio: e.target.value}})} className="w-full text-sm bg-gray-50 dark:bg-gray-900 border rounded-lg p-3 dark:text-white outline-none h-24 resize-none focus:ring-2" style={{'--tw-ring-color': themeColor}} /></div>
            </div>
          </div>
        )}
      </div>
    );

    // PESTAÑA: AJUSTES
    if (activeTab === 'settings') return (
      <div className="max-w-3xl mx-auto space-y-6 pb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold flex items-center gap-2 mb-4 dark:text-white border-b dark:border-gray-700 pb-3"><span className="text-blue-500"><Icons.Palette className="w-5 h-5"/></span> Apariencia</h3>
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 text-sm dark:text-white"><span>Modo Oscuro</span><button onClick={() => setIsDarkMode(!isDarkMode)} className={`w-12 h-6 rounded-full p-1 transition-colors ${isDarkMode?'bg-blue-600':'bg-gray-300'}`}><div className={`w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode?'translate-x-6':'translate-x-0'}`}/></button></div>
          <div className="flex flex-wrap gap-3">{APP_COLORS.map(c => <button key={c} onClick={() => setThemeColor(c)} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md flex justify-center items-center hover:scale-110 transition-transform" style={{backgroundColor: c}}>{themeColor===c && <span className="text-white"><Icons.CheckCircle className="w-6 h-6"/></span>}</button>)}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
          <h3 className="font-bold flex items-center gap-2 mb-2 dark:text-white border-b dark:border-gray-700 pb-3"><span className="text-red-500"><Icons.Shield className="w-5 h-5"/></span> Privacidad</h3>
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-sm dark:text-white"><span>Filtro Seguro (Censura)</span><button onClick={() => setContentModeActive(!contentModeActive)} className={`w-12 h-6 rounded-full p-1 ${contentModeActive?'bg-green-500':'bg-red-500'}`}><div className={`w-4 h-4 bg-white rounded-full transition-transform ${contentModeActive?'translate-x-6':'translate-x-0'}`}/></button></div>
        </div>
        {currentUser?.role === 'admin' && (
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-5 md:p-6 rounded-xl border border-yellow-200 shadow-sm">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-500 mb-4 flex items-center gap-2">Admin Panel</h3>
            {users.filter(u => !u.isApproved && u.role !== 'admin').map(u => (
              <div key={u.email} className="flex flex-col sm:flex-row justify-between sm:items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-xs md:text-sm dark:text-white gap-2 border border-yellow-100">
                <span className="font-mono">{u.email}</span><button onClick={() => setUsers(users.map(user => user.email === u.email ? { ...user, isApproved: true } : user))} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">Aprobar Usuario</button>
              </div>
            ))}
            {users.filter(u => !u.isApproved && u.role !== 'admin').length === 0 && <p className="text-sm text-yellow-600">Sistema Limpio. No hay pendientes.</p>}
          </div>
        )}
      </div>
    );

    // PESTAÑA: COPYRIGHT / MISIÓN
    if (activeTab === 'about') return (
      <div className="max-w-4xl mx-auto space-y-6 pb-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="p-8 md:p-12 text-center text-white relative" style={{backgroundColor: themeColor}}>
            <span className="flex justify-center mb-3 opacity-90 drop-shadow-md"><Icons.Compass className="w-16 h-16 md:w-20 md:h-20" /></span>
            <h2 className="text-3xl md:text-5xl font-black">Poket-Dex</h2>
            <p className="mt-2 opacity-90 font-medium text-lg">Arquitectura NoSQL Multiplataforma</p>
          </div>
          <div className="p-6 md:p-10 space-y-6 text-left dark:text-white">
            <div><h3 className="font-bold text-xl mb-2 flex items-center gap-2"><Icons.Shield className="w-6 h-6 text-blue-500"/> Misión Corporativa</h3><p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">Proveer infraestructura segura impulsada por bases de datos NoSQL para un entorno colaborativo libre de toxicidad, conectando entrenadores e investigadores mediante verificación estricta.</p></div>
            <div><h3 className="font-bold text-xl mb-2 flex items-center gap-2"><Icons.Globe className="w-6 h-6 text-purple-500"/> Visión a Futuro</h3><p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">Convertirnos en la enciclopedia interactiva mundial de referencia por nuestra velocidad de carga diferida, arquitectura inquebrantable y opciones visuales personalizables.</p></div>
          </div>
          
          <hr className="border-gray-100 dark:border-gray-700 mx-10"/>
          
          {/* ========================================================== */}
          {/* SECCIÓN COPYRIGHT Y DESARROLLADORES (Para que editen aquí) */}
          {/* ========================================================== */}
          <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-800">
             <h3 className="font-black text-xl md:text-2xl mb-6 text-center dark:text-white flex justify-center items-center gap-2"><Icons.User className="w-6 h-6"/> Equipo de Desarrollo</h3>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                
                {/* TARJETA ESTUDIANTE 1 */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl flex items-center gap-4 flex-1 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                   <div className="w-16 h-16 shrink-0 rounded-full bg-gray-200 overflow-hidden border-2" style={{borderColor: themeColor}}>
                      <img src="https://ui-avatars.com/api/?name=Ingresa+Nombre&background=random" alt="Estudiante 1" className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="font-bold text-lg dark:text-white">Nombre Estudiante 1</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Ingeniería en Ciberseguridad</p>
                     <p className="text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded inline-block font-bold">Arquitecto Base de Datos</p>
                   </div>
                </div>

                {/* TARJETA ESTUDIANTE 2 */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl flex items-center gap-4 flex-1 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                   <div className="w-16 h-16 shrink-0 rounded-full bg-gray-200 overflow-hidden border-2" style={{borderColor: themeColor}}>
                      <img src="https://ui-avatars.com/api/?name=Ingresa+Nombre2&background=random" alt="Estudiante 2" className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="font-bold text-lg dark:text-white">Nombre Estudiante 2</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Ingeniería en Ciberseguridad</p>
                     <p className="text-[10px] bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded inline-block font-bold">Líder de Desarrollo Seguro</p>
                   </div>
                </div>

             </div>
          </div>
          
          <div className="bg-gray-900 text-gray-400 p-5 text-xs text-center font-medium">
             &copy; {new Date().getFullYear()} Poket-Dex. Proyecto Académico Asignatura TI3032. <br className="sm:hidden" /> Todos los derechos reservados.
          </div>
        </div>
      </div>
    );

    return null;
  };

  // --- LAYOUT ABSOLUTO CORRECTO PARA MODO OSCURO ---
  return (
    <div className={`${isDarkMode ? 'dark' : ''} font-sans`}>
      <div className="fixed inset-0 flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden transition-colors duration-300">
        
        {/* SIDEBAR RESPONSIVO */}
        {isMobileMenuOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />}
        
        <div className={`fixed md:relative z-50 w-[75vw] max-w-[280px] md:max-w-none h-full bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${isSidebarOpenPC ? 'md:w-64' : 'md:w-20'} flex flex-col shrink-0`}>
          <div className="h-16 flex items-center justify-between px-4 shrink-0 shadow-sm" style={{backgroundColor: themeColor}}>
            {(isSidebarOpenPC || isMobileMenuOpen) && <span className="text-white font-black tracking-widest text-lg">PKDX</span>}
            <button onClick={() => setIsSidebarOpenPC(!isSidebarOpenPC)} className="hidden md:block text-white p-1 hover:bg-white/20 rounded"><Icons.Menu/></button>
            <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-white p-1 hover:bg-white/20 rounded"><Icons.XCircle/></button>
          </div>
          <div className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto">
            {/* MENU DE OPCIONES */}
            {[
              { id: 'home', icon: Icons.Home, label: 'Inicio' },
              { id: 'explorer', icon: Icons.Search, label: 'Explorador' },
              { id: 'pokeballs', icon: Icons.Pokeball, label: 'Pokébolas' },
              { id: 'chat', icon: Icons.Chat, label: 'Foro Seguro' }, 
              { id: 'profile', icon: Icons.User, label: 'Mi Perfil' }, 
              { id: 'settings', icon: Icons.Settings, label: 'Ajustes App' }, 
              { id: 'about', icon: Icons.Info, label: 'Copyright / Misión' }
            ].map(item => (
              <button key={item.id} onClick={() => changeTab(item.id)} className={`w-full flex items-center gap-4 p-3.5 rounded-xl transition-all ${activeTab === item.id ? 'text-white font-bold shadow-md' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium'}`} style={activeTab === item.id ? {backgroundColor: themeColor} : {}}>
                <span className="shrink-0"><item.icon/></span>
                {(isSidebarOpenPC || isMobileMenuOpen) && <span className="text-sm md:text-base truncate">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL SCROLLABLE */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          <header className="h-16 bg-white dark:bg-gray-800 shadow-sm flex items-center px-4 md:px-6 z-10 justify-between shrink-0 border-b dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center gap-3 flex-1">
              <button className="md:hidden p-2 text-gray-600 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(true)}><Icons.Menu /></button>
              <div className="flex-1 max-w-xl relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Icons.Search className="w-5 h-5"/></span>
                <input type="text" placeholder="Búsqueda rápida..." value={searchTerm} onChange={e => {setSearchTerm(e.target.value); setActiveTab('explorer'); setPage(1);}} className="w-full pl-11 pr-4 py-2.5 text-sm md:text-base bg-gray-100 dark:bg-gray-900 border-none rounded-full outline-none dark:text-white focus:ring-2 transition-shadow" style={{'--tw-ring-color': themeColor}}/>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              {currentUser && (currentUser.isApproved || currentUser.role === 'admin') && (
                <button onClick={() => { setEditingPokemon(null); setPokeForm({ dexNum: '', name: '', description: '', history: '', type1: 'Normal', type2: 'Ninguno', generation: 1, image: '' }); setShowPokemonModal(true); setFormError(''); }} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white font-bold text-xs md:text-sm shadow-md active:scale-95 transition-transform" style={{backgroundColor: themeColor}}><Icons.Plus className="w-5 h-5" /> <span className="hidden sm:inline">Nuevo</span></button>
              )}
              {currentUser ? (
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-full border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer shadow-sm hover:scale-105" onClick={() => changeTab('profile')}>
                    {currentUser.profile.avatar ? <img src={currentUser.profile.avatar} className="w-full h-full object-cover"/> : <span className="text-gray-400 p-1.5 block"><Icons.User className="w-6 h-6"/></span>}
                  </div>
                  <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 p-1.5 hidden sm:block"><Icons.LogOut className="w-5 h-5"/></button>
                </div>
              ) : (
                <button onClick={() => { setAuthForm({ isLogin: true, email: '', password: '', birthDate: '' }); setShowAuthModal(true); setFormError(''); }} className="text-white text-xs md:text-sm font-bold px-5 py-2 rounded-full flex items-center gap-2 shadow-md active:scale-95 transition-transform" style={{backgroundColor: themeColor}}><Icons.User className="w-5 h-5"/> Entrar</button>
              )}
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 scroll-smooth relative">
            {renderView()}
          </main>
        </div>
      </div>

      {/* --- MODALES --- */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[80] backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-sm overflow-hidden relative shadow-2xl">
            <div className="p-8 text-center text-white" style={{backgroundColor: themeColor}}>
              <span className="flex justify-center mb-3 opacity-90"><Icons.Lock className="w-12 h-12" /></span>
              <h2 className="text-2xl font-black">{authForm.isLogin ? 'Acceso Seguro' : 'Crear Cuenta'}</h2>
            </div>
            <form onSubmit={handleAuth} className="p-6 space-y-4">
              {formError && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-bold border border-red-200 flex items-center gap-2"><Icons.AlertTriangle className="w-4 h-4"/> {formError}</div>}
              <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Correo</label><input type="email" required value={authForm.email} onChange={e=>setAuthForm({...authForm, email: e.target.value})} className="w-full text-base md:text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-3 outline-none dark:text-white" /></div>
              <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Contraseña</label><input type="password" required value={authForm.password} onChange={e=>setAuthForm({...authForm, password: e.target.value})} className="w-full text-base md:text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-3 outline-none dark:text-white" /></div>
              {!authForm.isLogin && <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Nacimiento</label><input type="date" required value={authForm.birthDate} onChange={e=>setAuthForm({...authForm, birthDate: e.target.value})} className="w-full text-base md:text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-3 outline-none dark:text-white" /></div>}
              <button type="submit" className="w-full text-white font-bold rounded-xl p-3.5 mt-4 text-sm shadow-md hover:opacity-90 active:scale-95" style={{backgroundColor: themeColor}}>{authForm.isLogin ? 'Ingresar' : 'Solicitar Verificación'}</button>
              <button type="button" onClick={() => {setAuthForm({...authForm, isLogin: !authForm.isLogin}); setFormError('')}} className="w-full text-xs text-gray-500 dark:text-gray-400 underline mt-4 text-center">{authForm.isLogin ? 'Registrate gratis' : 'Ya tengo cuenta'}</button>
            </form>
            <button onClick={() => setShowAuthModal(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><Icons.XCircle className="w-7 h-7" /></button>
          </div>
        </div>
      )}

      {showDetailsModal && selectedDetails && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-3 md:p-6 z-[80] backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-3xl overflow-hidden relative flex flex-col max-h-[90vh] shadow-2xl">
             <div className="p-5 flex justify-between items-center text-white shrink-0" style={{backgroundColor: themeColor}}>
               <h2 className="font-bold flex items-center gap-2"><Icons.Info className="w-6 h-6"/> Archivo Biológico Oficial</h2>
               <button onClick={() => setShowDetailsModal(false)}><Icons.XCircle className="w-7 h-7"/></button>
             </div>
             <div className="overflow-y-auto">
                <PokemonDetails pokemon={selectedDetails} themeColor={themeColor} onNavigate={(newPokemon) => setSelectedDetails(newPokemon)} localEdits={localEdits} />
             </div>
          </div>
        </div>
      )}

      {showPokemonModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-3 md:p-6 z-[80] backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[95vh] shadow-2xl">
            <div className="p-5 flex justify-between items-center text-white shrink-0" style={{backgroundColor: themeColor}}>
              <h2 className="font-bold flex items-center gap-2 text-lg"><Icons.Edit className="w-6 h-6"/> {editingPokemon ? 'Corregir Archivo en DB' : 'Registrar Nuevo Especimen'}</h2>
              <button onClick={() => setShowPokemonModal(false)}><Icons.XCircle className="w-7 h-7"/></button>
            </div>
            <form onSubmit={handleSavePokemon} className="p-6 md:p-8 space-y-5 overflow-y-auto">
              {formError && <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold flex items-center gap-2"><Icons.AlertTriangle className="w-4 h-4"/> {formError}</div>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Nº Genético</label><input type="number" required value={pokeForm.dexNum} onChange={e=>setPokeForm({...pokeForm, dexNum: e.target.value})} className="w-full text-base md:text-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 dark:bg-gray-900 dark:text-white outline-none" /></div>
                <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Nombre Oficial</label><input type="text" required value={pokeForm.name} onChange={e=>setPokeForm({...pokeForm, name: e.target.value})} className="w-full text-base md:text-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 dark:bg-gray-900 dark:text-white outline-none" /></div>
                <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Tipo Primario</label><select value={pokeForm.type1} onChange={e=>setPokeForm({...pokeForm, type1: e.target.value})} className="w-full text-base md:text-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 dark:bg-gray-900 dark:text-white outline-none">{Object.values(TYPE_TRANSLATIONS).map(t=><option key={t}>{t}</option>)}</select></div>
                <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Tipo Secundario</label><select value={pokeForm.type2} onChange={e=>setPokeForm({...pokeForm, type2: e.target.value})} className="w-full text-base md:text-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 dark:bg-gray-900 dark:text-white outline-none"><option>Ninguno</option>{Object.values(TYPE_TRANSLATIONS).filter(t=>t!==pokeForm.type1).map(t=><option key={t}>{t}</option>)}</select></div>
              </div>
              
              <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Categoría Corta (Ej: Pokémon Ratón)</label><input type="text" required value={pokeForm.description} onChange={e=>setPokeForm({...pokeForm, description: e.target.value})} className="w-full text-base md:text-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 dark:bg-gray-900 dark:text-white outline-none" placeholder="El sistema la obtiene de la API..." /></div>
              
              <div><label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Historia Oficial / Entrada Pokédex</label><textarea required rows="4" value={pokeForm.history} onChange={e=>setPokeForm({...pokeForm, history: e.target.value})} className="w-full text-base md:text-sm border border-gray-200 dark:border-gray-700 rounded-xl p-3 dark:bg-gray-900 dark:text-white resize-none outline-none" placeholder="El sistema la obtiene de la API. Edita solo para corregir..."/></div>
              
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t dark:border-gray-700"><button type="button" onClick={()=>setShowPokemonModal(false)} className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-bold dark:text-gray-300 w-full sm:w-auto">Cancelar</button><button type="submit" className="px-6 py-3 text-white rounded-xl text-sm font-bold shadow-md w-full sm:w-auto flex justify-center gap-2 items-center" style={{backgroundColor: themeColor}}><Icons.CheckCircle className="w-5 h-5"/> Actualizar DB Local</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}