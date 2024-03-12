function Image({ id }) {
    const src = "https://lh3.googleusercontent.com/d/" + id;

    return (
        <img src={src} />
    )
}

export default Image
