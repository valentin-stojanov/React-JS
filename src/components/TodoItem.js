export default function todoItem ({
    id,
    text,
    onDelete
}) {
    return <li>{text} <button onClick={() => onDelete(id)}>x</button></li>
}