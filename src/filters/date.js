export default value => {
    const date = new Date(value)
    return date.toLocaleString(['en-GB'], {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
}