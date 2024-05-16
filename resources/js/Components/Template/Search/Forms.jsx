export default function Forms({id, array}) {
    const form = array?.find(form => form.id === id);

    return form ? form.nombre : 'Valor no encontrado';
}
