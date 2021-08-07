module.exports = {
  
  name: "balance",
  aliases: ['bal', 'ball'],
  code: `$title[Your Balance $username]
$thumbnail[$userAvatar[$authorID]]
$description[💵 **| Cash**
$$getGlobalUserVar[cash]

💳 **| Bank**
$$getGlobalUserVar[bank]]
$color[fabdf1]
$footer[@$username Balance || Made by mora#1999]
$addTimestamp`
}
