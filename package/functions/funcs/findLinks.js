module.exports = (d) => {

    let inside = d.unpack()

    let code = d.command.code

     // Husky

    let error = d.inside(inside)

    if (error) return d.error(error)

    

    const [ content, separator = ', ' ] = inside.splits

    

    return {

        code: code.replaceLast(`$findLinks${inside}`, content.split(' ').filter(x => x.startsWith("https://")).join(separator) || "")

    }

} 