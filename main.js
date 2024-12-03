
function toFixed(x)
{
	if (Math.abs(x) < 1.0) {
		var e = parseInt(x.toString().split('e-')[1]);
		if (e) {
			x *= Math.pow(10,e-1);
			x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
		}
	} else {
		var e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
			e -= 20;
			x /= Math.pow(10,e);
			x += (new Array(e+1)).join('0');
		}
	}
	return x;
}

//Beautify and number-formatting adapted from the Frozen Cookies add-on (http://cookieclicker.wikia.com/wiki/Frozen_Cookies_%28JavaScript_Add-on%29)
function formatEveryThirdPower(notations)
{
	return function (val)
	{
		var base=0,notationValue='';
		if (!isFinite(val)) return 'Infinity';
		if (val>=1000000)
		{
			val/=1000;
			while(Math.round(val)>=1000)
			{
				val/=1000;
				base++;
			}
			if (base>=notations.length) {return 'Infinity';} else {notationValue=notations[base];}
		}
		return (Math.round(val*1000)/1000)+notationValue;
	};
}

function rawFormatter(val){return Math.round(val*1000)/1000;}

var formatLong=[' thousand',' million',' billion',' trillion',' quadrillion',' quintillion',' sextillion',' septillion',' octillion',' nonillion'];
var prefixes=['','un','duo','tre','quattuor','quin','sex','septen','octo','novem'];
var suffixes=['decillion','vigintillion','trigintillion','quadragintillion','quinquagintillion','sexagintillion','septuagintillion','octogintillion','nonagintillion'];
for (var i in suffixes)
{
	for (var ii in prefixes)
	{
		formatLong.push(' '+prefixes[ii]+suffixes[i]);
	}
}

var formatShort=['k','M','B','T','Qa','Qi','Sx','Sp','Oc','No'];
var prefixes=['','Un','Do','Tr','Qa','Qi','Sx','Sp','Oc','No'];
var suffixes=['D','V','T','Qa','Qi','Sx','Sp','O','N'];
for (var i in suffixes)
{
	for (var ii in prefixes)
	{
		formatShort.push(' '+prefixes[ii]+suffixes[i]);
	}
}
formatShort[10]='Dc';


var numberFormatters=
[
	formatEveryThirdPower(formatShort),
	formatEveryThirdPower(formatLong),
	rawFormatter
];


const MIN_PRICE_MULTIPLIER = 0.02

let cookiesPerSecond = 0
let cookies = 0
let clicks = 0
let cookiesPerClick = 1

let upgrades = {}
let upgradesBought = {}
let items = {
	"item 1" : {
		"Price": 10,
		"CookiesPerSecond" : 0.1,
		"PriceMultiplier" : 0.17,
		"PriceMultiplierReducer" : 0.02
	},
	"item 2" : {
		"Price": 20,
		"CookiesPerSecond" : 1,
		"PriceMultiplier" : 0.20,
		"PriceMultiplierReducer" : 0.02
	}
}

let inventory = {}

//TODO : buy many
function buyItem(itemName) {
	if (!items[itemName]) throw new Error("Item " + itemName + " not found.")

	const price = items[itemName]
	if (cookies < price) throw new Error("You don't have any cookies to buy an " + itemName + ".")
	
	cookies -= price
	if (inventory[itemName]) {
		inventory[itemName]['quantity'] += 1
	}
	else {
		inventory[itemName] = items[itemName]
		inventory[itemName]['quantity'] = 1
	}

	updateCookiesPerSecond()
}

function updateCookiesPerSecond() {
	let totalCookiesPerSecond = 0
	for (let item in inventory) {
		totalCookiesPerSecond += item['quantity'] * item['CookiesPerSecond']
	}
	cookiesPerSecond = totalCookiesPerSecond
}

function addCookies(addedCookies){
	cookies += addedCookies
	updateCookieLabel()
}

function clickCookie(){
	addCookies(cookiesPerClick)
}

function updateCookies(){
	addCookies(CookiesPerSecond)
}

setInterval(1000, updateCookies)