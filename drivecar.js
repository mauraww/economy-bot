module.exports = {
  
  name: "drive-car",
  code: `
$description[**Broom broom!**]
$setGlobalUserVar[car;$sub[$getGlobalUserVar[car];2]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];2]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];6]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];4]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hungry level is 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirsty level is 100%]
$onlyIf[$getGlobalUserVar[car]>=2;Not enough car!]

$color[fabdf1]`
}
