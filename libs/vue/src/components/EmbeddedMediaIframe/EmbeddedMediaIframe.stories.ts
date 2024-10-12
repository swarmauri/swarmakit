import EmbeddedMediaIframe from './EmbeddedMediaIframe.vue';

export default {
  title: 'Media/EmbeddedMediaIframe',
  component: EmbeddedMediaIframe,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    state: { control: 'select', options: ['Default', 'Fullscreen', 'Buffering'] },
  },
};

const Template = (args: any) => ({
  components: { EmbeddedMediaIframe },
  setup() {
    return { args };
  },
  template: '<EmbeddedMediaIframe v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  state: 'Default',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  state: 'Fullscreen',
};

export const Buffering = Template.bind({});
Buffering.args = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  state: 'Buffering',
};