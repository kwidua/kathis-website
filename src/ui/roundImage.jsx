

export default function profileImage({url, variables}) {
    return (
        <img src={url} style={{borderRadius: '50%'}} className={variables}/>
    )
}