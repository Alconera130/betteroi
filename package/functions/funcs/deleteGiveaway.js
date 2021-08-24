module.exports = async d => {
    const code = d.command.code
    const inside = d.unpack()
    const err = d.inside(inside)
    
    if (err) return d.error(err)
    
    // credits to Mid

    const gw = d.client.giveawaysManager.giveaways.find((g) => g.messageID === inside.inside);
    
    if(!gw) {
        res = "false"
    } else {
        res = "true"
    }
    
    d.client.giveawaysManager.delete(inside.inside)
    
    return {
        code: code.replaceLast(`$deleteGiveaway${inside}`, res)
      }
    
    }