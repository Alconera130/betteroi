module.exports = async d => {
const code = d.command.code
const inside = d.unpack()
const err = d.inside(inside)

// credits to Mid

if (err) return d.error(err)

const gw = d.client.giveawaysManager.giveaways.find((g) => g.messageID === inside.inside);

if(!gw) {
    res = "false"
} else {
    res = "true"
}

d.client.giveawaysManager.reroll(inside.inside)

return {
    code: code.replaceLast(`$rerollGiveaway${inside}`, res)
  }

}