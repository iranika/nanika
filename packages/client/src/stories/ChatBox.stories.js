import ChatBox from '../components/reviewer/ChatBox.vue';
import * as HeaderStories from './Header.stories';

export default {
  title: 'nanika/reviewer/chatbox',
  component: ChatBox,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ChatBox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: '<ChatBox />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
