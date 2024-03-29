let playGame = function() {

    const getRandomWord = function () {
        const wordList = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir",
                          "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki",
                          "Darius", "Diana", "Dr.Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio",
                          "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern",
                          "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina",
                          "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "Leblanc", "Lee Sin", "Leona", "Lilia", "Lissandra", "Lucian",
                          "Lulu", "Lux", "Maitre Yi", "Malphite", "Malzahar", "Maokai", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami",
                          "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu et Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy",
                          "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze",
                          "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona",
                          "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere",
                          "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear",
                          "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];
        let randomIndex = Math.floor( Math.random() * wordList.length);
        return wordList[randomIndex];
    }

    let misteryWord = getRandomWord().toUpperCase().split('');
    let display = "_".repeat(misteryWord.length).split('');
    let numberOfTry = 0;
    
    while (misteryWord.join("") !== display.join("")) {
        
        let guess = prompt("choose a letter").toUpperCase();
        
        for (let i = 0; i < misteryWord.length; i++) {
            if (misteryWord[i] === guess ) {
                display.splice(i, 1, guess);
            }
        }    
        console.log(display.join(""));
        numberOfTry++;
    }    
    console.log("You won you find " + display.join("") + " within " + numberOfTry + " Try")
};

let playGameButton = document.querySelector('#playGame').addEventListener('click', playGame);