module.exports = async d => {
    const code = d.command.code
    const inside = d.unpack()
    const err = d.inside(inside)
    
    const c = inside.inside || d.message.channel.id
    const channel = d.client.channels.cache.get(c);
    
    if(!channel) return d.error(`\`${d.func}: Invalid channel ID in ${after}\``);
    
    const m = await channel.messages.fetch({ limit: 1 }).catch(err => null)
    const msg = await m.first()
    
    if(!msg) {
        pase = 'undefined'
    } else {
        pase = msg.id
    }
    if(inside.inside) {
     return {
    code: code.replaceLast(`$lastMessageID${inside}`, pase),
    };
    } else { 
     return {
         code: code.replaceLast('$lastMessageID', pase)
     }
    }
}