module.exports = async d => {

    const code = d.command.code

    const inside = d.unpack()

    const err = d.inside(inside)

    if (err) return d.error(err)

    let [channelid,msgid, pos,opt] = inside.splits

let Options = ["name","id","size","height","width","url"]

     const channel = d.client.channels.cache.get(channelid)

         if(!channel) return d.error(`:x: Invalid Channel ID Provided In $getAttachments${inside}`)

    if(pos <= 0) return d.error("Position Can't Be Less Than 1")

const msg = await channel.messages.fetch(msgid) 

if(!msg) return d.error(`:x: Invalid Message ID Provided In $getAttachments${inside}`)

    

    const option = Options.includes(opt)

    if(!option) return d.error(`:x: Invalid Option Provided In $getAttachments${inside}`)
 
    let attachment = msg.attachments.map(x=>x) 

let res ;

switch(opt) {

case "url" :
if(attachment.length ==0)
    res = "None" 
        else{
res = attachment [pos-1].url 
    }
break;

case "name" :

if(attachment.length ==0)
    res = "None" 
        else{
res = attachment [pos-1].name 
    }
break;

case "id" :

if(attachment.length ==0)
    res = "None" 
        else{
res = attachment [pos-1].id
    }

break;

case "size" :

if(attachment.length ==0)
    res = "None" 
        else{
res = attachment [pos-1].size
    }

break;

case "height" :

if(attachment.length ==0)
    res = "None" 
        else{
res = attachment [pos-1].height
    }

break;

case "width" :

if(attachment.length ==0)
    res = "None" 
        else{
res = attachment [pos-1].width
    }

break;

}

return {

        code: code.replaceLast(`$getAttachments${inside}`, res)

    }

}
// i fixed it 
