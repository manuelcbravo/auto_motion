export default function FrequencyTask({id, array}) {
    const frequency = array?.find(frequency => frequency.id === id);

    return frequency ? frequency.nombre : 'Valor no encontrado';
}
