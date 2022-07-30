export const renderTemplate = (query, block) => {
        const root = document.querySelector(query);

        if (root)
        root.appendChild(block.getContent())

        block.dispatchComponentDidMount()

        return root;
}
export const getInputs = (inputs) =>{
    const arr = []
    Object.keys(inputs).forEach((key) => {
        arr.push(inputs[key]._element.innerHTML )
    })
    return arr
}
