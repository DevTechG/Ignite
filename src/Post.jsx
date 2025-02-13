/* // Default Exports
function Post() {
    return <p>Post</p>
}
export default Post
 */

// Named Exports
export function Post(props) {
    return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}
// Default Exports vs Named Exports