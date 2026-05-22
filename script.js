const TYPE_CHART = {
    "normal": { super_effective: [], resistant: ["rock", "steel"], immune: ["ghost"] },
    "fire": { super_effective: ["grass", "ice", "bug", "steel"], resistant: ["fire", "water", "rock", "dragon"], immune: [] },
    "water": { super_effective: ["fire", "ground", "rock"], resistant: ["water", "grass", "dragon"], immune: [] },
    "grass": { super_effective: ["water", "ground", "rock"], resistant: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"], immune: [] },
    "electric": { super_effective: ["water", "flying"], resistant: ["electric", "grass", "dragon"], immune: ["ground"] },
    "ice": { super_effective: ["grass", "ground", "flying", "dragon"], resistant: ["fire", "water", "ice", "steel"], immune: [] },
    "fighting": { super_effective: ["normal", "ice", "rock", "dark", "steel"], resistant: ["poison", "flying", "psychic", "bug", "fairy"], immune: ["ghost"] },
    "poison": { super_effective: ["grass", "fairy"], resistant: ["poison", "ground", "rock", "ghost"], immune: ["steel"] },
    "ground": { super_effective: ["fire", "electric", "poison", "rock", "steel"], resistant: ["grass", "bug"], immune: ["flying"] },
    "flying": { super_effective: ["grass", "fighting", "bug"], resistant: ["electric", "rock", "steel"], immune: [] },
    "psychic": { super_effective: ["fighting", "poison"], resistant: ["psychic", "steel"], immune: ["dark"] },
    "bug": { super_effective: ["grass", "psychic", "dark"], resistant: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"], immune: [] },
    "rock": { super_effective: ["fire", "ice", "flying", "bug"], resistant: ["fighting", "ground", "steel"], immune: [] },
    "ghost": { super_effective: ["psychic", "ghost"], resistant: ["dark"], immune: ["normal"] },
    "dragon": { super_effective: ["dragon"], resistant: ["steel"], immune: ["fairy"] },
    "steel": { super_effective: ["ice", "rock", "fairy"], resistant: ["fire", "water", "electric", "steel"], immune: [] },
    "fairy": { super_effective: ["fighting", "dragon", "dark"], resistant: ["fire", "poison", "steel"], immune: [] },
    "dark": { super_effective: ["psychic", "ghost"], resistant: ["fighting", "dark", "fairy"], immune: [] }
};

const MOVE_ENERGY = {
    "acid spray": 45,
    "acrobatics": 55,
    "aerial ace": 45,
    "aeroblast": 75,
    "air cutter": 35,
    "ancient power": 45,
    "aqua jet": 40,
    "aqua step": 40,
    "aqua tail": 35,
    "aura sphere": 40,
    "aura wheel": 45,
    "aura wheel": 45,
    "aurora beam": 60,
    "avalanche": 45,
    "beak blast": 55,
    "behemoth bash": 45,
    "behemoth blade": 55,
    "blast burn": 50,
    "blaze kick": 40,
    "bleakwind storm": 45,
    "blizzard": 75,
    "body slam": 35,
    "bone club": 35,
    "boomburst": 70,
    "brave bird": 55,
    "breaking swipe": 50,
    "brick break": 40,
    "brine": 50,
    "brutal swing": 35,
    "bubble beam": 40,
    "bug buzz": 60,
    "bulldoze": 45,
    "chilling water": 45,
    "clanging scales": 45,
    "close combat": 45,
    "crabhammer": 50,
    "cross chop": 35,
    "cross poison": 35,
    "crunch": 45,
    "crush grip": 50,
    "darkest lariat": 60,
    "dark pulse": 50,
    "dazzling gleam": 55,
    "dig": 50,
    "disarming voice": 45,
    "discharge": 40,
    "doom desire": 40,
    "double iron bash": 35,
    "draco meteor": 65,
    "dragon ascent": 70,
    "dragon claw": 50,
    "dragon energy": 45,
    "dragon pulse": 55,
    "draining kiss": 55,
    "drain punch": 40,
    "drill peck": 40,
    "drill run": 45,
    "drum beating": 35,
    "dynamax cannon": 45,
    "dynamic punch": 45,
    "earthquake": 65,
    "earth power": 55,
    "energy ball": 55,
    "feather dance": 50,
    "fell stinger": 35,
    "fire blast": 80,
    "fire punch": 40,
    "flamethrower": 55,
    "flame burst": 55,
    "flame charge": 50,
    "flame wheel": 45,
    "flash cannon": 70,
    "flower trick": 35,
    "fly": 45,
    "flying press": 40,
    "focus blast": 75,
    "foul play": 40,
    "freeze shock": 60,
    "frenzy plant": 45,
    "frustration": 70,
    "fusion bolt": 45,
    "fusion flare": 45,
    "future sight": 65,
    "giga drain": 80,
    "giga impact": 80,
    "gigaton hammer": 60,
    "glaciate": 40,
    "grass knot": 50,
    "gunk shot": 75,
    "gyro ball": 50,
    "heart stamp": 40,
    "heat wave": 45,
    "heavy slam": 50,
    "high horsepower": 60,
    "high jump kick": 55,
    "horn attack": 35,
    "hurricane": 65,
    "hydro cannon": 40,
    "hydro pump": 75,
    "hydro pump blastoise": 80,
    "hyper beam": 80,
    "hyper fang": 50,
    "ice beam": 55,
    "ice burn": 60,
    "ice punch": 40,
    "icicle spear": 40,
    "icy wind": 45,
    "iron head": 50,
    "last resort": 55,
    "leaf blade": 35,
    "leaf storm": 55,
    "leaf tornado": 40,
    "liquidation": 45,
    "low sweep": 40,
    "lunge": 45,
    "luster purge": 60,
    "magma storm": 40,
    "magnet bomb": 45,
    "megahorn": 55,
    "mega drain": 55,
    "meteor beam": 60,
    "meteor mash": 45,
    "mind blown": 35,
    "mirror coat": 55,
    "mirror shot": 35,
    "mist ball": 60,
    "moonblast": 60,
    "moongeist beam": 65,
    "muddy water": 35,
    "mud bomb": 45,
    "mystical fire": 45,
    "nature's madness": 50,
    "night shade": 45,
    "night slash": 35,
    "oblivion wing": 50,
    "obstruct": 40,
    "octazooka": 50,
    "ominous wind": 45,
    "origin pulse": 60,
    "outrage": 60,
    "overheat": 55,
    "parabolic charge": 50,
    "payback": 60,
    "petal blizzard": 65,
    "play rough": 60,
    "poison fang": 40,
    "poltergeist": 75,
    "power gem": 50,
    "power-up punch": 35,
    "power whip": 50,
    "precipice blades": 60,
    "psybeam": 60,
    "psychic": 55,
    "psychic fangs": 35,
    "psycho boost": 35,
    "psyshock": 40,
    "psystrike": 45,
    "pyro ball": 40,
    "rage fist": 35,
    "razor shell": 35,
    "rest": 35,
    "return": 70,
    "roar of time": 65,
    "rock blast": 40,
    "rock slide": 45,
    "rock tomb": 50,
    "rock wrecker": 50,
    "sacred fire": 65,
    "sacred sword": 35,
    "sandsear storm": 45,
    "sand tomb": 40,
    "scald": 50,
    "scorching sands": 50,
    "secret sword": 35,
    "seed bomb": 40,
    "seed flare": 75,
    "shadow ball": 50,
    "shadow bone": 45,
    "shadow force": 90,
    "shadow punch": 35,
    "shadow sneak": 50,
    "signal beam": 55,
    "silver wind": 45,
    "skull bash": 75,
    "sky attack": 50,
    "sludge": 40,
    "sludge bomb": 50,
    "sludge wave": 65,
    "solar beam": 80,
    "spacial rend": 55,
    "sparkling aria": 45,
    "spirit shackle": 40,
    "springtide storm (speculative)": 45,
    "stomp": 40,
    "stone edge": 55,
    "struggle": 100,
    "submission": 50,
    "sunsteel strike": 65,
    "superpower": 40,
    "surf": 45,
    "swift": 35,
    "synchronoise": 50,
    "techno blast (burn)": 55,
    "techno blast (chill)": 55,
    "techno blast (douse)": 55,
    "techno blast (normal)": 55,
    "techno blast (shock)": 55,
    "thunder": 60,
    "thunderbolt": 55,
    "thunder cage": 40,
    "thunder punch": 40,
    "torch song": 45,
    "trailblaze": 45,
    "triple axel": 45,
    "tri attack": 50,
    "twister": 40,
    "upper hand": 40,
    "vise grip": 40,
    "volt tackle": 40,
    "v-create": 40,
    "water pulse": 50,
    "weather ball (fire)": 35,
    "weather ball (ice)": 35,
    "weather ball (normal)": 35,
    "weather ball (rock)": 35,
    "weather ball (water)": 35,
    "wildbolt storm": 45,
    "wild charge": 45,
    "wrap": 45,
    "x-scissor": 40,
    "zap cannon": 80,
};


// Application State
let pogoMovesCache = null;
let state = {
    collection: JSON.parse(localStorage.getItem('pokemonCollection')) || [],
    team: [null, null, null],
    teamName: localStorage.getItem('teamName') || 'My Battle Team',
    league: localStorage.getItem('league') || 'master',
    savedTeams: JSON.parse(localStorage.getItem('savedTeams')) || [],
    allPokemonNames: []
};

// Data Migration (Add UID to older saves)
let needsMigration = false;
state.collection.forEach(p => {
    if (!p.uid) {
        p.uid = Date.now().toString() + Math.random().toString().slice(2, 6);
        needsMigration = true;
    }
});
if (needsMigration) {
    localStorage.setItem('pokemonCollection', JSON.stringify(state.collection));
}

state.savedTeams.forEach(team => {
    team.pokemon.forEach(p => {
        if (p && !p.uid) {
            const match = state.collection.find(c => c.name === p.name);
            p.uid = match ? match.uid : Date.now().toString() + Math.random().toString().slice(2, 6);
            needsMigration = true;
        }
    });
});
if (needsMigration) {
    localStorage.setItem('savedTeams', JSON.stringify(state.savedTeams));
}

// DOM Elements
const searchInput = document.getElementById('pokemon-search');
const teamNameInput = document.getElementById('team-name');
const leagueSelect = document.getElementById('league-select');
const saveTeamBtn = document.getElementById('save-team');
const clearTeamBtn = document.getElementById('clear-team');
const importBtn = document.getElementById('import-btn');
const csvUpload = document.getElementById('csv-upload');
const savedTeamsList = document.getElementById('saved-teams-list');
const teamsCount = document.getElementById('teams-count');
const autocompleteResults = document.getElementById('autocomplete-results');
const collectionList = document.getElementById('collection-list');
const collectionCount = document.getElementById('collection-count');
const teamGrid = document.getElementById('team-grid');
const analysisPlaceholder = document.getElementById('analysis-placeholder');
const analysisContent = document.getElementById('analysis-content');

// Modal Elements
const movesetModal = document.getElementById('moveset-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalFastMove = document.getElementById('modal-fast-move');
const modalChargeMove = document.getElementById('modal-charge-move');
const fastMoveStats = document.getElementById('fast-move-stats');
const chargeMoveStats = document.getElementById('charge-move-stats');
const chargeResult = document.getElementById('charge-result');
const saveMovesBtn = document.getElementById('save-moves-btn');
const modalPokemonSprite = document.getElementById('modal-pokemon-sprite');
const modalPokemonName = document.getElementById('modal-pokemon-name').querySelector('span');
let currentModalPokemonUid = null;


// Initialize
async function init() {
    teamNameInput.value = state.teamName;
    leagueSelect.value = state.league;
    renderTypeLegend();
    renderSavedTeams();
    await fetchPokemonNames();
    
    // Migrate empty moves for older saved pokemon
    let needsMoveMigration = false;
    for (const p of state.collection) {
        if (!p.fastMove || !p.chargeMove) {
            if (!pogoMovesCache) {
                const res = await fetch('https://pogoapi.net/api/v1/current_pokemon_moves.json');
                pogoMovesCache = await res.json();
            }
            let pogoData = pogoMovesCache.find(x => x.pokemon_name.toLowerCase() === p.name.toLowerCase() && x.form === "Normal");
            if (!pogoData) pogoData = pogoMovesCache.find(x => x.pokemon_name.toLowerCase() === p.name.toLowerCase());
            
            if (pogoData) {
                if (!p.fastMove) {
                    const fMoves = [...pogoData.fast_moves, ...pogoData.elite_fast_moves];
                    if (fMoves.length > 0) p.fastMove = fMoves[0].toLowerCase();
                }
                if (!p.chargeMove) {
                    const cMoves = [...pogoData.charged_moves, ...pogoData.elite_charged_moves];
                    if (cMoves.length > 0) p.chargeMove = cMoves[0].toLowerCase();
                }
                needsMoveMigration = true;
            }
        }
    }
    
    if (needsMoveMigration) {
        saveCollection();
        state.team.forEach(tp => {
            if (tp && (!tp.fastMove || !tp.chargeMove)) {
                const updated = state.collection.find(c => c.uid === tp.uid);
                if (updated) {
                    tp.fastMove = updated.fastMove;
                    tp.chargeMove = updated.chargeMove;
                }
            }
        });
        state.savedTeams.forEach(team => {
            team.pokemon.forEach(tp => {
                if (tp && (!tp.fastMove || !tp.chargeMove)) {
                    const updated = state.collection.find(c => c.uid === tp.uid);
                    if (updated) {
                        tp.fastMove = updated.fastMove;
                        tp.chargeMove = updated.chargeMove;
                    }
                }
            });
        });
        localStorage.setItem('savedTeams', JSON.stringify(state.savedTeams));
    }

    renderCollection();
    renderTeam();
}

function renderTypeLegend() {
    const legendGrid = document.getElementById('legend-grid');
    const types = Object.keys(TYPE_CHART);
    legendGrid.innerHTML = types.map(t => `
        <div class="legend-item">
            <div class="legend-color" style="background: var(--type-${t});"></div>
            <span>${t}</span>
        </div>
    `).join('');
}

// Event Listeners for Team Metadata
teamNameInput.addEventListener('input', (e) => {
    state.teamName = e.target.value;
    localStorage.setItem('teamName', state.teamName);
});

leagueSelect.addEventListener('change', (e) => {
    state.league = e.target.value;
    localStorage.setItem('league', state.league);
    renderCollection(); // Update the list based on the new CP limits
    analyzeSynergy(); // Re-analyze if needed (e.g. for league specific caps)
});

saveTeamBtn.addEventListener('click', () => {
    const activeTeam = state.team.filter(p => p !== null);
    if (activeTeam.length === 0) {
        alert('Cannot save an empty team!');
        return;
    }

    const teamToSave = {
        id: Date.now(),
        name: state.teamName,
        league: state.league,
        pokemon: [...state.team]
    };

    state.savedTeams.push(teamToSave);
    localStorage.setItem('savedTeams', JSON.stringify(state.savedTeams));
    renderSavedTeams();
    alert('Team saved successfully!');
});

clearTeamBtn.addEventListener('click', () => {
    state.team = [null, null, null];
    state.teamName = 'New Team';
    teamNameInput.value = state.teamName;
    renderTeam();
});

// Fetch basic list for autocomplete
async function fetchPokemonNames() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await response.json();
        state.allPokemonNames = data.results.map(p => p.name);
    } catch (error) {
        console.error('Error fetching names:', error);
    }
}

// Search Logic
searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    if (val.length < 2) {
        autocompleteResults.classList.remove('active');
        return;
    }

    const matches = state.allPokemonNames
        .filter(name => name.includes(val))
        .slice(0, 5);

    if (matches.length > 0) {
        autocompleteResults.innerHTML = matches.map(name => `
            <div class="autocomplete-item" onclick="addPokemonToCollection('${name}')">${name}</div>
        `).join('');
        autocompleteResults.classList.add('active');
    } else {
        autocompleteResults.classList.remove('active');
    }
});

// CSV Import Logic
importBtn.addEventListener('click', () => csvUpload.click());

csvUpload.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
        const text = event.target.result;
        const rows = text.split('\n').map(row => row.split(','));
        const headers = rows[0].map(h => h.trim().toLowerCase());
        
        const nameIdx = headers.findIndex(h => h.includes('name') || h.includes('pokémon'));
        if (nameIdx === -1) {
            alert('Could not find Pokémon names in CSV. Make sure you use a standard Poke Genie export.');
            return;
        }

        const cpIdx = headers.findIndex(h => h === 'cp' || h.includes('cp'));
        const fastIdx = headers.findIndex(h => h.includes('fast move'));
        const chargeIdx = headers.findIndex(h => h.includes('charge move') || h.includes('charged move') || h.includes('special move') && !h.includes('2'));
        const charge2Idx = headers.findIndex(h => h.includes('charge move 2') || h.includes('charged move 2') || h.includes('special move 2'));

        importBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i>';
        lucide.createIcons();
        
        let addedCount = 0;
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const rawName = row[nameIdx]?.trim().toLowerCase();
            if (!rawName) continue;

            // Clean name (remove gender symbols or forms PokeGenie adds)
            const cleanName = rawName.split(' ')[0].replace(/[^a-z0-9-]/g, '');
            const cp = cpIdx !== -1 ? parseInt(row[cpIdx], 10) : null;
            const fastMove = fastIdx !== -1 ? row[fastIdx]?.trim() : null;
            let chargeMove = chargeIdx !== -1 ? row[chargeIdx]?.trim() : null;
            
            if (charge2Idx !== -1 && row[charge2Idx] && row[charge2Idx].trim().length > 0) {
                chargeMove += ' / ' + row[charge2Idx].trim();
            }

            // Check if we already have this exact pokemon with this CP
            const duplicate = state.collection.find(p => p.name === cleanName && p.cp === cp);
            if (!duplicate) {
                await addPokemonToCollection(cleanName, true, cp, fastMove, chargeMove); // true for silent add
                addedCount++;
            } else {
                // Update existing with new moves
                duplicate.fastMove = fastMove;
                duplicate.chargeMove = chargeMove;
            }
        }

        saveCollection();
        renderCollection();
        renderTeam();

        importBtn.innerHTML = '<i data-lucide="upload" style="width: 14px;"></i>';
        lucide.createIcons();
        alert(`Successfully imported/updated Pokemon from CSV!`);
        csvUpload.value = '';
    };
    reader.readAsText(file);
});

// Update addPokemonToCollection to support silent mode and CP
async function addPokemonToCollection(name, silent = false, cp = null, fastMove = null, chargeMove = null) {
    if (!silent) {
        searchInput.value = '';
        autocompleteResults.classList.remove('active');
    }

    // Only prevent manual duplicates if we don't know CP. If importing, we handle duplicates above.
    if (!silent && state.collection.find(p => p.name === name)) {
        alert('Already in collection! To add another with a specific CP, use the CSV import.');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) return; // Skip if PokeAPI doesn't have it
        const data = await response.json();
        
        if (!fastMove || !chargeMove) {
            if (!pogoMovesCache) {
                const pogoRes = await fetch('https://pogoapi.net/api/v1/current_pokemon_moves.json');
                pogoMovesCache = await pogoRes.json();
            }
            let pogoData = pogoMovesCache.find(p => p.pokemon_name.toLowerCase() === data.name.toLowerCase() && p.form === "Normal");
            if (!pogoData) pogoData = pogoMovesCache.find(p => p.pokemon_name.toLowerCase() === data.name.toLowerCase());
            
            if (pogoData) {
                if (!fastMove) {
                    const fMoves = [...pogoData.fast_moves, ...pogoData.elite_fast_moves];
                    if (fMoves.length > 0) fastMove = fMoves[0].toLowerCase();
                }
                if (!chargeMove) {
                    const cMoves = [...pogoData.charged_moves, ...pogoData.elite_charged_moves];
                    if (cMoves.length > 0) chargeMove = cMoves[0].toLowerCase();
                }
            }
        }
        
        const pokemon = {
            uid: Date.now().toString() + Math.random().toString().slice(2, 6),
            id: data.id,
            name: data.name,
            cp: cp,
            fastMove: fastMove,
            chargeMove: chargeMove,
            types: data.types.map(t => t.type.name),
            sprite: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
            stats: data.stats.reduce((acc, s) => {
                acc[s.stat.name] = s.base_stat;
                return acc;
            }, {})
        };

        state.collection.push(pokemon);
        saveCollection();
        renderCollection();
    } catch (error) {
        console.error('Error adding pokemon:', error);
    }
}

function saveCollection() {
    localStorage.setItem('pokemonCollection', JSON.stringify(state.collection));
}

function renderCollection() {
    let filteredCollection = state.collection;
    
    // Filter by League CP limits
    if (state.league === 'great') {
        filteredCollection = state.collection.filter(p => !p.cp || p.cp <= 1500);
    } else if (state.league === 'ultra') {
        filteredCollection = state.collection.filter(p => !p.cp || p.cp <= 2500);
    }

    collectionCount.textContent = `${filteredCollection.length}/${state.collection.length}`;
    collectionList.innerHTML = filteredCollection.map(p => `
        <div class="pokemon-card-small" style="background: var(--glass); padding: 0.75rem; border-radius: 12px; display: flex; align-items: center; gap: 1rem; cursor: pointer;" onclick="addToTeam('${p.uid}')">
            <img src="${p.sprite}" style="width: 40px; height: 40px;">
            <div style="flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <div style="text-transform: capitalize; font-weight: 600; font-size: 0.9rem;">${p.name}</div>
                    ${p.cp ? `<div style="font-size: 0.7rem; color: var(--accent);">CP ${p.cp}</div>` : ''}
                </div>
                <div>${p.types.map(t => `<span class="type-badge" style="background: var(--type-${t}); font-size: 0.6rem; padding: 0.1rem 0.4rem;">${t}</span>`).join('')}</div>
            </div>
            <button onclick="openMovesetModal(event, '${p.uid}')" title="Analyze Moves" style="background: transparent; border: none; color: var(--accent); cursor: pointer; margin-right: 0.5rem;"><i data-lucide="swords" style="width: 16px;"></i></button>
            <button onclick="removeFromCollection(event, '${p.uid}')" style="background: transparent; border: none; color: var(--danger); cursor: pointer;"><i data-lucide="trash-2" style="width: 16px;"></i></button>
        </div>
    `).join('');
    lucide.createIcons();
}

function removeFromCollection(e, uid) {
    e.stopPropagation();
    state.collection = state.collection.filter(p => p.uid !== uid);
    // Also remove from team if present
    state.team = state.team.map(p => p && p.uid === uid ? null : p);
    saveCollection();
    renderCollection();
    renderTeam();
}

// Team Logic
function addToTeam(uid) {
    const pokemon = state.collection.find(p => p.uid === uid);
    if (!pokemon) return; // Prevent errors if not found

    const emptySlot = state.team.findIndex(p => p === null);
    
    if (state.team.find(p => p && p.uid === uid)) {
        alert('Already in team!');
        return;
    }

    if (emptySlot !== -1) {
        state.team[emptySlot] = pokemon;
        renderTeam();
    } else {
        alert('Team is full! Remove a member first.');
    }
}

function removeFromTeam(slot) {
    state.team[slot] = null;
    renderTeam();
}

function getPokemonTypeCoverage(p) {
    const weaknesses = [];
    const resistances = [];

    Object.keys(TYPE_CHART).forEach(attackerType => {
        let mult = 1;
        p.types.forEach(t => {
            if (TYPE_CHART[attackerType].super_effective.includes(t)) mult *= 2;
            if (TYPE_CHART[attackerType].resistant.includes(t)) mult *= 0.5;
            if (TYPE_CHART[attackerType].immune.includes(t)) mult *= 0.39;
        });
        if (mult > 1) weaknesses.push(attackerType);
        if (mult < 1) resistances.push(attackerType);
    });

    return { weaknesses, resistances };
}

function getSegmentsHTML(moveStr) {
    if (!moveStr) return '';
    return moveStr.split('/').map(m => {
        const moveName = m.trim();
        const energy = MOVE_ENERGY[moveName.toLowerCase()];
        let segments = 0;
        if (energy) {
            if (energy <= 40) segments = 3;
            else if (energy <= 55) segments = 2;
            else segments = 1;
        }
        
        let barsHtml = '';
        if (segments > 0) {
            barsHtml = '<span style="display:inline-flex; gap: 3px; margin-left: 6px; align-items: center;">';
            for (let i = 0; i < segments; i++) {
                barsHtml += '<span style="width: 10px; height: 5px; background: var(--accent); border-radius: 2px; box-shadow: 0 0 4px var(--accent-glow);"></span>';
            }
            barsHtml += '</span>';
        }
        return `<span style="color: white; font-weight: 500;">${moveName}</span>${barsHtml}`;
    }).join(' <span style="color: var(--text-muted); margin: 0 4px;">/</span> ');
}

function renderTeam() {
    const teamSlots = document.querySelectorAll('.pokemon-card');
    const activeCount = state.team.filter(p => p !== null).length;
    
    // Toggle clear button
    if (activeCount > 0) {
        clearTeamBtn.classList.remove('hidden');
    } else {
        clearTeamBtn.classList.add('hidden');
    }

    state.team.forEach((p, i) => {
        const slot = teamSlots[i];
        if (p) {
            const { weaknesses, resistances } = getPokemonTypeCoverage(p);
            slot.classList.remove('empty');
            slot.onclick = () => openMovesetModal(null, p.uid);
            slot.innerHTML = `
                <button onclick="event.stopPropagation(); removeFromTeam(${i})" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.3); border: none; border-radius: 50%; width: 24px; height: 24px; color: white; cursor: pointer; z-index: 10;">&times;</button>
                <img src="${p.sprite}">
                <div class="pokemon-name">${p.name}</div>
                <div style="font-size: 0.85rem; color: var(--accent); margin-top: -0.25rem; margin-bottom: 0.5rem; font-weight: 600;">CP: ${p.cp || 'Unknown'}</div>
                <div style="margin-bottom: 1rem;">
                    ${p.types.map(t => `<span class="type-badge" style="background: var(--type-${t});">${t}</span>`).join('')}
                </div>
                ${p.fastMove ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.35rem; text-transform: capitalize; display: flex; align-items: center; justify-content: center; gap: 4px;">Fast: <span style="color: white; font-weight: 500;">${p.fastMove}</span></div>` : ''}
                ${p.chargeMove ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem; text-transform: capitalize; display: flex; align-items: center; justify-content: center;">Charge: <div style="margin-left: 4px; display: flex; align-items: center;">${getSegmentsHTML(p.chargeMove)}</div></div>` : ''}
                
                <div class="card-coverage">
                    <div class="coverage-group">
                        <span class="label">Weak To</span>
                        <div class="type-mini-list">
                            ${weaknesses.map(t => `<span class="type-dot" style="background: var(--type-${t});" title="${t}"></span>`).join('')}
                        </div>
                    </div>
                    <div class="coverage-group">
                        <span class="label">Resists</span>
                        <div class="type-mini-list">
                            ${resistances.map(t => `<span class="type-dot" style="background: var(--type-${t});" title="${t}"></span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            slot.classList.add('empty');
            slot.onclick = null;
            slot.innerHTML = `
                <i data-lucide="plus-circle"></i>
                <p>Slot ${i + 1}</p>
            `;
        }
    });
    lucide.createIcons();
    analyzeSynergy();
}

function renderSavedTeams() {
    teamsCount.textContent = state.savedTeams.length;
    savedTeamsList.innerHTML = state.savedTeams.map(t => `
        <div class="saved-team-card" onclick="loadTeam(${t.id})">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h4>${t.name}</h4>
                    <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">${t.league} League</div>
                </div>
                <button onclick="deleteTeam(event, ${t.id})" style="background: transparent; border: none; color: var(--danger); cursor: pointer;"><i data-lucide="x" style="width: 14px;"></i></button>
            </div>
            <div class="saved-team-pokes" style="margin-top: 0.5rem;">
                ${t.pokemon.filter(p => p !== null).map(p => `
                    <img src="${p.sprite}" style="width: 24px; height: 24px;" title="${p.name}">
                `).join('')}
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function loadTeam(id) {
    const saved = state.savedTeams.find(t => t.id === id);
    if (saved) {
        state.team = [...saved.pokemon];
        state.teamName = saved.name;
        state.league = saved.league;
        teamNameInput.value = state.teamName;
        leagueSelect.value = state.league;
        renderTeam();
    }
}

function deleteTeam(e, id) {
    e.stopPropagation();
    state.savedTeams = state.savedTeams.filter(t => t.id !== id);
    localStorage.setItem('savedTeams', JSON.stringify(state.savedTeams));
    renderSavedTeams();
}

// Synergy Engine
function analyzeSynergy() {
    const activeTeam = state.team.filter(p => p !== null);
    
    if (activeTeam.length < 3) {
        analysisPlaceholder.classList.remove('hidden');
        analysisContent.classList.add('hidden');
        return;
    }

    analysisPlaceholder.classList.add('hidden');
    analysisContent.classList.remove('hidden');

    const typeDefenses = {}; // { type: score } - positive is bad (weakness), negative is good (resistance)
    const types = Object.keys(TYPE_CHART);

    types.forEach(type => {
        typeDefenses[type] = 0;
        activeTeam.forEach(p => {
            let multiplier = 1;
            p.types.forEach(pType => {
                // How does the attacking 'type' affect the defending 'pType'?
                if (TYPE_CHART[type].super_effective.includes(pType)) multiplier *= 2;
                if (TYPE_CHART[type].resistant.includes(pType)) multiplier *= 0.5;
                if (TYPE_CHART[type].immune.includes(pType)) multiplier *= 0.39; // PoGo immunity multiplier
            });
            
            if (multiplier > 1) typeDefenses[type] += 1;
            if (multiplier < 1) typeDefenses[type] -= 1;
        });
    });

    renderAnalysis(typeDefenses, activeTeam);
}

function renderAnalysis(defenses, team) {
    const weaknessList = document.getElementById('weakness-list');
    const mitigationList = document.getElementById('mitigation-list');
    const coreTips = document.getElementById('core-tips');

    // Filter major threats (multiple weaknesses)
    const threats = Object.entries(defenses)
        .filter(([type, score]) => score >= 2)
        .map(([type, score]) => ({ type, score }));

    weaknessList.innerHTML = threats.length > 0 
        ? threats.map(t => `
            <div class="coverage-item">
                <div class="threat-dot threat-high"></div>
                <span class="type-badge" style="background: var(--type-${t.type});">${t.type}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${t.score === team.length ? 'Major Threat! Entire team is vulnerable.' : 'Major Threat! Multiple members are vulnerable.'}</span>
            </div>
        `).join('')
        : '<p style="color: var(--success);">No major shared weaknesses. Balanced team!</p>';

    // Mitigation
    const mitigations = [];
    team.forEach(p => {
        p.types.forEach(pType => {
            // Find what this pokemon is weak to
            const vulnerabilities = Object.keys(TYPE_CHART).filter(attackerType => {
                let mult = 1;
                p.types.forEach(t => {
                    if (TYPE_CHART[attackerType].super_effective.includes(t)) mult *= 2;
                    if (TYPE_CHART[attackerType].resistant.includes(t)) mult *= 0.5;
                    if (TYPE_CHART[attackerType].immune.includes(t)) mult *= 0.39;
                });
                return mult > 1;
            });

            vulnerabilities.forEach(v => {
                const coveredBy = team.find(member => {
                    if (member.name === p.name) return false;
                    let mMult = 1;
                    member.types.forEach(mt => {
                        if (TYPE_CHART[v].super_effective.includes(mt)) mMult *= 2;
                        if (TYPE_CHART[v].resistant.includes(mt)) mMult *= 0.5;
                        if (TYPE_CHART[v].immune.includes(mt)) mMult *= 0.39;
                    });
                    return mMult < 1;
                });

                if (coveredBy) {
                    mitigations.push(`<b>${coveredBy.name}</b> protects <b>${p.name}</b> from <b>${v}</b> types.`);
                }
            });
        });
    });

    const uniqueMitigations = [...new Set(mitigations)];
    mitigationList.innerHTML = uniqueMitigations.length > 0
        ? uniqueMitigations.slice(0, 5).map(m => `<p style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-muted);">${m}</p>`).join('')
        : '<p style="color: var(--warning);">Little to no defensive overlap found.</p>';

    // Core Tips
    let tips = "Based on your team, focus on ";
    if (threats.length > 0) {
        tips += `swapping one member for a <b>${getCounterType(threats[0].type)}</b> type to cover your ${threats[0].type} weakness. `;
    } else {
        tips += "balanced play. Your team has solid defensive foundations. ";
    }
    coreTips.innerHTML = tips;
}

function getCounterType(type) {
    // Simple counter logic: find a type that resists the threat and hits it super effective
    const counters = Object.keys(TYPE_CHART).filter(t => 
        TYPE_CHART[type].resistant.includes(t) || TYPE_CHART[type].immune.includes(t)
    );
    return counters[0] || 'Steel';
}

// --- Moveset Modal Logic ---
closeModalBtn.addEventListener('click', () => {
    movesetModal.classList.add('hidden');
});

async function openMovesetModal(e, uid) {
    if (e) e.stopPropagation();
    currentModalPokemonUid = uid;
    
    // Find Pokemon
    const pokemon = state.collection.find(p => p.uid === uid) || state.team.find(p => p && p.uid === uid);
    if (!pokemon) return;

    modalPokemonName.textContent = pokemon.name;
    modalPokemonSprite.src = pokemon.sprite;
    modalFastMove.innerHTML = '<option value="">Loading...</option>';
    modalChargeMove.innerHTML = '<option value="">Loading...</option>';
    fastMoveStats.textContent = '';
    chargeMoveStats.textContent = '';
    chargeResult.textContent = '-';
    
    movesetModal.classList.remove('hidden');

    try {
        // Fetch accurate Pokemon Go move lists from PoGoAPI
        if (!pogoMovesCache) {
            const response = await fetch('https://pogoapi.net/api/v1/current_pokemon_moves.json');
            pogoMovesCache = await response.json();
        }
        
        let pogoData = pogoMovesCache.find(p => p.pokemon_name.toLowerCase() === pokemon.name.toLowerCase() && p.form === "Normal");
        if (!pogoData) {
            pogoData = pogoMovesCache.find(p => p.pokemon_name.toLowerCase() === pokemon.name.toLowerCase());
        }

        if (!pogoData) {
            throw new Error("Pokemon not found in PoGoAPI");
        }
        
        // Extract fast and charge moves, including elite moves, converted to lowercase
        const availableFastMoves = [...pogoData.fast_moves, ...pogoData.elite_fast_moves].map(m => m.toLowerCase());
        const availableChargeMoves = [...pogoData.charged_moves, ...pogoData.elite_charged_moves].map(m => m.toLowerCase());
        
        // Sort alphabetically
        availableFastMoves.sort();
        availableChargeMoves.sort();
        
        modalFastMove.innerHTML = '<option value="">Select Fast Move</option>' + 
            availableFastMoves.map(m => `<option value="${m}" ${pokemon.fastMove === m ? 'selected' : ''}>${m}</option>`).join('');
            
        modalChargeMove.innerHTML = '<option value="">Select Charge Move</option>' + 
            availableChargeMoves.map(m => `<option value="${m}" ${pokemon.chargeMove === m ? 'selected' : ''}>${m}</option>`).join('');

        calculateChargingSpeed();
    } catch (err) {
        console.error(err);
        modalFastMove.innerHTML = '<option value="">Error loading moves</option>';
        modalChargeMove.innerHTML = '<option value="">Error loading moves</option>';
    }
}

function calculateChargingSpeed() {
    const fast = modalFastMove.value;
    const charge = modalChargeMove.value;
    
    let fStats = null;
    let cStats = null;

    if (fast) {
        fStats = getFastMoveStats(fast);
        fastMoveStats.textContent = `Generates: ${fStats.energy} Energy / ${fStats.turns} turn(s)${fStats.isFallback ? ' (Estimated)' : ''}`;
    } else {
        fastMoveStats.textContent = '';
    }

    if (charge) {
        cStats = MOVE_ENERGY[charge];
        chargeMoveStats.textContent = `Cost: ${cStats} Energy`;
    } else {
        chargeMoveStats.textContent = '';
    }

    if (fast && charge && fStats && cStats) {
        const attacks = Math.ceil(cStats / fStats.energy);
        const turns = attacks * fStats.turns;
        chargeResult.innerHTML = `
            <div>Takes <span style="color: var(--accent);">${attacks}</span> fast attacks</div>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;">(${turns} turns)</div>
        `;
    } else {
        chargeResult.textContent = '-';
    }
}

modalFastMove.addEventListener('change', calculateChargingSpeed);
modalChargeMove.addEventListener('change', calculateChargingSpeed);

saveMovesBtn.addEventListener('click', () => {
    if (!currentModalPokemonUid) return;
    
    const pokemonInCollection = state.collection.find(p => p.uid === currentModalPokemonUid);
    const pokemonInTeam = state.team.find(p => p && p.uid === currentModalPokemonUid);
    
    const fast = modalFastMove.value;
    const charge = modalChargeMove.value;

    if (pokemonInCollection) {
        pokemonInCollection.fastMove = fast;
        pokemonInCollection.chargeMove = charge;
    }
    if (pokemonInTeam) {
        pokemonInTeam.fastMove = fast;
        pokemonInTeam.chargeMove = charge;
    }

    saveCollection();
    renderCollection();
    renderTeam();
    
    // Keep saved teams in sync
    const needsSavedTeamUpdate = state.savedTeams.some(team => 
        team.pokemon.some(p => p && p.uid === currentModalPokemonUid)
    );
    if (needsSavedTeamUpdate) {
        state.savedTeams.forEach(team => {
            team.pokemon.forEach(p => {
                if (p && p.uid === currentModalPokemonUid) {
                    p.fastMove = fast;
                    p.chargeMove = charge;
                }
            });
        });
        localStorage.setItem('savedTeams', JSON.stringify(state.savedTeams));
        renderSavedTeams();
    }
    
    movesetModal.classList.add('hidden');
});

init();
