module.exports = {
  
  name: "buy-house",
  code: `
$description[**@$username Success in buying a House🏡 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000000]]
$setGlobalUserVar[house;$sum[$getGlobalUserVar[house];1]]
$onlyIf[$getGlobalUserVar[cash]>=1000000;Not enough cash!]

$color[fabdf1]`
}
