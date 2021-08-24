module.exports = async d => {
    const code = d.command.code
    const inside = d.unpack()
    const err = d.inside(inside)
    
    if (err) return d.error(err)
      
    const valid = ["youtube", "chess", "poker", "betrayal", "fishing"]
    const c = inside.inside.toLowerCase()
    
    if(!d.message.member.voice.channel) return d.error(
      `\`${d.func}: Unknown voice channel ID.\``
    );
    
    if(valid.some(w => c.includes(w)) === false) return d.error(
      `\`${d.func}: Invalid option in ${inside}\``
    );
    
    const inv = await d.client.discordTogether.createTogetherCode(d.message.member.voice.channel.id, c)

    return {
    code: code.replaceLast(`$together${inside}`, inv.code),
    };
    
    }