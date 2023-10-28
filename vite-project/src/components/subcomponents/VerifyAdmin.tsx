type ResponseProps = {
    username: string | undefined;
    status: string | undefined;
}

function VerifyAdmin(props: ResponseProps) {
    if (props.status !== 'admin') {
        return <p>Halala !!! {props.username} vous n'êtes pas admin.</p>
    } else {
        return <p>Yes you are admin !</p>
    }
}

export default VerifyAdmin