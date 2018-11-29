var products = 
[
["Hoodie", 34.99, "Clothing", "Boston University Colosseum Arch & Logo Pullover Hoodie", "It's game time! Make sure you're ready to rep your Boston University spirit by grabbing this impressive Colosseum Arch & Logo hoodie. The Boston University graphics alert anyone you encounter to your dedication to the greatest school around.", "Hoodie1.jpg"],
["Long Sleeve T-shirt", 24.99, "Clothing", "Boston University Fanatics Branded Distressed Arch Over Logo Long Sleeve Hit T-Shirt", "Nothing gets you more excited than when it's time to go watch your beloved Boston University take on their opponents. Now you can boast your intense passion for the team everywhere you go with this unique Distressed Arch Over Logo long sleeve hit T-shirt from Fanatics Branded. The classic Boston University graphics printed on this tee will make your fandom apparent all season long!", "LongSleeveTsh1.jpg"],
["Pants", 34.99, "Clothing", "Boston University Fanatics Branded Sideblocker Fleece Pants", "Show your love for the Boston University with these Sideblocker fleece pants from Fanatics Branded! The festive Boston University graphics will make your passionate fandom apparent. You'll be ready to rep your favorite team with these soft Boston University fleece pants!", "Pants.jpg"],
["Jacket", 59.99, "Clothing", "Boston University Under Armour Threadborne Quarter-Zip Jacket", "Being a devoted Boston University fan is the best feeling in the world! Show others how it looks with this Threadborne quarter-zip jacket from Under Armour. This jacket features enough Boston University graphics so that everyone in your presence will be able to see from a mile away how much you love your favorite team!", "Jacket1.jpg"],
["Hat", 19.99, "Clothing", "Boston University Top of the World Triple Threat Hat", "You love donning the best and brightest Boston University gear to every game. Now you can complete your look with this Triple Threat adjustable hat by Top of the World! This hat features a comfortable adjustable fit and raised embroidery that gives it that extra pop of fandom. Wear the mark of a true Boston University fan with the stellar look of this awesome hat.", "Hat1.jpg"],
["Sport T-shirt", 24.99, "Clothing", "Boston University Custom Sport T-Shirt", "Sure you can go around and tell everyone how dedicated you are to the Boston University, but there is a much easier way to get your point across. Let everyone you pass know that you are a born and bred Boston University fan with this Custom Sport T-shirt! This tee boasts your team pride with Boston University graphics and the name and number of your choice. There are many ways to show your spirit, but this way you won't lose your voice.", "SportTsh1.jpg"],
["Knit Hat", 22.99, "Clothing", "Boston University Top of the World Jack Frost Cuffed Knit Hat", "The pride you feel for the Boston University can't be compared by anyone in the stands. Now you can express that unwavering devotion, even when the temperature drops, when you put on this awesome Boston University Jack Frost cuffed knit hat from Top of the World. The embroidered Boston University graphics on this hat are bold and will show where your allegiances lie.", "Knithat1.jpg"],
["Shorts", 44.99, "Clothing", "Boston University Under Armour MK-1 Shorts", "From sunup until sundown, you do your best to illustrate your unwavering Boston University pride everywhere you go. Continue to let everyone know that your fervent fandom will never fade when you're out being active by choosing these dynamic MK-1 shorts from Under Armour. Everyone will know which squad has your heart when they check out the impressive Boston University graphics decorating them!", "Shorts.jpg"],
["Watch", 89, "Clothing", "Boston University 48MM Unisex Watch", "You have always been the #1 Boston University fan out there. Put that on display by sporting this 48MM Unisex Watch. Equipped with a sweet Boston University logo and colors this watch will instantly become one of your favorite team accessories in the building.", "Watch.jpg"],
["Women T-shirt", 29.99, "Clothing", "Boston University Fanatics Branded Women's Plus Sizes Primary Team Logo T-Shirt", "Sure you can go around and tell everyone how dedicated you are to the Boston University, but there is a much easier way to get your point across. Let everyone you pass know that you are a born and bred Boston University fan with this Fanatics Branded Primary Team Logo T-shirt! This tee boasts your team pride with Boston University graphics. There are many ways to show your spirit, but this way you won't lose your voice.", "WTsh1.jpg"],
["Phone Case", 24.99, "Supplies", "Boston University Samsung Galaxy Plaid Glitter Case", "Celebrate your Boston University fandom and add to your team collection with this Samsung Galaxy Plaid Glitter Case!", "Case.jpg"],
["Flash Drive", 24.99, "Supplies", "Boston University 16GB Credit Card Style USB Bottle Opener Flash Drive", "Celebrate your Boston University fandom and add to your team collection with this 16GB Credit Card Style USB Bottle Opener Flash Drive!", "Drive.jpg"],
["Portable Charger", 49.99, "Supplies", "Boston University 4000mAh Portable USB Charger", "Celebrate your Boston University fandom and add to your team collection with this 4000mAh Portable USB Charger!", "Charger.jpg"],
["Calculator", 120.99, "Supplies", "Graphing Calculator", "Graphing calculator with all the funtionality you need. Ace your algebra, trigonometry, and calculus classes! Requires 4 AAA batteries.", "Calculator.png"]
];
//The above data, including the images, all come from the following website: http://shop.cbssports.com/CBS_Boston_University

var NAME_INDEX = 0;
var COST_INDEX = 1;
var CATEGORY_INDEX = 2;
var DESC_SHORT_INDEX = 3;
var DESC_LONG_INDEX = 4
var IMAGE_INDEX = 5;


function getAllProducts(){
	return products;
}

function getProductByName(name){
	var p = getAllProducts();
	for(var i=0; i < p.length; i++){
		if(p[i][NAME_INDEX] == name){
			return p[i];
		}
	}
	return null;
}