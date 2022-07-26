// export const renderTemplate = (temp) => {
//
//     const root = document.querySelector('#root');
//
//     if (!temp.length) return root.textContent = 'Страница не готова';
//     temp.forEach(item =>{
//         root.insertAdjacentHTML('beforeend', item)
//     });
// }
export const renderTemplate = (query, block) => {
        const root = document.querySelector(query);
        root.appendChild(block.getContent())
        return root;
}