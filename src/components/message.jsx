export default function Message(props)
{
    if (props.isLoggedIn)
        return <h3>Welcome User</h3>;
    else
        return <h3>Please Login</h3>;
}