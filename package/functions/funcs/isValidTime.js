module.exports = async (d) => {
    let inside = d.unpack()
    let code = d.command.code
    
    let error = d.inside(inside)
    if (error) return d.error(error)
    
    try {
        code = code.replaceLast(`$isValidTime${inside}`, require('ms') ? true : false)
    } catch {
        return d.error(`\`$${d.func}: Invalid Usage\``)
    }

    return {
        code: code
    }
} 
