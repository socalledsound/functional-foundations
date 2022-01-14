const root = document.getElementById('root');

const createElement = (type, props={}, children = []) => {
    const el = document.createElement(type);
    Object.keys(props).forEach(key => {
        el[key] = props[key]
    });
    children.forEach(child => {
        el.appendChild(child)
    });
    return el
}

const emojis = ['👊','⬆️','🐰','📤','🎩'];

const EmojiElement = (emoji) => {
        return createElement('div', {className: 'emoji-sm', innerText: emoji})
    }

const App = () => {
        return createElement('div', {className: 'app-container'}, emojis.map(emoji => EmojiElement(emoji)))
    }


root.appendChild(App());