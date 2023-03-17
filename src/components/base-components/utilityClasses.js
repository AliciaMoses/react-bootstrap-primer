const utilityClasses = [
    { class: ".text-{color}", description: "Sets the text color to a specific color" },
    { class: ".bg-{color}", description: "Sets the background color to a specific color" },
    { class: ".d-{display}", description: "Sets the display property for an element (e.g. d-flex for display: flex)" },
    { class: ".flex-{value}", description: "Sets the flex property for an element (e.g. flex-grow-1 for flex-grow: 1)" },
    { class: ".align-{align-items}", description: "Sets the align-items property for a flex container (e.g. align-items-center for align-items: center)" },
    { class: ".justify-{justify-content}", description: "Sets the justify-content property for a flex container (e.g. justify-content-between for justify-content: space-between)" },
    { class: ".rounded", description: "Rounds the corners of an element" },
    { class: ".shadow", description: "Adds a box shadow to an element" },
    { class: ".mr-{size} and .ml-{size}", description: "Sets the right and left margin for an element, respectively (e.g. mr-3 for margin-right: 1rem)" },
    { class: ".mt-{size} and .mb-{size}", description: "Sets the top and bottom margin for an element, respectively (e.g. mt-4 for margin-top: 1.5rem)" },
    { class: ".py-{size} and .px-{size}", description: "Sets the vertical and horizontal padding for an element, respectively (e.g. py-2 for padding-top: 0.5rem; padding-bottom: 0.5rem;)" },
    { class: ".text-{size}", description: "Sets the font size for text (e.g. text-sm for font-size: 0.875rem)" },
    { class: ".fw-{weight}", description: "Sets the font weight for text (e.g. fw-bold for font-weight: bold)" },
  ];

  export default utilityClasses;