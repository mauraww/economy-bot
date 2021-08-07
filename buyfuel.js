module.exports = {
  
  name: "buy-fuel",
  code: `
$description[**@$username Success in buying a Fuel⛽ !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]
$setGlobalUserVar[fuel;$sum[$getGlobalUserVar[fuel];1]]
$onlyIf[$getGlobalUserVar[cash]>=2500;Not enough cash!]

$color[fabdf1]`
}
