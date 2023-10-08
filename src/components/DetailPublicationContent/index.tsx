import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


interface PublicationBody{
    body: string | undefined
}

export function DetailPublicationContent({body} : PublicationBody){
    return(
        <>
            <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
        </>
    )
}