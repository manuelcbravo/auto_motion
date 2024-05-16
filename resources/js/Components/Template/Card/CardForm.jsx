import LoadingButton from "@/Components/Template/Form/LoadingButton.jsx";

export default function CardForm({NameForm, Processing, Inputs}) {

    return (
        <div className="card">
            <div className="card-body">

                <form onSubmit={NameForm}>
                    {Inputs}

                    <div className="col-12 text-end">
                        <LoadingButton loading={Processing} type="submit" className="btn btn-success rounded-pill px-4 mt-3">
                            Guardar
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
