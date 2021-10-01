const names = [
    'Ada Lovelace',
    'Alan Turing',
    'Grace Hopper',
]

export function generateName() {
    const nameIndex = Math.floor(Math.random() * names.length)
    return names[nameIndex]
}
