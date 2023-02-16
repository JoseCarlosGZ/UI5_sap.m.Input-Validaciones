sap.ui.define(["sap/ui/core/mvc/Controller"],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
    "use strict";

    return Controller.extend("ns.project1.controller.View1", {
        onInit: function () {},
        onInputLiveChange: function (oEvent) {
            var oInput = oEvent.getSource();
            var sValue = oInput.getValue();

            var oRegExp = /^[0-9][a-zA-Z]{5}$/;

            //Si el Input está vacío no le pongas ningún color
            if (oInput.getValue().trim() === "") {
                oInput.setValueState(sap.ui.core.ValueState.None);
                oInput.setValueStateText("");
            //Si el Input tiene uno o más caracteres escritos y además no cumple la expresión regular, entonces pintalo de rojo y da mensaje error
            } else if (oInput.getValue().trim().length >= 1 && ! oRegExp.test(sValue)) {
                oInput.setValueState(sap.ui.core.ValueState.Error);
                oInput.setValueStateText("Introduce una cadena de 6 caracteres en el que el primero tiene que ser un nº del 0-9 y\n los siguientes 5 deben ser letras a-zA-Z \n(e.g. 1abcde)");
            //Si el flujo ha llegado hasta aquí es que se han descartado las otras dos alternativas y como además el Input está capado a 6 caracteres (maxLength="6"), la única condición restante es que se cumpla la expresión regular, en cuyo caso lo pinta de verde.
            } else {
                oInput.setValueState(sap.ui.core.ValueState.Success);
                oInput.setValueStateText("");
            }


        }


    });
});
