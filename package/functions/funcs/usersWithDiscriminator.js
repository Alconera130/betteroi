module.exports = async d => {
    const code = d.command.code

    const inside = d.unpack()
	const err = d.inside(inside)

	if (err) return d.error(err)

    const options = [
        tagID = d.message.author.discriminator,
        separator = "\n",
        forceCache = "no"
    ] = inside.splits

    let n = Number(tagID)
    if (isNaN(n))
    return d.error(`\`${d.func}: Invalid number in ${inside.total}\``);

    if (forceCache === "yes") {
        if (d.message.guild.memberCount !== d.message.guild.members.cache.size) {
            await d.message.guild.members.fetch()
        }
    }

    let user = d.message.guild.members.cache.filter(x => x.user.discriminator == (tagID));
    let users = user.map(uwu => uwu.user.username+"**#"+uwu.user.discriminator+"**")

    return {
        code: code.replaceLast(`$usersWithDiscriminator${inside}`, users.join(separator) || "")
    }
}