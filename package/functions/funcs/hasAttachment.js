module.exports = async d => {
    const code = d.command.code
    const inside = d.unpack()
    const err = d.inside(inside)
    
    if (err) return d.error(err)

    const fields = inside.splits;

    const messageID = fields[1] || fields[0];
  
    const channelID = fields[1] ? fields[0] : d.message.channel.id;

    const channel = d.client.channels.cache.get(channelID);

    if (!channel)
    return d.error(`\`${d.func}: Invalid channel ID in ${inside}\``);

  const m = await channel.messages.fetch(messageID).catch((err) => null);

  if (!m)
    return d.error(`\`${d.func}: Invalid message ID in ${inside}\``);

    let ffs = false;
    if(m.attachments.first()) ffs = true;

    return {
        code: code.replaceLast(`$hasAttachment${inside}`, ffs)
    }
}