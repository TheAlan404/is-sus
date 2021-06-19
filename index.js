let susWords = ["sus", "vent", "amogus", "among us", "amongus", "impostor", "imposter"];

function isSus(value){
	if(typeof value !== "string") throw new Error("sussy baka, only strings accepted for now");
	let sussy = susWords.map(susWord => value.includes(susWord)).includes(true);
	return sussy;
};

module.exports = isSus;
