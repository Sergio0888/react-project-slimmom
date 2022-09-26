const fields = {
  height: {
    label: 'Height *',
    type: 'number',
    name: 'height',
    min: '100',
    max: '250',
    title: 'Input your height in (cm)',
  },
  age: {
    label: 'Age *',
    type: 'number',
    name: 'age',
    min: '18',
    max: '100',
    title: 'Input your age (years)',
  },
  weight: {
    label: 'Weight *',
    type: 'number',
    name: 'weight',
    min: '20',
    max: '500',
    title: 'Input your weight (kg)',
  },
  desiredWeight: {
    label: 'Desired weight *',
    type: 'number',
    name: 'desiredWeight',
    min: '20',
    max: '500',
    title: 'Input your desired weight (kg)',
  },
  bloodType1: {
    label: '1',
    type: 'radio',
    name: 'bloodType',
    value: '1',
  },
  bloodType2: {
    label: '2',
    type: 'radio',
    name: 'bloodType',
    value: '2',
  },
  bloodType3: {
    label: '3',
    type: 'radio',
    name: 'bloodType',
    value: '3',
  },
  bloodType4: {
    label: '4',
    type: 'radio',
    name: 'bloodType',
    value: '4',
  },
};

export default fields;
