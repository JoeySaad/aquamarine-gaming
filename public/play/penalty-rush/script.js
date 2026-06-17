const CONFIG = {
  bestOfFiveShots: 5,
  roundDelayMs: 900,
  shotTravelMs: 650,
  minPower: 18,
  maxPower: 100,
  idealPowerMin: 42,
  idealPowerMax: 72,
  baseSpread: 4.8,
  keeperBaseReach: 56,
  postBallRadiusPercent: 3.2
};

const COUNTRIES = [
  { id: "brazil", name: "Brazil", flag: "🇧🇷", trait: "More curve", curve: 1.35, power: 1, keeper: 1, low: 1, reaction: 1 },
  { id: "germany", name: "Germany", flag: "🇩🇪", trait: "Consistent power", curve: 1, power: 1.18, keeper: 1.02, low: 1, reaction: 1 },
  { id: "france", name: "France", flag: "🇫🇷", trait: "Faster keeper", curve: 1, power: 1.04, keeper: 1.24, low: 1, reaction: 1.08 },
  { id: "usa", name: "USA", flag: "🇺🇸", trait: "Balanced", curve: 1.04, power: 1.04, keeper: 1.04, low: 1.04, reaction: 1.04 },
  { id: "argentina", name: "Argentina", flag: "🇦🇷", trait: "Better low shots", curve: 1.12, power: 1, keeper: 1, low: 1.32, reaction: 1 },
  { id: "japan", name: "Japan", flag: "🇯🇵", trait: "Fast reaction", curve: 1, power: 1, keeper: 1.08, low: 1, reaction: 1.28 },
  { id: "england", name: "England", flag: "🏴", trait: "Power strikes", curve: 0.96, power: 1.15, keeper: 1, low: 0.96, reaction: 1 },
  { id: "spain", name: "Spain", flag: "🇪🇸", trait: "Precise aim", curve: 1.08, power: 1, keeper: 1, low: 1, reaction: 1.05 }
];

const ROUNDS = ["Quarterfinal", "Semifinal", "Final", "Champion"];

const ACHIEVEMENTS = [
  ["firstKick", "First Kick", "Take your first penalty."],
  ["firstGoal", "First Goal", "Score your first penalty."],
  ["firstMiss", "First Miss", "Miss your first penalty."],
  ["firstSave", "First Save", "Save your first penalty."],
  ["gettingStarted", "Getting Started", "Play 3 total matches."],
  ["warmedUp", "Warmed Up", "Play 10 total matches."],
  ["penaltyRegular", "Penalty Regular", "Take 50 total penalties."],
  ["shootoutVeteran", "Shootout Veteran", "Take 100 total penalties."],
  ["classicStarter", "Classic Starter", "Play Classic Mode once."],
  ["classicScorer", "Classic Scorer", "Score 5 points in Classic Mode."],
  ["doubleDigits", "Double Digits", "Score 10 points in Classic Mode."],
  ["classicPro", "Classic Pro", "Score 20 points in Classic Mode."],
  ["classicMonster", "Classic Monster", "Score 35 points in Classic Mode."],
  ["noPanic", "No Panic", "Reach a 5-goal streak in Classic Mode."],
  ["onFire", "On Fire", "Reach a 10-goal streak in Classic Mode."],
  ["threeStrikes", "Three Strikes", "Finish a Classic Mode run with 3 fails."],
  ["oneMoreTry", "One More Try", "Restart Classic Mode after losing."],
  ["newRecord", "New Record", "Beat your Classic Mode best score."],
  ["perfectStart", "Perfect Start", "Score the first 5 shots in a Classic Mode run."],
  ["countrySelected", "Country Selected", "Pick a country for the first time."],
  ["firstMatchWin", "First Match Win", "Win your first tournament match."],
  ["qfWinner", "Quarterfinal Winner", "Win a quarterfinal match."],
  ["sfWinner", "Semifinal Winner", "Win a semifinal match."],
  ["finalist", "Finalist", "Reach the tournament final."],
  ["champions", "Champions", "Win the tournament."],
  ["backToBack", "Back-to-Back", "Win two tournament matches in a row."],
  ["cupRun", "Cup Run", "Reach the final twice."],
  ["dynasty", "Dynasty", "Win 3 total tournaments."],
  ["cleanTournament", "Clean Tournament", "Win a full tournament without losing a match."],
  ["clutchFinish", "Clutch Finish", "Win a match on the final kick of regulation."],
  ["gloveTouch", "Glove Touch", "Block your first shot."],
  ["wall", "Wall", "Make 3 saves in one match."],
  ["lockedIn", "Locked In", "Make 5 saves in one tournament."],
  ["brickWall", "Brick Wall", "Save 10 total shots."],
  ["superKeeper", "Super Keeper", "Save 50 total shots."],
  ["perfectRead", "Perfect Read", "Save a shot aimed at the corner."],
  ["lastChanceSave", "Last Chance Save", "Save a shot that would have eliminated you."],
  ["finalSave", "Final Save", "Win a tournament match by saving the final penalty."],
  ["lowRoller", "Low Roller", "Score with a low-power shot."],
  ["topBins", "Top Bins", "Score in a top corner."],
  ["bottomCorner", "Bottom Corner", "Score in a bottom corner."],
  ["powerShot", "Power Shot", "Score with high power."],
  ["sweetSpot", "Sweet Spot", "Score with perfect/near-perfect power."],
  ["postAndIn", "Post And In", "Score after hitting the post."],
  ["noTouch", "No Touch", "Score while the keeper dives the wrong way."],
  ["iceCold", "Ice Cold", "Score the winning penalty in a shootout."],
  ["suddenDeath", "Sudden Death Survivor", "Win a match in sudden death."],
  ["perfectFive", "Perfect Five", "Score all 5 regulation penalties in a match."],
  ["easyWin", "Easy Win", "Win a tournament match on Easy."],
  ["mediumWin", "Medium Win", "Win a tournament match on Medium."],
  ["hardWin", "Hard Win", "Win a tournament match on Hard."],
  ["easyChampion", "Easy Champion", "Win a full tournament on Easy."],
  ["mediumChampion", "Medium Champion", "Win a full tournament on Medium."],
  ["hardChampion", "Hard Champion", "Win a full tournament on Hard."],
  ["hardModeHero", "Hard Mode Hero", "Win 3 matches on Hard."],
  ["noMercy", "No Mercy", "Win a Hard tournament without going to sudden death."],
  ["classicEasy10", "Classic Easy 10", "Score 10 in Classic Mode on Easy."],
  ["classicMedium15", "Classic Medium 15", "Score 15 in Classic Mode on Medium."],
  ["classicHard20", "Classic Hard 20", "Score 20 in Classic Mode on Hard."],
  ["pressurePlayer", "Pressure Player", "Win a sudden death match on Hard."],
  ["usaDebut", "USA Debut", "Play a tournament as USA."],
  ["brazilDebut", "Brazil Debut", "Play a tournament as Brazil."],
  ["argentinaDebut", "Argentina Debut", "Play a tournament as Argentina."],
  ["franceDebut", "France Debut", "Play a tournament as France."],
  ["germanyDebut", "Germany Debut", "Play a tournament as Germany."],
  ["englandDebut", "England Debut", "Play a tournament as England."],
  ["japanDebut", "Japan Debut", "Play a tournament as Japan."],
  ["spainDebut", "Spain Debut", "Play a tournament as Spain."],
  ["collector", "Country Collector", "Play tournaments with 5 different countries."],
  ["worldTraveler", "World Traveler", "Play tournaments with all countries."],
  ["firstNationChampion", "First Nation Champion", "Win a tournament with any country."],
  ["multiNationChampion", "Multi-Nation Champion", "Win tournaments with 3 different countries."],
  ["worldChampion", "World Champion", "Win tournaments with all countries."],
  ["achievementHunter", "Achievement Hunter", "Unlock 10 achievements."],
  ["trophyCollector", "Trophy Collector", "Unlock 25 achievements."],
  ["penaltyExpert", "Penalty Expert", "Unlock 50 achievements."],
  ["penaltyLegend", "Penalty Legend", "Unlock all achievements."]
];

const STATES = {
  MENU: "MENU",
  COUNTRY: "COUNTRY",
  PROGRESS: "PROGRESS",
  SETTINGS: "SETTINGS",
  ACHIEVEMENTS: "ACHIEVEMENTS",
  HOW_TO_PLAY: "HOW_TO_PLAY",
  SHOOTING: "SHOOTING",
  SAVING: "SAVING",
  SHOT_IN_PROGRESS: "SHOT_IN_PROGRESS",
  ROUND_RESULT: "ROUND_RESULT",
  PAUSED: "PAUSED",
  GAME_OVER: "GAME_OVER"
};

const els = {
  screens: document.querySelectorAll(".screen"),
  menuScreen: document.querySelector("#menuScreen"),
  countryScreen: document.querySelector("#countryScreen"),
  progressScreen: document.querySelector("#progressScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  howToScreen: document.querySelector("#howToScreen"),
  achievementsScreen: document.querySelector("#achievementsScreen"),
  settingsScreen: document.querySelector("#settingsScreen"),
  gameOverScreen: document.querySelector("#gameOverScreen"),
  pauseScreen: document.querySelector("#pauseScreen"),
  countryGrid: document.querySelector("#countryGrid"),
  menuBest: document.querySelector("#menuBest"),
  playButton: document.querySelector("#playButton"),
  classicButton: document.querySelector("#classicButton"),
  achievementsButton: document.querySelector("#achievementsButton"),
  backToMenuButton: document.querySelector("#backToMenuButton"),
  continueTournamentButton: document.querySelector("#continueTournamentButton"),
  progressMenuButton: document.querySelector("#progressMenuButton"),
  progressEyebrow: document.querySelector("#progressEyebrow"),
  progressTitle: document.querySelector("#progressTitle"),
  progressBracket: document.querySelector("#progressBracket"),
  progressText: document.querySelector("#progressText"),
  howToButton: document.querySelector("#howToButton"),
  settingsButton: document.querySelector("#settingsButton"),
  difficultyButtons: document.querySelectorAll(".difficulty-button"),
  closeHowToButton: document.querySelector("#closeHowToButton"),
  closeAchievementsButton: document.querySelector("#closeAchievementsButton"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  resetScoresButton: document.querySelector("#resetScoresButton"),
  fullscreenButton: document.querySelector("#fullscreenButton"),
  soundToggle: document.querySelector("#soundToggle"),
  musicVolumeSlider: document.querySelector("#musicVolumeSlider"),
  sfxVolumeSlider: document.querySelector("#sfxVolumeSlider"),
  achievementsList: document.querySelector("#achievementsList"),
  achievementToast: document.querySelector("#achievementToast"),
  field: document.querySelector("#field"),
  goalFrame: document.querySelector(".goal-frame"),
  net: document.querySelector(".net"),
  keeper: document.querySelector("#keeper"),
  aimReticle: document.querySelector("#aimReticle"),
  gloves: document.querySelector("#gloves"),
  ball: document.querySelector("#ball"),
  ballShadow: document.querySelector("#ballShadow"),
  ballTrail: document.querySelector("#ballTrail"),
  goalFlash: document.querySelector("#goalFlash"),
  powerFill: document.querySelector("#powerFill"),
  shotTypeLabel: document.querySelector("#shotTypeLabel"),
  feedback: document.querySelector("#feedback"),
  crowdBanner: document.querySelector("#crowdBanner"),
  particles: document.querySelector("#particles"),
  playerTeamLabel: document.querySelector("#playerTeamLabel"),
  opponentTeamLabel: document.querySelector("#opponentTeamLabel"),
  playerDots: document.querySelector("#playerDots"),
  opponentDots: document.querySelector("#opponentDots"),
  roundLabel: document.querySelector("#roundLabel"),
  scoreLabel: document.querySelector("#scoreLabel"),
  turnLabel: document.querySelector("#turnLabel"),
  gameOverEyebrow: document.querySelector("#gameOverEyebrow"),
  gameOverTitle: document.querySelector("#gameOverTitle"),
  finalScore: document.querySelector("#finalScore"),
  finalBest: document.querySelector("#finalBest"),
  finalGoals: document.querySelector("#finalGoals"),
  finalShots: document.querySelector("#finalShots"),
  finalAccuracy: document.querySelector("#finalAccuracy"),
  finalMode: document.querySelector("#finalMode"),
  pauseButton: document.querySelector("#pauseButton"),
  resumeGameButton: document.querySelector("#resumeGameButton"),
  pauseMenuButton: document.querySelector("#pauseMenuButton"),
  playAgainButton: document.querySelector("#playAgainButton"),
  mainMenuButton: document.querySelector("#mainMenuButton")
};

const game = {
  state: STATES.MENU,
  mode: "tournament",
  selectedCountry: null,
  opponent: null,
  opponents: [],
  roundIndex: 0,
  aim: { x: 50, y: 52 },
  smoothAim: { x: 50, y: 52 },
  saveAim: { x: 50, y: 58 },
  smoothSaveAim: { x: 50, y: 58 },
  charging: false,
  power: 52,
  powerDirection: 1,
  shot: null,
  shotCompleted: false,
  saveDive: null,
  saveTurnToken: 0,
  pausedFromState: null,
  tournamentSaves: 0,
  tournamentHadSuddenDeath: false,
  tournamentLosses: 0,
  matchStarted: false,
  playerResults: [],
  opponentResults: [],
  playerScore: 0,
  opponentScore: 0,
  turn: "shoot",
  classicScore: 0,
  classicFails: 0,
  classicStreak: 0,
  classicEnded: false,
  lastTime: 0,
  saves: 0,
  settings: {
    sound: readBool("penaltyRushSound", true),
    musicVolume: Number(localStorage.getItem("penaltyRushMusicVolume") || 35),
    sfxVolume: Number(localStorage.getItem("penaltyRushSfxVolume") || 70),
    difficulty: localStorage.getItem("penaltyRushDifficulty") || "easy"
  },
  audioContext: null
};

function readBool(key, fallback) {
  const value = localStorage.getItem(key);
  return value === null ? fallback : value === "true";
}

function readJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value == null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readStat(key) {
  return Number(localStorage.getItem(key) || 0);
}

function setStat(key, value) {
  localStorage.setItem(key, String(value));
  return value;
}

function incrementStat(key, amount = 1) {
  return setStat(key, readStat(key) + amount);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function difficultyConfig() {
  return {
    easy: { ai: 0.82, keeper: 0.84, spread: 1.2, readyMs: 1800, playerReach: 1.16 },
    medium: { ai: 1, keeper: 1, spread: 1, readyMs: 1500, playerReach: 1 },
    hard: { ai: 1.18, keeper: 1.16, spread: 0.82, readyMs: 1250, playerReach: 0.88 }
  }[game.settings.difficulty] || { ai: 0.82, keeper: 0.84, spread: 1.2, readyMs: 1800, playerReach: 1.16 };
}

function getBestRound() {
  return Number(localStorage.getItem("penaltyRushTournamentBestRound") || 0);
}

function updateBestDisplay() {
  const best = getBestRound();
  els.menuBest.textContent = best >= 3 ? "Champion" : `Round ${best + 1}`;
}

function unlockedAchievements() {
  return readJson("penaltyRushAchievements", []);
}

function unlockAchievement(id) {
  const unlocked = new Set(unlockedAchievements());
  if (unlocked.has(id)) return;
  unlocked.add(id);
  writeJson("penaltyRushAchievements", [...unlocked]);
  const achievement = ACHIEVEMENTS.find(item => item[0] === id);
  if (achievement) showAchievementToast(`Achievement Unlocked: ${achievement[1]}`);
  checkCompletionAchievements(unlocked);
  renderAchievements();
}

function checkCompletionAchievements(currentUnlocked = new Set(unlockedAchievements())) {
  const count = currentUnlocked.size;
  if (count >= 10 && !currentUnlocked.has("achievementHunter")) unlockAchievement("achievementHunter");
  if (count >= 25 && !currentUnlocked.has("trophyCollector")) unlockAchievement("trophyCollector");
  if (count >= 50 && !currentUnlocked.has("penaltyExpert")) unlockAchievement("penaltyExpert");
  if (count >= ACHIEVEMENTS.length - 1 && !currentUnlocked.has("penaltyLegend")) unlockAchievement("penaltyLegend");
}

function renderAchievements() {
  if (!els.achievementsList) return;
  const unlocked = new Set(unlockedAchievements());
  els.achievementsList.innerHTML = "";
  ACHIEVEMENTS.forEach(([id, name, description]) => {
    const item = document.createElement("div");
    item.className = `achievement-item ${unlocked.has(id) ? "unlocked" : ""}`;
    item.innerHTML = `<strong>${unlocked.has(id) ? "✓" : "○"} ${name}</strong><span>${description}</span>`;
    els.achievementsList.appendChild(item);
  });
}

function showAchievementToast(text) {
  els.achievementToast.textContent = text;
  els.achievementToast.classList.add("show");
  window.setTimeout(() => els.achievementToast.classList.remove("show"), 2200);
}

function pauseGame() {
  if (![STATES.SHOOTING, STATES.SAVING].includes(game.state)) return;
  game.pausedFromState = game.state;
  game.charging = false;
  game.saveTurnToken = 0;
  setState(STATES.PAUSED);
  updateCrowd("Paused");
  playTone("button");
}

function resumeGame() {
  if (game.state !== STATES.PAUSED || !game.pausedFromState) return;
  setState(game.pausedFromState);
  game.pausedFromState = null;
  updateHud();
  updateCrowd(game.turn === "shoot" ? "Your kick. Hold, aim, release." : "Get ready. React after the shot!");
  if (game.turn === "save") {
    const token = Date.now();
    game.saveTurnToken = token;
    window.setTimeout(() => {
      if (game.state === STATES.SAVING && game.saveTurnToken === token) startOpponentShot();
    }, difficultyConfig().readyMs);
  }
  playTone("button");
}

function quitToMenu() {
  game.charging = false;
  game.shot = null;
  game.saveDive = null;
  game.pausedFromState = null;
  game.saveTurnToken = 0;
  resetRoundVisuals();
  updateBestDisplay();
  setState(STATES.MENU);
  playTone("button");
}

function setState(state) {
  game.state = state;
  els.screens.forEach(screen => screen.classList.remove("active"));
  if (state === STATES.MENU) els.menuScreen.classList.add("active");
  if (state === STATES.COUNTRY) els.countryScreen.classList.add("active");
  if (state === STATES.PROGRESS) els.progressScreen.classList.add("active");
  if (state === STATES.HOW_TO_PLAY) els.howToScreen.classList.add("active");
  if (state === STATES.ACHIEVEMENTS) els.achievementsScreen.classList.add("active");
  if (state === STATES.SETTINGS) els.settingsScreen.classList.add("active");
  if ([STATES.SHOOTING, STATES.SAVING, STATES.SHOT_IN_PROGRESS, STATES.ROUND_RESULT].includes(state)) {
    els.gameScreen.classList.add("active");
  }
  if (state === STATES.PAUSED) {
    els.gameScreen.classList.add("active");
    els.pauseScreen.classList.add("active");
  }
  if (state === STATES.GAME_OVER) {
    els.gameScreen.classList.add("active");
    els.gameOverScreen.classList.add("active");
  }
}

function flagMarkup(country, className = "team-flag-label") {
  if (!country) return "-";
  if (!country.id || ["classic", "keeper"].includes(country.id)) return `<span>${country.name}</span>`;
  if (!className) return `<span class="flag-icon flag-${country.id}" aria-hidden="true"></span>`;
  return `<span class="${className}"><span class="flag-icon flag-${country.id}" aria-hidden="true"></span><span>${country.name}</span></span>`;
}

function renderCountries() {
  els.countryGrid.innerHTML = "";
  COUNTRIES.forEach(country => {
    const button = document.createElement("button");
    button.className = "country-card";
    button.innerHTML = `<span class="country-flag">${flagMarkup(country, "")}</span><strong>${country.name}</strong><span>${country.trait}</span>`;
    button.addEventListener("click", () => startTournament(country));
    els.countryGrid.appendChild(button);
  });
}

function startTournament(country) {
  game.mode = "tournament";
  game.selectedCountry = country;
  game.opponents = COUNTRIES.filter(item => item.id !== country.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  game.roundIndex = 0;
  game.saves = 0;
  game.tournamentSaves = 0;
  game.tournamentHadSuddenDeath = false;
  game.tournamentLosses = 0;
  game.matchStarted = false;
  unlockAchievement("countrySelected");
  showProgress("Road to the Cup", `${country.name} enters the tournament.`, "Start Match");
  playTone("button");
}

function showProgress(title, text, buttonText = "Continue") {
  els.progressEyebrow.textContent = "Tournament";
  els.progressTitle.textContent = title;
  els.progressText.textContent = text;
  els.continueTournamentButton.textContent = buttonText;
  els.progressBracket.innerHTML = "";
  for (let i = 0; i < 3; i += 1) {
    const opponent = game.opponents[i];
    const step = document.createElement("div");
    step.className = `bracket-step ${i < game.roundIndex ? "done" : i === game.roundIndex ? "current" : ""}`;
    step.innerHTML = `<strong>${ROUNDS[i]}</strong><br>${opponent ? flagMarkup(opponent, "bracket-team") : "TBD"}`;
    els.progressBracket.appendChild(step);
  }
  setState(STATES.PROGRESS);
}

function startMatch() {
  game.mode = "tournament";
  if (game.selectedCountry) {
    const used = new Set(readJson("penaltyRushCountriesUsed", []));
    used.add(game.selectedCountry.id);
    writeJson("penaltyRushCountriesUsed", [...used]);
    const debut = countryDebutAchievement(game.selectedCountry.id);
    if (debut) unlockAchievement(debut);
    if (used.size >= 5) unlockAchievement("collector");
    if (used.size >= COUNTRIES.length) unlockAchievement("worldTraveler");
  }
  trackMatchPlayed();
  game.matchStarted = true;
  game.opponent = game.opponents[game.roundIndex];
  game.playerResults = [];
  game.opponentResults = [];
  game.playerScore = 0;
  game.opponentScore = 0;
  game.turn = "shoot";
  game.power = 52;
  game.charging = false;
  resetRoundVisuals();
  setState(STATES.SHOOTING);
  updateHud();
  updateCrowd(`${game.selectedCountry.name} vs ${game.opponent.name}. Your kick.`);
  playTone("button");
}

function startClassicMode() {
  if (game.mode === "classic" && game.classicEnded) unlockAchievement("oneMoreTry");
  game.mode = "classic";
  game.selectedCountry = { id: "classic", name: "Classic", flag: "★", trait: "Arcade" };
  game.opponent = { id: "keeper", name: "Keeper", flag: "🧤", trait: "Scaling keeper", keeper: 1, reaction: 1 };
  game.roundIndex = 0;
  game.playerResults = [];
  game.opponentResults = [];
  game.playerScore = 0;
  game.opponentScore = 0;
  game.classicScore = 0;
  game.classicFails = 0;
  game.classicStreak = 0;
  game.classicEnded = false;
  game.saves = 0;
  game.turn = "shoot";
  game.power = 52;
  game.charging = false;
  resetRoundVisuals();
  unlockAchievement("classicStarter");
  setState(STATES.SHOOTING);
  updateHud();
  updateCrowd("Classic Mode. Score until 3 fails.");
  playTone("button");
}

function updateHud() {
  if (game.mode === "classic") {
    els.playerTeamLabel.textContent = "Classic";
    els.opponentTeamLabel.textContent = `Best ${Number(localStorage.getItem("penaltyRushClassicBest") || 0)}`;
    els.roundLabel.textContent = "Classic Mode";
    els.scoreLabel.textContent = String(game.classicScore);
    els.turnLabel.textContent = `Fails ${game.classicFails}/3 · Streak ${game.classicStreak}`;
    renderDots(els.playerDots, game.playerResults.slice(-8));
    renderDots(els.opponentDots, []);
    return;
  }
  const player = game.selectedCountry;
  const opponent = game.opponent;
  els.playerTeamLabel.innerHTML = player ? flagMarkup(player) : "-";
  els.opponentTeamLabel.innerHTML = opponent ? flagMarkup(opponent) : "-";
  els.roundLabel.textContent = ROUNDS[game.roundIndex] || "Tournament";
  els.scoreLabel.textContent = `${game.playerScore} - ${game.opponentScore}`;
  els.turnLabel.textContent = game.turn === "shoot" ? "Your Kick" : "Your Save";
  renderDots(els.playerDots, game.playerResults);
  renderDots(els.opponentDots, game.opponentResults);
}

function renderDots(container, results) {
  container.innerHTML = "";
  const total = Math.max(CONFIG.bestOfFiveShots, results.length + (results.length >= CONFIG.bestOfFiveShots ? 1 : 0));
  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement("span");
    const result = results[i];
    dot.className = `dot ${result === "goal" ? "made" : result ? result : ""}`;
    container.appendChild(dot);
  }
}

function updateKeeperDesign() {
  if (game.turn === "save") {
    els.keeper.className = "keeper idle keeper-gloves-only";
    return;
  }
  const keeperCountry = game.mode === "classic"
    ? { id: "generic" }
    : game.opponent;
  const keeperId = keeperCountry && keeperCountry.id ? keeperCountry.id : "generic";
  els.keeper.className = `keeper idle keeper-${keeperId}`;
}

function resetRoundVisuals() {
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  els.ball.style.transition = "transform 120ms ease";
  els.ball.style.left = "50%";
  els.ball.style.top = "";
  els.ball.style.bottom = mobile ? "17%" : "19.5%";
  els.ball.style.transform = "translate(-50%, 0) scale(1)";
  els.ball.classList.add("ready-pulse");
  els.ballShadow.style.left = "50%";
  els.ballShadow.style.top = "";
  els.ballShadow.style.bottom = mobile ? "15.4%" : "17.8%";
  els.ballShadow.style.transform = "translateX(-50%) scale(1)";
  els.ballShadow.style.opacity = "1";
  els.ballTrail.style.opacity = "0";
  updateKeeperDesign();
  els.keeper.style.transform = "translate(-50%, -50%)";
  els.net.classList.remove("shake");
  els.goalFlash.classList.remove("flash");
  els.field.classList.remove("shake");
  els.feedback.className = "feedback";
  els.feedback.textContent = "";
  els.aimReticle.classList.toggle("save-mode", game.turn === "save");
  els.gloves.classList.toggle("active", game.turn === "save");
  els.powerFill.style.width = `${game.power}%`;
  els.shotTypeLabel.textContent = game.turn === "shoot" ? "Hold to shoot" : "Move gloves, dive";
}

function moveAimFromPoint(clientX, clientY) {
  const rect = els.goalFrame.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * 100;
  const y = ((clientY - rect.top) / rect.height) * 100;
  const savingControl = game.state === STATES.SAVING || (game.state === STATES.SHOT_IN_PROGRESS && game.shot && game.shot.actor === "opponent");
  if (savingControl) {
    game.saveAim.x = clamp(x, -8, 108);
    game.saveAim.y = clamp(y, -8, 108);
  } else {
    game.aim.x = clamp(x, -10, 110);
    game.aim.y = clamp(y, -18, 116);
  }
}

function beginCharge() {
  if (game.state !== STATES.SHOOTING || game.charging) return;
  game.charging = true;
  game.power = 18;
  game.powerDirection = 1;
  els.ball.classList.remove("ready-pulse");
  updateCrowd("Power rising...");
}

function releaseShot() {
  if (!game.charging || game.state !== STATES.SHOOTING) return;
  game.charging = false;
  createPlayerShot();
}

function countryAdjusted(country, key, fallback = 1) {
  return country ? country[key] || fallback : fallback;
}

function countryDebutAchievement(countryId) {
  return {
    usa: "usaDebut",
    brazil: "brazilDebut",
    argentina: "argentinaDebut",
    france: "franceDebut",
    germany: "germanyDebut",
    england: "englandDebut",
    japan: "japanDebut",
    spain: "spainDebut"
  }[countryId];
}

function trackPenaltyTaken() {
  const total = incrementStat("penaltyRushTotalPenalties");
  unlockAchievement("firstKick");
  if (total >= 50) unlockAchievement("penaltyRegular");
  if (total >= 100) unlockAchievement("shootoutVeteran");
}

function trackMatchPlayed() {
  const total = incrementStat("penaltyRushMatchesPlayed");
  if (total >= 3) unlockAchievement("gettingStarted");
  if (total >= 10) unlockAchievement("warmedUp");
}

function isCornerShot(target) {
  return (target.x < 18 || target.x > 82) && (target.y < 24 || target.y > 76);
}

function classifyFrameContact(target, profile) {
  const r = CONFIG.postBallRadiusPercent;
  if (target.x < 0 || target.x > 100 || target.y < 0) {
    return {
      result: "post",
      postIn: false,
      postSide: target.x < 0 ? "left" : target.x > 100 ? "right" : "top"
    };
  }
  const postSide = target.x < r ? "left" : target.x > 100 - r ? "right" : target.y < r ? "top" : "";
  return { result: "goal", postIn: Boolean(postSide), postSide };
}

function makeShotProfile(country, target, power) {
  const difficulty = difficultyConfig();
  const low = target.y > 68;
  const high = target.y < 30;
  const side = Math.abs(target.x - 50) / 50;
  let type = "normal";
  if (low) type = "roller";
  else if (high && power > 54) type = "chip";
  else if (side > 0.66) type = "curve";
  const weak = power < 38;
  const strong = power > 78;
  const traitCurve = countryAdjusted(country, "curve");
  const traitPower = countryAdjusted(country, "power");
  const traitLow = countryAdjusted(country, "low");
  const accuracyPenalty = weak ? 5 : strong ? 8 : 0;
  const spread = (CONFIG.baseSpread + accuracyPenalty + Math.max(0, game.roundIndex - 1) * 1.2) * (game.mode === "classic" ? 1 : difficulty.spread);
  const curve = type === "curve" ? Math.sign(target.x - 50) * (13 + side * 18) * traitCurve : 0;
  const roll = type === "roller" || weak;
  const arc = type === "chip" ? 118 : roll ? 14 : 54 + (power / 100) * 36;
  const effectivePower = clamp(power * traitPower + (type === "roller" ? (traitLow - 1) * 12 : 0), 12, 108);
  const duration = clamp(CONFIG.shotTravelMs + (62 - effectivePower) * 6 + (roll ? 230 : 0), 470, 1050);
  const spin = roll ? 620 + effectivePower * 5 : strong ? 1380 : 980;
  const rebound = roll ? 0 : type === "chip" ? 34 : strong ? 26 : 18;
  return { type, power: effectivePower, spread, curve, roll, arc, duration, strong, spin, rebound };
}

function createPlayerShot() {
  if (game.mode === "classic") game.roundIndex = Math.min(2, Math.floor(game.classicScore / 5));
  const goalRect = els.goalFrame.getBoundingClientRect();
  const fieldRect = els.field.getBoundingClientRect();
  const profile = makeShotProfile(game.selectedCountry, game.aim, game.power);
  const spread = profile.spread;
  const targetPercent = {
    x: game.aim.x + rand(-spread, spread),
    y: game.aim.y + rand(-spread * 0.7, spread * 0.7)
  };
  if (profile.roll) targetPercent.y = clamp(targetPercent.y, 66, 98);
  const frame = classifyFrameContact(targetPercent, profile);
  const insideGoal = isInsideGoal(targetPercent);
  const targetPx = percentToField(targetPercent, goalRect, fieldRect);
  const aiKeeper = makeAiKeeperTarget(targetPercent, profile, game.opponent);
  const saved = insideGoal && frame.result !== "post" && aiKeeper.saved;
  const result = frame.result === "post" ? "post" : !insideGoal ? "missed" : saved ? "saved" : "goal";
  startShot({
    actor: "player",
    result,
    targetPercent,
    target: targetPx,
    profile,
    postIn: frame.postIn && result === "goal",
    postSide: frame.postSide,
    keeperTarget: aiKeeper.target,
    savedByRecovery: aiKeeper.recovery,
    feedback: playerFeedback(result, targetPercent, profile, frame)
  });
}

function startOpponentShot() {
  if (game.state !== STATES.SAVING) return;
  const goalRect = els.goalFrame.getBoundingClientRect();
  const fieldRect = els.field.getBoundingClientRect();
  const aiTarget = chooseOpponentTarget(game.opponent);
  const aiPower = clamp(rand(42, 88) + game.roundIndex * 4, 32, 96);
  const difficulty = difficultyConfig();
  const profile = makeShotProfile(game.opponent, aiTarget, aiPower);
  const targetPercent = {
    x: aiTarget.x + rand(-profile.spread * 0.85, profile.spread * 0.85) / difficulty.ai,
    y: aiTarget.y + rand(-profile.spread * 0.55, profile.spread * 0.55) / difficulty.ai
  };
  if (profile.roll) targetPercent.y = clamp(targetPercent.y, 66, 98);
  const frame = classifyFrameContact(targetPercent, profile);
  const insideGoal = isInsideGoal(targetPercent);
  const targetPx = percentToField(targetPercent, goalRect, fieldRect);
  game.saveDive = null;
  startShot({
    actor: "opponent",
    result: frame.result === "post" ? "post" : insideGoal ? "pending" : "missed",
    targetPercent,
    target: targetPx,
    profile,
    postIn: frame.postIn,
    postSide: frame.postSide,
    keeperTarget: percentToField({ x: 50, y: 58 }, goalRect, fieldRect),
    savedByRecovery: false,
    feedback: frame.result === "post" ? "POST!" : insideGoal ? "REACT!" : "WIDE!"
  });
}

function playerDive() {
  if (game.state !== STATES.SHOT_IN_PROGRESS || !game.shot || game.shot.actor !== "opponent" || game.saveDive) return;
  const goalRect = els.goalFrame.getBoundingClientRect();
  const fieldRect = els.field.getBoundingClientRect();
  const divePx = percentToField(game.saveAim, goalRect, fieldRect);
  game.saveDive = {
    percent: { ...game.saveAim },
    point: divePx,
    time: performance.now()
  };
  game.shot.keeperTarget = divePx;
  game.shot.diveStartedAt = game.saveDive.time;
  updateCrowd("Dive!");
}

function isInsideGoal(target) {
  return target.x >= 0 && target.x <= 100 && target.y >= 0 && target.y <= 100;
}

function percentToField(target, goalRect, fieldRect) {
  return {
    x: goalRect.left + goalRect.width * (target.x / 100) - fieldRect.left,
    y: goalRect.top + goalRect.height * (target.y / 100) - fieldRect.top
  };
}

function makeAiKeeperTarget(target, profile, keeperCountry) {
  const difficulty = difficultyConfig();
  const goalRect = els.goalFrame.getBoundingClientRect();
  const fieldRect = els.field.getBoundingClientRect();
  const keeper = countryAdjusted(keeperCountry, "keeper");
  const reaction = countryAdjusted(keeperCountry, "reaction");
  const read = clamp((0.36 + game.roundIndex * 0.08 + (profile.roll ? 0.12 : 0) + (reaction - 1) * 0.16) * difficulty.keeper, 0.22, 0.86);
  const guess = {
    x: lerp(50, target.x, read) + rand(-10, 10),
    y: lerp(56, target.y, read) + rand(-8, 8)
  };
  const guessPx = percentToField(guess, goalRect, fieldRect);
  const targetPx = percentToField(target, goalRect, fieldRect);
  const reach = (CONFIG.keeperBaseReach * keeper + game.roundIndex * 8 + (profile.roll ? 28 : 0)) * difficulty.keeper;
  const distance = Math.hypot(targetPx.x - guessPx.x, targetPx.y - guessPx.y);
  const saved = distance < reach && Math.random() < clamp((0.55 + game.roundIndex * 0.08 + (reaction - 1) * 0.1) * difficulty.keeper, 0.4, 0.9);
  return { target: guessPx, saved, recovery: profile.roll && saved && distance > reach * 0.7 };
}

function chooseOpponentTarget(country) {
  const lowBias = countryAdjusted(country, "low") > 1.1;
  const curveBias = countryAdjusted(country, "curve") > 1.1;
  return {
    x: curveBias ? (Math.random() > 0.5 ? rand(8, 25) : rand(75, 92)) : rand(18, 82),
    y: lowBias ? rand(68, 90) : rand(18, 82)
  };
}

function playerFeedback(result, target, profile, frame = {}) {
  if (result === "saved") return "GOALIE SAVE!";
  if (result === "post") return "POST!";
  if (result === "missed") return profile.strong ? "OVER HIT!" : "MISS!";
  if (frame.postIn) return "POST IN!";
  if (target.y < 24 && (target.x < 26 || target.x > 74)) return "TOP CORNER!";
  if (profile.type === "roller") return "WEAK ROLLER!";
  if (profile.type === "curve") return "CURVED IN!";
  if (game.power >= CONFIG.idealPowerMin && game.power <= CONFIG.idealPowerMax) return "PERFECT SHOT!";
  return "GOAL!";
}

function resolveOpponentShot(shot) {
  if (!isInsideGoal(shot.targetPercent)) {
    shot.result = "missed";
    shot.feedback = "WIDE!";
    return;
  }
  const reaction = countryAdjusted(game.selectedCountry, "reaction");
  const keeper = countryAdjusted(game.selectedCountry, "keeper");
  const goalRect = els.goalFrame.getBoundingClientRect();
  const fieldRect = els.field.getBoundingClientRect();
  const centerPoint = percentToField({ x: 50, y: 58 }, goalRect, fieldRect);
  const savePoint = game.saveDive ? game.saveDive.point : centerPoint;
  const diveDelay = game.saveDive ? game.saveDive.time - shot.startedAt : shot.duration + 1;
  const lateDive = game.saveDive && diveDelay > shot.duration + 80;
  const bodyRadiusX = game.saveDive ? 70 : 42;
  const bodyRadiusY = game.saveDive ? 62 : 54;
  const recovery = shot.profile.roll ? 34 * reaction : 0;
  const reachX = (bodyRadiusX * keeper + recovery) * difficultyConfig().playerReach;
  const reachY = (bodyRadiusY * keeper + recovery * 0.55) * difficultyConfig().playerReach;
  const ellipse = Math.pow((shot.target.x - savePoint.x) / reachX, 2) + Math.pow((shot.target.y - savePoint.y) / reachY, 2);
  const saved = !lateDive && ellipse <= 1;
  shot.result = saved ? "saved" : "goal";
  shot.savedByRecovery = saved && shot.profile.roll && ellipse > 0.58;
  shot.keeperTarget = saved ? shot.target : savePoint;
  shot.feedback = saved ? (shot.savedByRecovery ? "RECOVERY SAVE!" : "BIG SAVE!") : (game.saveDive ? "GOAL!" : "TOO LATE!");
  if (saved) {
    game.saves += 1;
    game.tournamentSaves += 1;
    const totalSaves = incrementStat("penaltyRushTotalSaves");
    unlockAchievement("firstSave");
    unlockAchievement("gloveTouch");
    if (game.saves >= 3) unlockAchievement("wall");
    if (game.tournamentSaves >= 5) unlockAchievement("lockedIn");
    if (totalSaves >= 10) unlockAchievement("brickWall");
    if (totalSaves >= 50) unlockAchievement("superKeeper");
    if (isCornerShot(shot.targetPercent)) unlockAchievement("perfectRead");
    if (game.opponentScore > game.playerScore && getMatchVerdict() === "loss") unlockAchievement("lastChanceSave");
  }
}

function unlockPlayerShotAchievements(shot) {
  if (shot.actor !== "player") return;
  const scored = shot.result === "goal";
  if (!scored) {
    if (["missed", "post", "saved"].includes(shot.result)) unlockAchievement("firstMiss");
    return;
  }
  unlockAchievement("firstGoal");
  if (shot.profile.power < 38 || shot.profile.roll) unlockAchievement("lowRoller");
  if (shot.targetPercent.y < 24 && (shot.targetPercent.x < 24 || shot.targetPercent.x > 76)) unlockAchievement("topBins");
  if (shot.targetPercent.y > 76 && (shot.targetPercent.x < 24 || shot.targetPercent.x > 76)) unlockAchievement("bottomCorner");
  if (shot.profile.strong || shot.profile.power > 78) unlockAchievement("powerShot");
  if (game.power >= CONFIG.idealPowerMin - 4 && game.power <= CONFIG.idealPowerMax + 4) unlockAchievement("sweetSpot");
  if (shot.postIn) unlockAchievement("postAndIn");
  if (shot.keeperTarget && Math.abs(shot.keeperTarget.x - shot.target.x) > 140) unlockAchievement("noTouch");
}

function startShot(shotData) {
  const fieldRect = els.field.getBoundingClientRect();
  const ballStart = els.ball.getBoundingClientRect();
  const shadowStart = els.ballShadow.getBoundingClientRect();
  game.shot = {
    ...shotData,
    start: {
      x: ballStart.left + ballStart.width / 2 - fieldRect.left,
      y: ballStart.top + ballStart.height / 2 - fieldRect.top
    },
    shadowStart: {
      x: shadowStart.left + shadowStart.width / 2 - fieldRect.left,
      y: shadowStart.top + shadowStart.height / 2 - fieldRect.top
    },
    startedAt: performance.now(),
    duration: shotData.profile.duration,
    settleDuration: shotData.profile.roll ? 760 : shotData.result === "goal" ? 560 : 440,
    finalScale: shotData.profile.roll ? 0.62 : 0.52
  };
  game.shotCompleted = false;
  els.ball.classList.remove("ready-pulse");
  setState(STATES.SHOT_IN_PROGRESS);
  updateHud();
  playTone("kick");
}

function animateKeeper(now) {
  if (!game.shot) return;
  const shot = game.shot;
  const fieldRect = els.field.getBoundingClientRect();
  const goalRect = els.goalFrame.getBoundingClientRect();
  const centerX = fieldRect.left + fieldRect.width / 2;
  if (shot.actor === "opponent" && !game.saveDive) return;
  const delay = shot.actor === "player" ? 240 - game.roundIndex * 24 : Math.max(0, (shot.diveStartedAt || now) - shot.startedAt);
  if (now < shot.startedAt + delay) return;
  let target = shot.keeperTarget;
  if (shot.actor === "opponent" && game.saveDive) {
    const nearBall = Math.hypot(shot.target.x - game.saveDive.point.x, shot.target.y - game.saveDive.point.y) < (shot.profile.roll ? 138 : 116);
    if ((nearBall && now > shot.startedAt + shot.duration * 0.48) || shot.savedByRecovery) target = shot.target;
  } else if (shot.savedByRecovery && now > shot.startedAt + shot.duration * 0.62) {
    target = shot.target;
  }
  const progress = clamp((now - shot.startedAt - delay) / (shot.actor === "opponent" ? 260 : 430), 0, 1);
  const eased = 1 - Math.pow(1 - progress, 3);
  const xMove = lerp(0, target.x + fieldRect.left - centerX, eased);
  const yMove = lerp(0, target.y + fieldRect.top - (goalRect.top + goalRect.height * 0.55), eased);
  const rotate = target.x > fieldRect.width / 2 ? 52 : -52;
  els.keeper.classList.remove("idle");
  els.keeper.style.transform = `translate(calc(-50% + ${xMove}px), calc(-50% + ${yMove}px)) rotate(${rotate}deg) scale(1.05)`;
}

function animateBall(now) {
  const shot = game.shot;
  const elapsed = now - shot.startedAt;
  const t = clamp(elapsed / shot.duration, 0, 1);
  const eased = shot.profile.roll ? t : 1 - Math.pow(1 - t, 3);
  const curveOffset = Math.sin(t * Math.PI) * shot.profile.curve;
  let x = lerp(shot.start.x, shot.target.x, eased) + curveOffset;
  let groundY = lerp(shot.start.y, shot.target.y, eased);
  let height = Math.sin(t * Math.PI) * shot.profile.arc;
  height += shot.profile.roll ? Math.abs(Math.sin(t * Math.PI * 4)) * 2.5 * (1 - t) : 0;
  let y = groundY - height;
  let scale = lerp(1, shot.finalScale, eased) * (1 + height / 520);
  const shadowX = lerp(shot.shadowStart.x, shot.target.x, eased) + curveOffset * 0.65;
  let shadowY = lerp(shot.shadowStart.y, shot.target.y + 26, eased);
  let shadowScale = lerp(1, 0.58, eased) * (1 + height / 620);
  let shadowOpacity = clamp(lerp(0.9, 0.25, t) - height / 420, 0.12, 0.9);
  let spin = eased * shot.profile.spin;
  if (shot.actor === "opponent" && shot.result === "pending" && elapsed >= shot.duration) resolveOpponentShot(shot);
  if (elapsed > shot.duration) {
    const goalRect = els.goalFrame.getBoundingClientRect();
    const fieldRect = els.field.getBoundingClientRect();
    const netFloorY = goalRect.top - fieldRect.top + goalRect.height - 10;
    const settle = clamp((elapsed - shot.duration) / shot.settleDuration, 0, 1);
    const settleEase = 1 - Math.pow(1 - settle, 2);
    if (shot.result === "saved") {
      x = shot.target.x + settleEase * (shot.target.x < 500 ? 70 : -70);
      groundY = shot.target.y + 42;
      height = Math.abs(Math.sin(settle * Math.PI * 2.2)) * 22 * (1 - settle);
      y = groundY - height;
      scale = lerp(shot.finalScale, 0.48, settleEase);
    } else if (shot.result === "post") {
      const outward = shot.postSide === "left" ? -115 : shot.postSide === "right" ? 115 : (shot.target.x < fieldRect.width / 2 ? -80 : 80);
      x = shot.target.x + settleEase * outward;
      groundY = shot.target.y + settleEase * (shot.postSide === "top" ? 72 : 52);
      height = Math.abs(Math.sin(settle * Math.PI * 2.4)) * 32 * (1 - settle);
      y = groundY - height;
      scale = lerp(shot.finalScale, 0.45, settleEase);
    } else if (shot.result === "missed") {
      x = shot.target.x + settleEase * (shot.target.x < 500 ? -42 : 42);
      groundY = shot.target.y + (shot.profile.roll ? 44 : 32);
      height = shot.profile.roll ? 0 : Math.abs(Math.sin(settle * Math.PI * 1.8)) * 28 * (1 - settle);
      y = groundY - height;
      scale = lerp(shot.finalScale, 0.42, settleEase);
    } else if (shot.profile.roll) {
      groundY = lerp(shot.target.y, netFloorY, settleEase);
      height = 0;
      y = groundY;
      x = shot.target.x + (shot.target.x - shot.start.x) * 0.08 * settleEase;
      scale = lerp(shot.finalScale, 0.5, settleEase);
    } else if (shot.result === "goal") {
      const postKick = shot.postIn
        ? (shot.postSide === "left" ? 46 : shot.postSide === "right" ? -46 : (shot.target.x < fieldRect.width / 2 ? 22 : -22)) * (1 - Math.pow(1 - settle, 3))
        : 0;
      x = shot.target.x + postKick;
      groundY = lerp(shot.target.y, netFloorY, settleEase);
      height = Math.abs(Math.sin(settle * Math.PI * 2.15)) * shot.profile.rebound * (1 - settle);
      y = groundY - height;
      scale = lerp(shot.finalScale, 0.5, settleEase);
    }
    shadowY = groundY + 18;
    shadowScale = lerp(0.58, 0.5, settleEase) * (1 + height / 560);
    shadowOpacity = clamp(lerp(0.25, 0.18, settleEase) - height / 440, 0.08, 0.45);
    spin += settleEase * shot.profile.spin * (shot.result === "goal" ? 0.42 : 0.62);
  }
  els.ball.style.transition = "none";
  els.ball.style.left = `${x}px`;
  els.ball.style.top = `${y}px`;
  els.ball.style.bottom = "auto";
  els.ball.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${spin}deg)`;
  els.ball.style.filter = `drop-shadow(0 ${Math.max(3, 9 - height / 18)}px ${Math.max(4, 10 - height / 20)}px rgba(0,0,0,0.28))`;
  els.ballShadow.style.left = `${shadowX}px`;
  els.ballShadow.style.top = `${shadowY}px`;
  els.ballShadow.style.bottom = "auto";
  els.ballShadow.style.opacity = String(shadowOpacity);
  els.ballShadow.style.transform = `translate(-50%, -50%) scale(${shadowScale})`;
  els.ballTrail.style.opacity = shot.profile.strong && t < 0.86 ? "0.55" : "0";
  els.ballTrail.style.left = `${x - 48}px`;
  els.ballTrail.style.top = `${y + 4}px`;
  els.ballTrail.style.transform = `rotate(${Math.atan2(shot.target.y - shot.start.y, shot.target.x - shot.start.x)}rad) scaleX(${1 + shot.profile.power / 130})`;
  if (!game.shotCompleted && elapsed >= shot.duration + shot.settleDuration) {
    game.shotCompleted = true;
    completeShot();
  }
}

function completeShot() {
  const shot = game.shot;
  if (shot.actor === "opponent" && shot.result === "pending") resolveOpponentShot(shot);
  const scored = shot.result === "goal";
  if (shot.actor === "player") trackPenaltyTaken();
  if (game.mode === "classic") {
    game.playerResults.push(scored ? "goal" : shot.result);
    unlockPlayerShotAchievements(shot);
    if (scored) {
      game.classicScore += 1;
      game.classicStreak += 1;
      if (game.classicScore >= 5) unlockAchievement("classicScorer");
      if (game.classicScore >= 10) unlockAchievement("doubleDigits");
      if (game.classicScore >= 20) unlockAchievement("classicPro");
      if (game.classicScore >= 35) unlockAchievement("classicMonster");
      if (game.classicStreak >= 5) unlockAchievement("noPanic");
      if (game.classicStreak >= 10) unlockAchievement("onFire");
      if (game.playerResults.length === 5 && game.playerResults.every(result => result === "goal")) unlockAchievement("perfectStart");
    } else {
      game.classicFails += 1;
      game.classicStreak = 0;
    }
    showFeedback(shot.feedback, scored ? "goal" : shot.result === "saved" ? "saved" : "miss");
    reactToShot(shot);
    updateHud();
    setState(STATES.ROUND_RESULT);
    window.setTimeout(() => {
      if (game.classicFails >= 3) endClassicMode();
      else {
        resetRoundVisuals();
        setState(STATES.SHOOTING);
        updateHud();
      }
    }, CONFIG.roundDelayMs);
    return;
  }
  if (shot.actor === "player") {
    game.playerResults.push(scored ? "goal" : shot.result);
    unlockPlayerShotAchievements(shot);
    if (scored) {
      game.playerScore += 1;
    }
  } else {
    game.opponentResults.push(scored ? "goal" : shot.result);
    if (scored) game.opponentScore += 1;
  }
  showFeedback(shot.feedback, scored ? "goal" : shot.result === "saved" ? "saved" : "miss");
  reactToShot(shot);
  updateHud();
  setState(STATES.ROUND_RESULT);
  window.setTimeout(() => {
    const verdict = getMatchVerdict();
    if (verdict) finishMatch(verdict);
    else advanceTurn();
  }, CONFIG.roundDelayMs);
}

function reactToShot(shot) {
  if (shot.result === "goal") {
    els.net.classList.add("shake");
    els.goalFlash.classList.add("flash");
    els.field.classList.add("shake");
    spawnParticles(shot.actor === "player" ? "goal" : "oppgoal");
    updateCrowd(shot.actor === "player" ? "The crowd erupts!" : "The away fans roar.");
    playTone("goal");
  } else if (shot.result === "saved") {
    spawnParticles("save");
    updateCrowd(shot.actor === "player" ? "The keeper read it!" : "Huge save!");
    playTone("saved");
  } else {
    updateCrowd("The crowd gasps.");
    playTone("miss");
  }
}

function advanceTurn() {
  game.turn = game.turn === "shoot" ? "save" : "shoot";
  resetRoundVisuals();
  setState(game.turn === "shoot" ? STATES.SHOOTING : STATES.SAVING);
  updateHud();
  if (game.turn === "shoot") {
    updateCrowd("Your kick. Hold, aim, release.");
  } else {
    updateCrowd("Get ready. React after the shot!");
    const token = Date.now();
    game.saveTurnToken = token;
    window.setTimeout(() => {
      if (game.state === STATES.SAVING && game.saveTurnToken === token) startOpponentShot();
    }, difficultyConfig().readyMs);
  }
}

function getMatchVerdict() {
  const playerKicks = game.playerResults.length;
  const opponentKicks = game.opponentResults.length;
  const inSuddenDeath = playerKicks > CONFIG.bestOfFiveShots || opponentKicks > CONFIG.bestOfFiveShots;
  if (inSuddenDeath) game.tournamentHadSuddenDeath = true;
  if (inSuddenDeath && playerKicks !== opponentKicks) return null;
  const remainingPlayer = Math.max(0, CONFIG.bestOfFiveShots - playerKicks);
  const remainingOpponent = Math.max(0, CONFIG.bestOfFiveShots - opponentKicks);
  if (game.playerScore > game.opponentScore + remainingOpponent) return "win";
  if (game.opponentScore > game.playerScore + remainingPlayer) return "loss";
  if (playerKicks >= CONFIG.bestOfFiveShots && opponentKicks >= CONFIG.bestOfFiveShots && playerKicks === opponentKicks && game.playerScore !== game.opponentScore) {
    return game.playerScore > game.opponentScore ? "win" : "loss";
  }
  return null;
}

function finishMatch(verdict) {
  if (verdict === "win") {
    unlockAchievement("firstMatchWin");
    if (game.roundIndex === 0) unlockAchievement("qfWinner");
    if (game.roundIndex === 1) {
      unlockAchievement("sfWinner");
      unlockAchievement("finalist");
      const finalsReached = incrementStat("penaltyRushFinalsReached");
      if (finalsReached >= 2) unlockAchievement("cupRun");
    }
    if (game.playerResults.length > CONFIG.bestOfFiveShots) unlockAchievement("suddenDeath");
    if (game.playerResults.length > CONFIG.bestOfFiveShots && game.settings.difficulty === "hard") unlockAchievement("pressurePlayer");
    if (game.playerResults.slice(0, CONFIG.bestOfFiveShots).length === CONFIG.bestOfFiveShots && game.playerResults.slice(0, CONFIG.bestOfFiveShots).every(result => result === "goal")) unlockAchievement("perfectFive");
    if (game.shot && game.shot.actor === "player" && game.shot.result === "goal") unlockAchievement("iceCold");
    if (game.shot && game.shot.actor === "opponent" && game.shot.result === "saved") unlockAchievement("finalSave");
    if (game.playerResults.length === CONFIG.bestOfFiveShots && game.opponentResults.length === CONFIG.bestOfFiveShots) unlockAchievement("clutchFinish");
    if (game.settings.difficulty === "easy") unlockAchievement("easyWin");
    if (game.settings.difficulty === "medium") unlockAchievement("mediumWin");
    if (game.settings.difficulty === "hard") {
      unlockAchievement("hardWin");
      const hardWins = incrementStat("penaltyRushHardMatchWins");
      if (hardWins >= 3) unlockAchievement("hardModeHero");
    }
    const matchStreak = incrementStat("penaltyRushTournamentMatchWinStreak");
    if (matchStreak >= 2) unlockAchievement("backToBack");
    game.roundIndex += 1;
    localStorage.setItem("penaltyRushTournamentBestRound", String(Math.max(getBestRound(), game.roundIndex)));
    updateBestDisplay();
    if (game.roundIndex >= 3) {
      endTournament(true);
    } else {
      showProgress("Match Won!", `${game.selectedCountry.name} beat ${game.opponent.name}. Next opponent: ${game.opponents[game.roundIndex].name}.`, "Next Match");
    }
  } else {
    game.tournamentLosses += 1;
    setStat("penaltyRushTournamentMatchWinStreak", 0);
    endTournament(false);
  }
}

function endTournament(won) {
  els.gameOverEyebrow.textContent = won ? "Champions" : "Eliminated";
  els.gameOverTitle.textContent = won ? "You Won the Cup!" : "Tournament Over";
  els.finalScore.textContent = game.selectedCountry.name;
  els.finalBest.textContent = won ? "Champion" : ROUNDS[game.roundIndex] || "Round 1";
  els.finalGoals.textContent = `${game.playerScore}-${game.opponentScore}`;
  els.finalShots.textContent = String(game.playerResults.length);
  els.finalAccuracy.textContent = String(game.saves);
  els.finalMode.textContent = won ? "Trophy Won" : "Eliminated";
  els.playAgainButton.textContent = "Retry Tournament";
  if (won) {
    unlockAchievement("champions");
    unlockAchievement("firstNationChampion");
    if (game.tournamentLosses === 0) unlockAchievement("cleanTournament");
    if (game.settings.difficulty === "easy") unlockAchievement("easyChampion");
    if (game.settings.difficulty === "medium") unlockAchievement("mediumChampion");
    if (game.settings.difficulty === "hard") {
      unlockAchievement("hardChampion");
      if (!game.tournamentHadSuddenDeath) unlockAchievement("noMercy");
    }
    const tournamentWins = incrementStat("penaltyRushTournamentWins");
    if (tournamentWins >= 3) unlockAchievement("dynasty");
    const winners = new Set(readJson("penaltyRushTournamentWinners", []));
    winners.add(game.selectedCountry.id);
    writeJson("penaltyRushTournamentWinners", [...winners]);
    if (winners.size >= 3) unlockAchievement("multiNationChampion");
    if (winners.size >= COUNTRIES.length) unlockAchievement("worldChampion");
    spawnParticles("trophy", 60);
    updateCrowd("Confetti everywhere! Champions!");
  }
  setState(STATES.GAME_OVER);
}

function endClassicMode() {
  const previousBest = Number(localStorage.getItem("penaltyRushClassicBest") || 0);
  const best = Math.max(previousBest, game.classicScore);
  localStorage.setItem("penaltyRushClassicBest", String(best));
  game.classicEnded = true;
  if (game.classicFails >= 3) unlockAchievement("threeStrikes");
  if (game.classicScore > previousBest) unlockAchievement("newRecord");
  if (game.settings.difficulty === "easy" && game.classicScore >= 10) unlockAchievement("classicEasy10");
  if (game.settings.difficulty === "medium" && game.classicScore >= 15) unlockAchievement("classicMedium15");
  if (game.settings.difficulty === "hard" && game.classicScore >= 20) unlockAchievement("classicHard20");
  els.gameOverEyebrow.textContent = "Classic Mode";
  els.gameOverTitle.textContent = "Run Complete";
  els.finalScore.textContent = String(game.classicScore);
  els.finalBest.textContent = String(best);
  els.finalGoals.textContent = `Fails ${game.classicFails}/3`;
  els.finalShots.textContent = String(game.playerResults.length);
  els.finalAccuracy.textContent = String(game.classicStreak);
  els.finalMode.textContent = "Classic";
  els.playAgainButton.textContent = "Restart Classic";
  setState(STATES.GAME_OVER);
}

function showFeedback(text, type) {
  els.feedback.className = `feedback ${type}`;
  els.feedback.textContent = text;
  void els.feedback.offsetWidth;
  els.feedback.classList.add("show");
}

function updateCrowd(text) {
  els.crowdBanner.textContent = text;
}

function spawnParticles(kind = "goal", count = 24) {
  els.particles.innerHTML = "";
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${40 + Math.random() * 20}%`;
    particle.style.top = `${22 + Math.random() * 22}%`;
    particle.style.setProperty("--tx", `${rand(-180, 180)}px`);
    particle.style.setProperty("--ty", `${rand(-130, 130)}px`);
    particle.style.background = kind === "save" ? "var(--accent)" : Math.random() > 0.5 ? "var(--goal)" : "var(--accent)";
    els.particles.appendChild(particle);
  }
  window.setTimeout(() => {
    els.particles.innerHTML = "";
  }, 900);
}

function loop(now) {
  const delta = Math.min(40, now - (game.lastTime || now));
  game.lastTime = now;
  if (game.state === STATES.SHOOTING && game.charging) {
    game.power += game.powerDirection * delta * 0.16;
    if (game.power >= CONFIG.maxPower) {
      game.power = CONFIG.maxPower;
      game.powerDirection = -1;
    } else if (game.power <= CONFIG.minPower) {
      game.power = CONFIG.minPower;
      game.powerDirection = 1;
    }
  }
  game.smoothAim.x = lerp(game.smoothAim.x, game.aim.x, 0.2);
  game.smoothAim.y = lerp(game.smoothAim.y, game.aim.y, 0.2);
  game.smoothSaveAim.x = lerp(game.smoothSaveAim.x, game.saveAim.x, 0.22);
  game.smoothSaveAim.y = lerp(game.smoothSaveAim.y, game.saveAim.y, 0.22);
  const savingControl = game.state === STATES.SAVING || (game.state === STATES.SHOT_IN_PROGRESS && game.shot && game.shot.actor === "opponent");
  const activeAim = savingControl ? game.smoothSaveAim : game.smoothAim;
  els.aimReticle.style.left = `${activeAim.x}%`;
  els.aimReticle.style.top = `${activeAim.y}%`;
  els.gloves.style.left = `${game.smoothSaveAim.x}%`;
  els.gloves.style.top = `${game.smoothSaveAim.y}%`;
  if (game.state === STATES.SHOOTING) {
    els.powerFill.style.width = `${game.power}%`;
    els.shotTypeLabel.textContent = game.charging ? powerLabel(game.power) : "Hold to shoot";
  }
  if (game.state === STATES.SAVING) {
    els.powerFill.style.width = "72%";
    els.shotTypeLabel.textContent = "Get ready";
  }
  if (game.state === STATES.SHOT_IN_PROGRESS && game.shot) {
    animateKeeper(now);
    animateBall(now);
  }
  requestAnimationFrame(loop);
}

function powerLabel(power) {
  if (power < 38) return "Low roller";
  if (power <= 72) return "Accurate";
  return "Power shot";
}

function playTone(type) {
  if (!game.settings.sound || game.settings.sfxVolume <= 0) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  game.audioContext ||= new AudioContext();
  const ctx = game.audioContext;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const now = ctx.currentTime;
  const tones = {
    button: [420, 0.04, "sine", 0.04],
    kick: [120, 0.09, "square", 0.08],
    goal: [660, 0.18, "triangle", 0.09],
    saved: [230, 0.16, "sawtooth", 0.07],
    miss: [150, 0.18, "sine", 0.07]
  };
  const [frequency, duration, wave, volume] = tones[type] || tones.button;
  oscillator.type = wave;
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(60, frequency * 0.62), now + duration);
  gain.gain.setValueAtTime(volume * (game.settings.sfxVolume / 100), now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

els.playButton.addEventListener("click", () => {
  renderCountries();
  setState(STATES.COUNTRY);
  playTone("button");
});
els.classicButton.addEventListener("click", startClassicMode);
els.achievementsButton.addEventListener("click", () => {
  renderAchievements();
  setState(STATES.ACHIEVEMENTS);
  playTone("button");
});
els.backToMenuButton.addEventListener("click", () => {
  setState(STATES.MENU);
  playTone("button");
});
els.continueTournamentButton.addEventListener("click", startMatch);
els.progressMenuButton.addEventListener("click", () => {
  setState(STATES.MENU);
  playTone("button");
});
els.playAgainButton.addEventListener("click", () => {
  if (game.mode === "classic") startClassicMode();
  else {
    renderCountries();
    setState(STATES.COUNTRY);
  }
  playTone("button");
});
els.mainMenuButton.addEventListener("click", () => {
  setState(STATES.MENU);
  updateBestDisplay();
  playTone("button");
});
els.pauseButton.addEventListener("click", pauseGame);
els.resumeGameButton.addEventListener("click", resumeGame);
els.pauseMenuButton.addEventListener("click", quitToMenu);
els.howToButton.addEventListener("click", () => {
  setState(STATES.HOW_TO_PLAY);
  playTone("button");
});
els.closeHowToButton.addEventListener("click", () => {
  setState(STATES.MENU);
  playTone("button");
});
els.closeAchievementsButton.addEventListener("click", () => {
  setState(STATES.MENU);
  playTone("button");
});
els.settingsButton.addEventListener("click", () => {
  setState(STATES.SETTINGS);
  playTone("button");
});
els.closeSettingsButton.addEventListener("click", () => {
  setState(STATES.MENU);
  playTone("button");
});
els.resetScoresButton.addEventListener("click", () => {
  [
    "penaltyRushTournamentBestRound",
    "penaltyRushClassicBest",
    "penaltyRushAchievements",
    "penaltyRushCountriesUsed",
    "penaltyRushTournamentWinners",
    "penaltyRushTotalPenalties",
    "penaltyRushMatchesPlayed",
    "penaltyRushTotalSaves",
    "penaltyRushFinalsReached",
    "penaltyRushTournamentWins",
    "penaltyRushHardMatchWins",
    "penaltyRushTournamentMatchWinStreak"
  ].forEach(key => localStorage.removeItem(key));
  updateBestDisplay();
  renderAchievements();
  playTone("miss");
});

function syncDifficultyButtons() {
  els.difficultyButtons.forEach(button => {
    button.classList.toggle("selected", button.dataset.difficulty === game.settings.difficulty);
  });
}

els.difficultyButtons.forEach(button => {
  button.addEventListener("click", () => {
    game.settings.difficulty = button.dataset.difficulty;
    localStorage.setItem("penaltyRushDifficulty", game.settings.difficulty);
    syncDifficultyButtons();
    playTone("button");
  });
});

els.soundToggle.checked = game.settings.sound;
els.musicVolumeSlider.value = String(game.settings.musicVolume);
els.sfxVolumeSlider.value = String(game.settings.sfxVolume);
els.soundToggle.addEventListener("change", () => {
  game.settings.sound = els.soundToggle.checked;
  localStorage.setItem("penaltyRushSound", String(game.settings.sound));
  playTone("button");
});
els.musicVolumeSlider.addEventListener("input", () => {
  game.settings.musicVolume = Number(els.musicVolumeSlider.value);
  localStorage.setItem("penaltyRushMusicVolume", String(game.settings.musicVolume));
});
els.sfxVolumeSlider.addEventListener("input", () => {
  game.settings.sfxVolume = Number(els.sfxVolumeSlider.value);
  localStorage.setItem("penaltyRushSfxVolume", String(game.settings.sfxVolume));
});
els.fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
  playTone("button");
});

document.addEventListener("pointerover", event => {
  if (event.target.closest("button")) playTone("button");
});

els.field.addEventListener("pointermove", event => {
  if ([STATES.SHOOTING, STATES.SAVING, STATES.SHOT_IN_PROGRESS].includes(game.state)) {
    moveAimFromPoint(event.clientX, event.clientY);
  }
});
els.field.addEventListener("pointerdown", event => {
  event.preventDefault();
  moveAimFromPoint(event.clientX, event.clientY);
  if (game.state === STATES.SHOOTING) beginCharge();
  if (game.state === STATES.SHOT_IN_PROGRESS && game.shot && game.shot.actor === "opponent") playerDive();
});
els.field.addEventListener("pointerup", event => {
  event.preventDefault();
  releaseShot();
});
els.field.addEventListener("pointercancel", releaseShot);

window.addEventListener("keydown", event => {
  if (event.code === "Escape") {
    if (game.state === STATES.PAUSED) resumeGame();
    else pauseGame();
    return;
  }
  if (event.code === "Space" && [STATES.SHOOTING, STATES.SAVING, STATES.SHOT_IN_PROGRESS, STATES.ROUND_RESULT].includes(game.state)) {
    event.preventDefault();
    if (game.state === STATES.SHOT_IN_PROGRESS && game.shot && game.shot.actor === "opponent") playerDive();
  }
  if (![STATES.SHOOTING, STATES.SAVING].includes(game.state)) return;
  const target = game.state === STATES.SAVING ? game.saveAim : game.aim;
  const step = event.shiftKey ? 5 : 2.5;
  if (["ArrowLeft", "a", "A"].includes(event.key)) {
    event.preventDefault();
    target.x = clamp(target.x - step, -10, 110);
  }
  if (["ArrowRight", "d", "D"].includes(event.key)) {
    event.preventDefault();
    target.x = clamp(target.x + step, -10, 110);
  }
  if (["ArrowUp", "w", "W"].includes(event.key)) {
    event.preventDefault();
    target.y = clamp(target.y - step, -18, 116);
  }
  if (["ArrowDown", "s", "S"].includes(event.key)) {
    event.preventDefault();
    target.y = clamp(target.y + step, -18, 116);
  }
});

renderCountries();
updateBestDisplay();
syncDifficultyButtons();
resetRoundVisuals();
requestAnimationFrame(loop);
