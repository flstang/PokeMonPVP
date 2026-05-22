const FAST_MOVE_ENERGY = {
    // move: { energy: Energy per attack, turns: Duration in turns }
    "mud shot": { energy: 9, turns: 2 },
    "thunder shock": { energy: 9, turns: 2 },
    "psycho cut": { energy: 9, turns: 2 },
    "lock-on": { energy: 5, turns: 1 },
    "counter": { energy: 7, turns: 2 },
    "shadow claw": { energy: 8, turns: 2 },
    "vine whip": { energy: 8, turns: 2 },
    "powder snow": { energy: 8, turns: 2 },
    "snarl": { energy: 13, turns: 3 },
    "bullet seed": { energy: 13, turns: 3 },
    "volt switch": { energy: 16, turns: 4 },
    "incinerate": { energy: 20, turns: 5 },
    "dragon breath": { energy: 3, turns: 1 },
    "lick": { energy: 3, turns: 1 },
    "water gun": { energy: 3, turns: 1 },
    "charm": { energy: 6, turns: 3 },
    "razor leaf": { energy: 4, turns: 2 },
    "smack down": { energy: 8, turns: 3 },
    "waterfall": { energy: 8, turns: 3 },
    "confusion": { energy: 12, turns: 4 },
    "poison jab": { energy: 7, turns: 2 },
    "gust": { energy: 12, turns: 4 },
    "hex": { energy: 12, turns: 3 },
    "spark": { energy: 8, turns: 2 },
    "ice shard": { energy: 10, turns: 3 },
    "fire spin": { energy: 10, turns: 3 },
    "dragon tail": { energy: 9, turns: 3 },
    "air slash": { energy: 9, turns: 3 },
    "bullet punch": { energy: 7, turns: 2 },
    "mach punch": { energy: 7, turns: 2 }, // If added
    "karate chop": { energy: 8, turns: 2 },
    "sucker punch": { energy: 7, turns: 2 },
    "fury cutter": { energy: 4, turns: 1 },
    "bug bite": { energy: 3, turns: 1 },
    "bite": { energy: 2, turns: 1 },
    "scratch": { energy: 2, turns: 1 },
    "tackle": { energy: 3, turns: 1 },
    "take down": { energy: 8, turns: 3 },
    "zen headbutt": { energy: 4, turns: 3 },
    "extrasensory": { energy: 10, turns: 3 },
    "metal claw": { energy: 6, turns: 2 },
    "steel wing": { energy: 7, turns: 2 },
    "mud slap": { energy: 8, turns: 3 },
    "rock throw": { energy: 5, turns: 2 },
    "astonish": { energy: 9, turns: 3 },
    "feint attack": { energy: 6, turns: 2 },
    "infestation": { energy: 12, turns: 3 },
    "struggle bug": { energy: 8, turns: 3 },
    "peck": { energy: 5, turns: 2 },
    "wing attack": { energy: 8, turns: 2 },
    "charge beam": { energy: 11, turns: 3 },
    "frost breath": { energy: 5, turns: 2 },
    "double kick": { energy: 8, turns: 2 },
    "fairy wind": { energy: 9, turns: 2 },
    "magical leaf": { energy: 10, turns: 3 },
    "rollout": { energy: 14, turns: 3 },
    "leafage": { energy: 6, turns: 2 },
    "water shuriken": { energy: 14, turns: 3 }
};

// Helper function to get stats or a fallback
function getFastMoveStats(moveName) {
    if (!moveName) return null;
    const name = moveName.toLowerCase().trim();
    if (FAST_MOVE_ENERGY[name]) {
        return FAST_MOVE_ENERGY[name];
    }
    // Fallback: assume average 3 EPT, 2 turns (so 6 energy per attack)
    return { energy: 6, turns: 2, isFallback: true };
}
