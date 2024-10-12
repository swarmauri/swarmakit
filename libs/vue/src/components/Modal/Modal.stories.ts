import Modal from './Modal.vue';

export default {
  title: 'Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: `
    <Modal v-bind="args" v-model="args.modelValue">
      <template #title>Modal Title</template>
      <template #content>
        <p>This is the modal content.</p>
      </template>
    </Modal>
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  disabled: false,
};

export const Open = Template.bind({});
Open.args = {
  modelValue: true,
  disabled: false,
};

export const Closed = Template.bind({});
Closed.args = {
  modelValue: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: true,
  disabled: true,
};