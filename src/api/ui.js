/* eslint-disable */
export default {
  "title": "New request",
  "info": {
    "title": "Main information",
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
      "dimension_block": {
        "width": {
          "label": "width",
          "placeholder": 120
        },
        "height": {
          "label": "height",
          "Placeholder": 360
        },
        "date": {
          "label": "Production date"
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
              "label": "Type-1",
              "disabled": false,
              "selected": false,
              "value": "type-1"
            },
            {
              "label": "Type-2",
              "disabled": false,
              "selected": true,
              "value": "type-2"
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
              "label": "Type-1",
              "disabled": false,
              "selected": false,
              "value": "type-1"
            },
            {
              "label": "Type-2",
              "disabled": false,
              "selected": true,
              "value": "type-2"
            }
          ]
        }
      ],
      "amount": [
        {
          "label": "number of pages",
          "value": 0
        },
        {
          "label": "number of copies",
          "value": 0
        }
      ]
    }
  },
  "attachment": {
    "title": "Attachment",
    "info": "Optional (maximum 4 files)",
    "label": "Drag & drop your files here or clock anywhere to upload",
    "reserved_label": "Click anywhere to upload your files"
  },
  "bidding": {
    "title": "request type",
    "description": "Specify how many parties do you want to receive a bid from",
    "radio_buttons": [
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
  "bottom_blocks": [
    {
      "title": "Bid deadline",
      "description": "When do you want to receive proposals",
      "input_label": "Bid deadline"
    },
    {
      "title": "Date of selection",
      "description": "When will you make a selection",
      "input_label": "Date of selection"
    }
  ]
};
/* eslint-enable */
