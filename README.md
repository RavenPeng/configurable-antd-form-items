# Configurable Antd Form Items

Configurable Antd Form Items is an easier configurable antd form items includes Input, InputNumber, TextArea, Select, Radio, Checkbox, Upload, etc..

# How to Use

0. `npm install @holiday_peng/configurable-antd-form-items`

1. because the editor was built based on react and antd, it has to be used in a react project like this: 
````
import React from 'react';
import FormItems from '@holiday_peng/configurable-antd-form-items';

class Example extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      imageUpdated: false
    }
  }
  onBlur = () => {}
  onClick = () => {}
  render() {
    const formItems = [
      {
        label: 'Topic', // the default type is Input, so you don't need to add it again.
        key: 'name',
        onBlur: this.onBlur,
        required: true,
      },
      {
        type: 'select',
        label: 'Type',
        key: 'type',
        required: true,
        initialValue: 'Tag',
        options: [{ value: 'Tag', value: 'Topic }], // if the value and text are the same, you don't need to add it again.
      },
      {
        type: 'select',
        label: 'Category',
        key: 'category',
        options: category,
        showSearch: true,
        optionFilterProp: 'children',
        filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) === 0,
        allowClear: true,
      },
      {
        type: 'number', // 'number' means InputNumber
        label: 'Biz Type',
        key: 'biz_type',
        initialValue: 1,
      },
      {
        type: 'uploadImg',
        key: 'logo',
        label: 'Logo Upload',
        actionPath: '/upload/image',
        required: true,
        onChange: () => this.setState({ imageUpdated: true }),
        onRemove: () => form.resetFields('logo'),
        isShowSlot: !imageUpdated, // you can add a slot to show the default image or something else when necessary.
        slot: <img className='preview-img' src={form.getFieldValue('logo')} />,
      },
      {
        type: 'component',
        label: 'Keywords',
        key: 'keyword',
        component: <Tags isNew={isNew} />, // you can also add customised component in it.
      },
      {
        type: 'btn',
        btnType: 'danger',
        text: 'Query Example Articles',
        onClick: this.onClick,
        loading: isLoading,
        disabled: !keyword.length,
      },
    ];

    return (
      <Form>
        <FormItems formItems={formItems} form={form} needInit={true} data={data} /> // if you need to fill the form with ajax data, don't forget to add 'needInit' and 'data' in the props.
      </Form>
    );
  }
}
const WrappedExample = Form.create({ name: 'Example' })(Example);
export default WrappedExample;
````