const ms = require("ms");

module.exports = d => {
    const code = d.command.code
    const inside = d.unpack()
    const err = d.inside(inside)
    
    if (err) return d.error(err)
    
     // credits to Mid
    
        const options = [
    ttim,
    winners,
    prize,
    channel = d.message.channel.id
    ] = inside.splits
    
    const ch = d.client.channels.cache.get(channel)
    
    if (!ch)
    return d.error(
      `\`${d.func}: Invalid channel ID in ${inside}\``
    );

    d.client.giveawaysManager.start(ch, {
           time: parseInt(ttim),
            winnerCount: parseInt(winners),
            prize: prize,
            hostedBy: d.message.author,
                 lastChance: {
        enabled: true,
        content: '⚠️ **¡ LAST CHANCE TO ENTER !** ⚠️',
        threshold: 10000,
        embedColor: '#FF0000'
    }, 
        messages: {
        giveaway: '🎉🎉 **NEW GIVEAWAY** 🎉🎉',
        giveawayEnded: '🎊 🎊 **GIVEAWAY ENDED** 🎊 🎊',
        timeRemaining: 'Time remaining: **{duration}**',
        inviteToParticipate: 'React with 🎉 to participate!',
        winMessage: '🎊 **Congratulations**, {winners}! You won **{prize}**!\n{messageURL}',
        embedFooter: 'Ends',
        noWinner: 'Giveaway cancelled, no valid participations.',
        hostedBy: 'Hosted by: {user}',
        winners: 'Winner(s)',
        endedAt: 'Ended at',
        units: {
            seconds: 'seconds',
            minutes: 'minutes',
            hours: 'hours',
            days: 'days',
            pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
        }
    }
        })

    return {
    code: code.replaceLast(`$startGiveaway${inside}`, ""),
    };
    
    }
