module.exports = {
    weight: {
        gramsToPounds: (grams) => {
            return grams * 0.00220462
        },

        kilogramsToPounds: (kg) => {
            return kg * 2.20462262
        },

        poundsToKilograms: (pounds) => {
            return pounds * 0.45359237
        },

        poundsToGrams: (pounds) => {
            return pounds * 453.59237
        }
    },

    length: {
        cmToInch: (cm) => {
            return cm * 0.39370079
        },

        cmToFoot: (cm) => {
            return cm * 0.0328084
        },

        footToInch: (foot) => {
            return foot * 12
        },

        inchToFoot: (inch) => {
            return inch * 0.08333333
        }
    }
}



