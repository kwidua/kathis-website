

export default function profileImage({url, position}) {
    return (
        <img src={url} width={200} style={{borderRadius: '50%'}} className="opacity-55 hover:opacity-100"/>
    )
}