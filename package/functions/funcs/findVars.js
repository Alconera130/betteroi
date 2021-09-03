module.exports = async (d) => {
    let inside = d.unpack()
    let code = d.command.code
    
    let error = d.inside(inside)
    if (error) return d.error(error)
    
    const [ message, query = 10, format = '{position}.) {name}' ] = inside.splits
    
    let res
    let choice = format
    
    try {
        
        res = Object.keys(d.client.variables).filter(x => x.startsWith(message)).map((x, n) => choice.replace(/{(position|number)}/gi, n+1).replace(/{(name|var)}/gi, x)).slice(0, query).join('\n')
    
        code = code.replaceLast(`$findVars${inside}`, res)
        
    } catch {
        return d.error(`\`$${d.func}: Invalid Usage\``)
    }
    
    return {
        code: code
    }
}    
