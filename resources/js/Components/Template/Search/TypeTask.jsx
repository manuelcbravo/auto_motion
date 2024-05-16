export default function TypeTask({id, array}) {
    const type = array?.find(type => type.id === id);

    return type ? type.nombre : 'Valor no encontrado';
}
