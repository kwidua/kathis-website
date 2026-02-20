

export default function profileImage({url, variables}: {url: string, variables: string}) {
    return (
        <img src={url} style={{borderRadius: '50%'}} className={variables}/>
    )
}