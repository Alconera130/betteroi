module.exports = d => {
    const code = d.command.code
    const inside = d.unpack()
    const err = d.inside(inside)
    
    if (err) return d.error(err)
    
    // credits to Mid
    
    const gw = d.message.client.giveawaysManager.giveaways.find((u) => u.messageID === inside.inside);
        
    if(!gw) {
        pass = false
    } else {
        pass = true
    }

    return {
    code: code.replaceLast(`$giveawayExists${inside}`, pass),
    };
    
    }