const Controller = () => {
    const view = View()
    const model = Model()

    const loaduser = async () => {
        const result = model.loadElementsRandomaly();
        view.render(result);
    }

    return {
        loaduser
    }

}
const controller = Controller();
$(`#first`).on("click", function () {

    controller.loaduser();

})

