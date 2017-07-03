/* eslint-disable */
export default {
  "title": "New request",
  "info": {
    "title": "Main informations",
    "fields": {
      "name": {
        "label": "name",
        "placeholder": "Name your request"
      },
      "description": {
        "label": "description",
        "placeholder": "Describe your request"
      }
    }
  },
  "size": {
    "title": "Size",
    "blocks": {
      "dimensionBlock": {
        "width": {
          "label": "width",
          "placeholder": 120
        },
        "height": {
          "Label": "height",
          "Placeholder": 360
        },
        "date": {
          "Label": "Production date",
          "Placeholder": "mm / dd / yy"
        }
      },
      "properties": [
        {
          "label": "paper type",
          "items": [
            {
              "label": "Choose paper type",
              "disabled": true,
              "selected": false,
              "value": null
            },
            {
              "label": "Type1",
              "disabled": false,
              "selected": false,
              "value": "type1"
            },
            {
              "label": "Type2",
              "disabled": false,
              "selected": true,
              "value": "type2"
            }
          ]
        },
        {
          "label": "finishing",
          "items": [
            {
              "label": "Choose finishing",
              "disabled": true,
              "selected": false,
              "value": null
            },
            {
              "label": "Type1",
              "disabled": false,
              "selected": false,
              "value": "type1"
            },
            {
              "label": "Type2",
              "disabled": false,
              "selected": true,
              "value": "type2"
            }
          ]
        }
      ],
      "amount": [
        {
          "label": "number of pages",
          "value": 0,
        },
        {
          "label": "number of copies",
          "value": 0,
        }
      ]
    }
  },
  "attachment": {
    "title": "Attachment",
    "label": "Drag & drop your files here or clock anywhere to upload",
    "reservedLabel": "Click anywhere to upload your files"
  },
  "bidding": {
    "title": "request type",
    "description": "Specify how many parties do you want to receive a bid from",
    "radioBtns": [
      {
        "label": "1-way",
        "id": "r-1"
      },
      {
        "label": "2-way",
        "id": "r-2"
      },
      {
        "label": "3-way",
        "id": "r-3"
      }
    ]
  },
  "bottomBlocks": [
    {
      "title": "Bid deadline",
      "description": "When do you want to receive proposals",
      "inputLabel": "Bid deadline",
      "placeholder": "mm / dd / yy"
    },
    {
      "title": "Date of selection",
      "description": "When will you make a selection",
      "inputLabel": "Date of selection",
      "placeholder": "mm / dd / yy"
    }
  ]
};
/* eslint-enable */
