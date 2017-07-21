const isRequired = (value) => {
    let answer;
    if (!value || value.length === 0) {
        answer = false;
    } else {
        answer = true;
    }
    return answer ? null : 'This field is required';
};


export default function validationConfig(props) {
    const { mainInfoName,
            mainInfoDescription,
            sizePaperType,
            sizeFinishing,
            sizeNumberOfPages,
            sizeNumberOfCopies,
            sizeWidth,
            sizeHeight,
            sizeProductionDate,
            bidDeadline,
            attachment,
            dateOfSelection

        } = props.rootState;

    return {
        fields: [
            'mainInfoName',
            'mainInfoDescription',
            'sizePaperType',
            'sizeFinishing',
            'sizeNumberOfPages',
            'sizeNumberOfCopies',
            'sizeWidth',
            'attachment',
            'sizeHeight',
            'sizeProductionDate',
            'bidDeadline',
            'dateOfSelection'
        ],

        validations: {
            mainInfoName: [
                [isRequired, mainInfoName]
            ],
            mainInfoDescription: [
                [isRequired, mainInfoDescription]
            ],
            sizePaperType: [
                [isRequired, sizePaperType]
            ],
            sizeFinishing: [
                [isRequired, sizeFinishing]
            ],
            sizeNumberOfPages: [
                [isRequired, sizeNumberOfPages]
            ],
            attachment: [
                [isRequired, attachment]
            ],
            sizeNumberOfCopies: [
                [isRequired, sizeNumberOfCopies]
            ],
            sizeWidth: [
                [isRequired, sizeWidth]
            ],
            sizeHeight: [
                [isRequired, sizeHeight]
            ],
            sizeProductionDate: [
                [isRequired, sizeProductionDate]
            ],
            bidDeadline: [
                [isRequired, bidDeadline]
            ],
            dateOfSelection: [
                [isRequired, dateOfSelection]
            ],

        }
    };
}
